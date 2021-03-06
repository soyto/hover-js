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

``` HTML
<div class="container-fluid">
  <div class="row vh-100 align-items-center hover-target">
    <div class="col text-center">
      <button class="btn btn-outline-secondary" data-hover="bg-success" data-hover-target=".hover-target">
        Hover me 
      </button>
      <button class="btn btn-outline-secondary" data-hover="bg-danger" data-hover-target=".hover-target">
        Or hover me
      </button>
    </div>
  </div>
</div>
```



https://codepen.io/soyto/pen/qgPLrr
