# Elastii
The most reliable and lightweight solution to place container's
items in optimal position based on available horizantal space.

**Elastii** will generate random sizes that will fit in that
available space thus the layout will always be different each time
you refresh the page.


# Motivation!

+ **Elastii** is hardly doing any calculation, that's why
  it is super fast and snappy no matter how many time you request
  a layout change.

+ No media queries were used and the layout is fully responsive.

+ the item order will always stay as your HTML markup order,
  unlike `grid-auto-flow: dense` or `flex-box`


# How to?
include a video of how to.


# Install

```
$ npm install --save-dev elastii
```

If you only want `plug&play` inject **Elastii** to your HTML,
the rest will be taken care of.

```HTML
<script defer src="./node_modules/elastii/min.js"></script>
```

Or you can import it and use the API the way you like

```JavaScript
import {grid} from "elastii";
```


# Usage
Inject **Elastii** in your markup, then use `.gallery` for the
container and `.gallery__item` for all its children.

```HTML
<div class="gallery">
  <div class="gallery__item">
    <img src="" alt="">
  </div>

  <div class="gallery__item">
    <img src="" alt="">
  </div>
</div>
```

**Elastii** only focuses on providing the gallery functionality
without any hustle.
You have to later style all classes to your taste.

# License
**Elastii** is released under the GPL-3.0 license.

