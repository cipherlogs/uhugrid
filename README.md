![UHUGRID poster](./imgs/uhu.png)

<br>


# UHU GRID
Reliable and lightweight solution to place container's
items in optimal position based on available horizantal space.

By default, all items will glue with each other *UHU glue*,
not allowing any free space to be wasted.

**UHUGRID** will generate random sizes that are pleasing to the eye
and are guaranteed to fit in the available free space.

The layout will always be different each time you refresh the page
or request a new one while keeping the same order you have
in you HTML markup.


<br>

![Gallery layout example](./imgs/1.jpg)

<br>

# Motivation!

+ **UHUGRID** is hardly doing any calculation, that's why
  it is fast and snappy no matter how many time a layout change
  is requested.

+ No media queries were used and the layout is fully responsive
  and it scales up to 4K displays or beyond.

+ the items order will always stay the way you wrote them in your
  HTML markup, unlike other solutions that uses
  `grid-auto-flow: dense` or `flex-box`.


<br>

# How to
Before you read the documentation, watch this 3min video
to understand some basics that will save you headaches later.

**Add image later**
[Watch it on YouTube](https://youtube.com)


<br>

# Install
You can use **UHUGRID** in two ways

#### Plug & Play
You inject it in you HTML markup and the rest will be taken care of!

```HTML
<script defer src="CDN link"></script>
```

#### NPM
You use npm to install it, then import it to you JavaScript file,
this way you will have access to the API so that you can control
the layout changes the way you want.

```
$ npm install --save-dev uhugrid
```

```JavaScript
import {uhu} from "uhugrid";
```


<br>

# Usage
Use the CSS class `.gallery` for the container
and `.gallery__item` for all its children.


```HTML
<div class="gallery">

  <div class="gallery__item">
    <!-- PLACE WHEREVER YOU WANT IN HERE -->
  </div>

</div>
```

**UHUGRID** only comes with the basic styling that's needed for
it to function properly. It is up to you to style `.gallery__item`
and its content the way want.

Overriding `.gallery` and `.gallery__item` is the correct way
the library was intended to be used.
However please watch the [**How to**](#how-to) video, to understand
some important details before you override any styles.


<br>

# UHU

The `uhu()` method controls the column size and the maximum height
for each row.

#### Syntax

> glue(column_size, maximum_row_height)


#### Paramaters

+ column_size **optional**: a range from 1 to 40,
  1 is approximately `100px`. If you insert `0` or `undefined`,
  **UHUGRID** will choose the best column size depending on
  the display width of the user.
  By default it can scale up to 4K displays.

+ maximum_row_height **optional**: for example if you insert 3,
  **UHUGRID** will randomly generate rows that are
  `100px`, `200px`, `300px` in height.
  If you insert 1, all rows will stay at `100px` height.
  `0` or `undefined` to let **UHUGRID** choose the most
  aesthetic height range related to column size.
  


```JavaScript
// everthing will be taken care of by default
uhu();

// all grid items will have the same height
// items width are always different and can't be controlled
uhu(1, 1);

// column width will be calculated according to the viewport width,
// and the row height is a range from 1 to 2
// it could be 100px height or 200px height
// items width as always will be generated randomly to
// aesthetically match the row height
uhu(0, 2)
```


<br>

# FAQ

<br>

### Can I use `grid-gap`?

![Gallery layout example](./imgs/2.jpg)

This library is fast because it is not trying to do many things,
rather focusing and perfecting one main design.

The main idea was to glue all grid items together not letting any
free space in between. However it is understandable to desire
spacing columns and rows apart.

#### Gaps between rows
You can easily insert gaps between rows using `row-gap`

```css
.gallery {
  row-gap: 1rem;
}
```

#### Gaps between columns
As explained in the [how to](#how-to) video, gaps between columns
can be baked inside the library. However they are a bit of a hack
and they demand more calculation.
It is not worth it if the solution has a 1% chance of failure

A better solution is to use something that looks like a gap,
`Border` with `box-sizing: border-box;` enabled.

<br>

> The border solution was demonstrated in the video

<br>

### how much content can I fit inside `.gallery__item`?
**UHUGRID** works best with images and `divs` that contain little
content or content that can be cropped.

The nature of the library is to randomly choose different sizes
that will fit together. So it is possible in the near future
to add an option to force bigger sizes for bigger content.

<br>

> The cropping solution was demonstrated in the video

<br>

### Does UHUGRID listens to screen re size events?
Yes it does, and it is not expensive on the user's CPU.
In real world scenarios, the event will fire 2 to 5 times max.


<br>

# Log
N/A.


<br>

# License
**UHUGRID** is released under the GPL-3.0 license.

