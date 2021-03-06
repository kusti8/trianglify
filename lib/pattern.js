/*
 * Pattern.js
 * Contains rendering implementations for trianglify-generated geometry
 */

function Pattern(polys, opts) {

  // SVG rendering method
  function render_svg(svgOpts) {
    return polys;
  }

  // Canvas rendering method
  function render_canvas(canvas) {

    return null;
  }

  // PNG rendering method
  // currently returns a data url as a string since toBlob support really isn't there yet...
  function render_png() {
    return render_canvas().toDataURL("image/png");
  }

  // Return an object with all the relevant functions/properties attached to it
  return {
    polys: polys,
    opts: opts,
    svg: render_svg,
    canvas: render_canvas,
    png: render_png
  };
}

module.exports = Pattern;
