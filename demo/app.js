import {uhu} from "../index.js";

const on = name => cb => element =>
  element.addEventListener (name, cb);

const select = target =>
  document.querySelectorAll (target)[0];

const T = x => f => f (x);
const $ = T;

// slider
const $size = select (".sizerange input");
const $height = select (".heightrange input");
const $update_btn = select (".update");

const update_layout = () => uhu ($size.value, $height.value);

// on events
$ ($size) (on ("input") (update_layout));
$ ($height) (on ("input") (update_layout));
$ ($update_btn) (on ("click") (update_layout));

// on page load
uhu ();

