"use strict";

const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");

let popperInstance = null;

function create() {
  popperInstance = Popper.createPopper(button, tooltip, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }
    ]
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute("data-show", "");
  create();
}

function hide() {
  tooltip.removeAttribute("data-show");
  destroy();
}

let showTooltip = false;

button.addEventListener("click", () => {
  showTooltip = !showTooltip;
  if (showTooltip) {
    show();
  } else {
    hide();
  }
});
