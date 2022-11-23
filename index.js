// utils
const compose = f => g => x => f (g (x));

const tap = f => x => {f(x); return x;};

const props = keys => obj =>
  keys.reduce ((acc, key) => acc[key], obj);

const pipe = fns => x =>
  fns.reduce ((x, f) => f (x), x);

const when = predicate => f => x =>
  predicate (x) ? f (x) : x;

const on = name => cb => element =>
  element.addEventListener (name, cb);

const from = element => target =>
  element.querySelectorAll (target)[0];

// aliases
const K = x => y => x;
const T = x => f => f (x);
const $ = T;
const log = console.log;
const debug = compose (tap (log));
const prop = key => props ([key]);
const select = from (document);
const gt = x => y => y > x;
const eq = x => y => x === y;
const nth = x => xs => xs[x];
const head = xs => xs[0];
const last = xs => xs[xs.length - 1];
const is_zero = eq (0);
const is_undef = eq (undefined);
const length = x => x.length;
const sub = x => y => y - x;
const add = x => y => y + x;
const inc = add (1);
const dec = sub (1);
const map = f => xs => xs.map (f);
const sum = xs => xs.reduce ((x, y) => x + y, 0);
const is_empty = xs => eq (0) (length (xs));
const crop = xs => xs.slice (1, -1);
const length_gt = n => compose (gt (n)) (length);
const floor = x => Math.floor (x);
const cut_at = i => xs => [
  ...xs.slice (0, i),
  ...xs.slice (i + 1, length (xs))
];



// main
const $html = select ("html");

const get_gallery = () =>
  select (".gallery");

const get_img_count = pipe ([
  get_gallery,
  props (["children", "length"]),
]);

const get_client_width = () =>
  prop ("clientWidth") ($html);

const rand = min => max =>
  floor (Math.random() * (max - min + 1) + min);

const up_to = rand (1);

const range = start => end =>
  start >= end
  ? [end]
  : [start, ...range (inc (start)) (end)];

const dec_percent = percentage => x =>
  floor (x - (x * (percentage / 100)));

const duplicate = n =>
  when (gt (0)) (x => map (K (x)) (range (1) (n)));

const split_by = n => num => {
  if (n > num) {
    return split_by (num) (n);
  }

  const rest = num % n;
  const base = floor (num / n);
  const initial_value =
    gt (num) (inc (base) * n)
    ? duplicate (dec (n)) (base)
    : duplicate (dec (n)) (inc (base));

  return (
    eq (0) (rest)
    ? duplicate (n) (base)
    : [num].reduce (
      (acc, x) => acc.concat ([x - sum (acc)]),
      initial_value
    )
  );
};

const inc_dec = acc => ([a, b]) => {
  const temp_acc = is_empty (acc) ? [[a, b]] : acc;
  const elem = gt (1) (b) ? [inc (a), dec (b)] : undefined;

  return (
    elem === undefined
    ? temp_acc
    : inc_dec ([...temp_acc, elem]) (elem)
  );
};

const shuffle_ends = ys => {
  const shuffle = pipe ([
    xs => inc_dec ([]) ([head (xs), last (xs)]),
    map (([a, b]) => [a, ...crop (ys), b]),
  ]);

  return when (length_gt (1)) (shuffle) (ys);
};

const median = xs =>
  floor (length (xs) / 2);

const backward = index => xs =>
  eq (index) (median (xs))
    ? []
    : (
      gt (0) (index)
      ? shuffle_ends (xs.slice (index, index * -1))
        .map (
          ys => [
            ...xs.slice (0, index),
            ...ys,
            ...xs.slice (index * -1)
          ]
        )
      : shuffle_ends(xs)
    ).concat(backward (inc (index)) (xs));

const split_by_all = n => num => {
  return (
    gt (1) (n)
    ? backward (0) (split_by (n) (num))
    : num
  );
};

const random_nth = xs =>
  xs[rand (0) (length (xs) - 1)];

const shuffle_arr = xs => {
  const index = rand (0) (length (xs) - 1);

  return (
    is_empty (xs)
    ? []
    : [nth (index) (xs), ...shuffle_arr (cut_at (index) (xs))]
  );
};

const make_row = height_limit => width => n => {
  const height = up_to (height_limit);
  const combo = (
    gt (1) (n)
    ? shuffle_arr (random_nth (split_by_all (n) (width)))
    : [width]
  );

  return map (x => [x, height]) (combo);
};

const item_per_row = max => rest => {
  const limit = rest < max ? rest : max;
  const number = up_to (limit);

  return (
    is_zero (rest)
    ? []
    : [number, ...item_per_row (max) (rest - number)]
  );
};

const grid = pics_count => height_limit => grid_size => {
  const pic_per_row = item_per_row (grid_size) (pics_count);

  return (
    map (make_row (height_limit) (grid_size)) (pic_per_row)
  );
};

const inject_style = css =>
  select ("style").innerHTML += css;

const counter = start => {
  let temp = dec (start);

  return () => {
    temp = inc (temp);
    return temp;
  };
};

const template_span = index => col => row => factor => `
  .gallery__item:nth-child(${index}) {
    grid-area: span ${row} / span ${col};
    height: ${factor * row}px
  }
`;

const get_grid_factor = width => {
  const greater_than = x => gt (x) (width);
  return (
    greater_than (4096)
    ? 512
    : (
      greater_than (3840)
      ? 640
      : (
        greater_than (2048)
        ? 512
        : (
          greater_than (1920)
          ? 480
          : (
            greater_than (1080)
            ? 360
            : greater_than (300) ? 200 : 150
          )
        )
      )
    )
  );
};

const update_grid = spec => {
  const {
    element_count,
    grid_size,
    factor,
    height,
  } = spec;

  const index = counter (1);
  const height_per_row =
    height > 0 ? height : rand (1) (2);

  const virtual_grid =
    grid (element_count) (height_per_row) (grid_size);

  const css = (
    virtual_grid
    .flat ()
    .reduce (
      (css, [col, row]) =>
        css += template_span (index ()) (col) (row) (factor),
      ""
    )
  );

  inject_style (css);

  select (".gallery").style["grid-template-columns"] =
    `repeat(auto-fit, ${factor}px)`

  select (".gallery").style["grid-template-rows"] =
    `${factor}px`;
};

const set_basic_styling = () =>
  inject_style (`
      .gallery {
        display: grid;
      }
      .gallery__item {
        overflow: hidden;
      }
      .gallery__item img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  `);

const update_grid_layout = (size, height) => {
  const get_factor = (
    size > 0
    ? () => size * 100
    : () => get_grid_factor (get_client_width ())
  );

  const get_grid_size = () =>
    floor (get_client_width () / get_factor ());

  const update = () => {
    set_basic_styling ();
    update_grid ({
      "element_count": get_img_count (),
      "grid_size": get_grid_size (),
      "factor": get_factor (),
      "height": height,
    });
  };

  update ();
  $ (window) (on ("resize") (update));
};

export {
  update_grid_layout as uhu
};
