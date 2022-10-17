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

# License
**UHUGRID** is released under the GPL-3.0 license.

