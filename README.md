![UHUGRID poster](./imgs/2.jpg)

<br>


# Why?

**UHUGRID** is named for its default behavior of gluing all items together
and not wasting any free space.

Every time the page is refreshed or a layout change is requested,
a new layout is generated, even if the screen size stays the same.

It is the best alternative when:

1. Each card contains little to no inner content
2. The number of cards is dynamic, unknown, or might change in the future
3. You want the layout to be future-proof so you never have to worry about code maintenance

<br>

Due to these limitations, cards are not bound by their content dimensions.
This allows **UHUGRID** to generate visually appealing cards using aspect ratios
that fit best for the current screen size and available free space.

**This is something that Masonry cannot do.**

<br>
<br>

*For more information about speed comparison against native Masonry or other libraries,
see the [FAQ](FAQ.md).*
  
<br>
<br>
<br>
<br>

# Live demo
To access a simple live example [Click here](https://cipherlogs.github.io/uhugrid/demo/)

<br>
<br>
<br>
<br>

# How to
Watch this walkthrough to understand some basics that might save you time.

[Watch on YouTube](https://youtu.be/PT3ZhB4-Y40)

<br>
<br>
<br>
<br>

# Install

### 1. CDN

```
https://cdn.jsdelivr.net/npm/uhugrid/plug.min.js
```

Just inject it in you HTML markup and the rest will be taken care of!
Make sure to read about how to structure your markup so that it can be activated.

<br>

### 2. NPM

```
$ npm install --save-dev uhugrid
```

<br>
<br>
<br>
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
<br>

The plugin comes with the basic styling necessary for it to work properly. 
You are responsible for styling `.gallery__item` and its content as you desire. 

Overriding `.gallery` and `.gallery__item` is the correct way to use the library.
Please watch the [**How to**](#how-to) video to understand
some important details before you override any styles.

<br>
<br>
<br>
<br>

# API

The `uhu()` method controls the column size and the maximum height
for each row.


```JavaScript
uhu();
// everthing will be taken care of by default

uhu(1, 1);
// all grid items will have the same height
// items width are always different and can't be controlled

uhu(0, 2)
// column width will be calculated according to the viewport width
//
// The row height is a range from 1 to 2
// it could be 100px height or 200px height
//
// items width as always will be generated randomly to
// aesthetically match the row height
```

#### Syntax

> uhu (column_size, maximum_row_height)


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
  

<br>
<br>
<br>
<br>

# FAQ
Visit [FAQ.md](./FAQ.md) to read common questions and design
decisions.

<br>
<br>
<br>
<br>

# Changes

+ for upcoming changes take a look at the **Issues** tab.
+ visit [CHANGELOG.md](./CHANGELOG.md) for more information about
  each release.

<br>
<br>
<br>
<br>

# License
**UHUGRID** is released under the GPL-3.0 license.

