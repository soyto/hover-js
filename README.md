# hover-js

Library to add class to elements when user mouse is over another element.

[![](https://data.jsdelivr.com/v1/package/npm/hover-js/badge)](https://www.jsdelivr.com/package/npm/hover-js)


# Usage

## Load as ES6 module

Load module 

`import hoverPlugin from 'hover-js';`

## Load as script

Load the script file.

Then do the following:

`var hoverPlugin = hover_js.default;`

## Usage

You can start it

`hoverPlugin.start()`

also if you want to stop it, you can use `hovePlugin.stop()`


use `data-hover` and `data-hover-target` attributes on Your HTML to apply the class that is under `data-hover` to the elements that satisfied selector specified on `data-hover-target`.


## Example

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="soyto" data-slug-hash="qgPLrr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="qgPLrr">
  <span>See the Pen <a href="https://codepen.io/soyto/pen/qgPLrr/">
  qgPLrr</a> by soyto (<a href="https://codepen.io/soyto">@soyto</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

