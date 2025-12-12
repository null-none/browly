function Dropdown(opts) {
  if (!(this instanceof Dropdown)) return new Dropdown(opts);
  var self = this;

  var dropdown;
  var selected;
  var slider;

  function appendItem(x) {
    var item = $('<div class="brwl-dropdown__item">');
    item.on("click", function () {
      // update selection
      if (x.icon) {
        selected.find(".brwl-dropdown__icon img").attr("src", x.icon);
      }
      if (typeof x === "object") {
        selected.find(".brwl-dropdown__text").text(x.text);
      } else if (typeof x === "number" || typeof x === "string") {
        selected.find(".brwl-dropdown__text").text(x);
      }
      if (opts.callback) {
        opts.callback(selected.find(".brwl-dropdown__text").text());
      }
      selected.click();
    });
    item.css({
      width: opts.width,
      height: opts.height,
    });

    if (x.icon) {
      var icon = $('<div class="brwl-dropdown__icon">');
      var img = $(`<img src=".${x.icon}">`);
      if (opts.iconWidth) img.width(opts.iconWidth);
      if (opts.iconHeight) img.height(opts.iconHeight);
      icon.append(img);
    }

    var text = $('<div class="brwl-dropdown__text">');
    if (typeof x === "object") {
      text.append(x.text);
    } else if (typeof x === "number" || typeof x === "string") {
      text.append(x);
    }

    if (x.center || opts.center) {
      text.css({
        left: opts.width / 2 - 20,
      });
    }

    if (x.icon) {
      item.append(icon);
    }

    item.append(text);
    slider.append(item);

    if (x.selected) {
      selected.append(item.clone());
    }
  }

  function appendAllItems(data) {
    data = Object.keys(data).map((key) => data[key]);
    // if none of items are selected, select first
    var oneSelected = false;

    data.forEach(function (x) {
      if (x.selected) oneSelected = true;
    });

    if (!oneSelected) {
      if (data.length) {
        if (typeof data[0] === "object") {
          data[0] = {
            text: data[0].text,
            icon: data[0].icon,
            selected: true,
          };
        } else {
          data[0] = { text: data[0], selected: true };
        }
      }
    }

    data.forEach(function (x) {
      appendItem(x);
    });
  }

  self.update = function (data) {
    dropdown.find(".brwl-dropdown__item").remove();
    appendAllItems(data);
  };

  self.create = function () {
    var data = opts.data;
    dropdown = $('<div class="brwl-dropdown">');
    var arrow = $('<div class="brwl-dropdown__arrow">');
    arrow.append('<img src="images/dropdown-arrow-down.svg">');

    arrow.css({
      top: opts.height / 2 - 15,
      left: opts.width - 25,
    });

    dropdown.append(arrow);

    if (opts.backgroundColor) {
      dropdown.css({ "background-color": opts.backgroundColor });
    }

    selected = $('<div class="brwl-dropdown__selected">');
    dropdown.append(selected);

    slider = $('<div class="brwl-dropdown__slider">');
    dropdown.append(slider);

    appendAllItems(data);

    // make dropdown selectable
    selected.on("click", function () {
      if (slider.is(":visible")) {
        if (opts.onClick) opts.onClick("hidden");
        slider.slideUp("fast");
        dropdown
          .find(".brwl-dropdown__arrow img")
          .attr("src", "./images/dropdown-arrow-down.svg");
      } else {
        if (opts.onClick) opts.onClick("visible");
        slider.slideDown("fast");
        dropdown
          .find(".brwl-dropdown__arrow img")
          .attr("src", "./images/dropdown-arrow-up.svg");
      }
    });
    arrow.on("click", function () {
      selected.click();
    });

    return dropdown;
  };
}
