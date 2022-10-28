![UHUGRID poster](./imgs/uhu.png)

<br>


# UHU GRID
Creative layouts like masonry (Pinterest style) and mosaic are used all over the web.
**UHUGRID** is a new alternative

It is fast and offers something none of the above could offer.
**It generates items that are visually appealing**
by using aspect ratios that are suited best for the available free space
(1:1, 9:16, 16:9, 2:3, 5:4, 5:7, 3:2, 4:3 ...)

It is named *UHU* because the default behaviour is to glue all items together
while not allowing any free space to be wasted.
Everytime you refresh the page or request a layout change,
will get a different layout even if the screen size didn't change.

<br>

+ hardly doing any calculation, fast and snappy 
  no matter how many time a layout change is requested.

+ No media queries were used and the layout is fully responsive
  and it scales up to 4K displays or beyond.

+ the item's order will always stay the same as your
  HTML markup, unlike other solutions that uses
  `grid-auto-flow: dense` or `flex-box`.

<br>

# How to
Watch this walkthrough to understand some basics that might save you headaches later.

[Watch on YouTube](https://youtu.be/PT3ZhB4-Y40)

<br>

# Live demo
[Click here](https://cipherlogs.github.io/uhugrid/demo/)
to access a simple live example of **UHUGRID**.

<p align="center">
  <img src="./imgs/1.jpg" alt="Gallery layout example">
</p>

<br>

**PS:** the images that were used in the demo are low quality
images, they are just there for demonstration purposes.

<br>

# Install

### 1. CDN
Just inject it in you HTML markup and the rest will be taken care of!

```HTML
<script
  defer
  src = "https://cdn.jsdelivr.net/npm/uhugrid@1.0.1/plug.min.js"

>
</script>
```

<br>

### 2. NPM

```
$ npm install --save-dev uhugrid
```

```JavaScript
import {uhu} from "uhugrid";
```


<br>

# Usage
`.gallery` for the parent container
and `.gallery__item` for all its children.


```HTML
<div class="gallery">

  <div class="gallery__item">
    <!-- PLACE WHEREVER YOU WANT IN HERE -->
  </div>

</div>
```

**UHUGRID** only comes with the basic styling that are needed for
it to function properly. It is up to you to style `.gallery__item`
and its content the way want.

Overriding `.gallery` and `.gallery__item` is the correct way
the library was intended to be used.
Please watch the [**How to**](#how-to) video, to understand
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

### Does it work for everything?
No layout will, it depends on your design requirements.
**UHUGRID** is perfect if you don't have too much text to fit in a box
or if you have a gallery of images. 

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
we can use `Border` while `box-sizing` is set to `border-box`.

*PS*: If you are going to use border as a gap, it is better
to use it all over the item, not just `border-right`
and `border-left`.

If you look closely to the image above, there's a small aspect
ratio mismatch, because we are using border for column gaps
and `row-gap` for row gaps.

Better use use border alone for perfect aesthetic results.

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

# Changes

+ for upcoming changes take a look at the **Issues** tab.
+ visit [CHANGELOG.md](./CHANGELOG.md) for more info about what changed on each release

<br>

# License
**UHUGRID** is released under the GPL-3.0 license.

