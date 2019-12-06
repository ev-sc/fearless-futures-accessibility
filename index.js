jQueryuery(function() {
  /* 'Go to top' link keyboard access */
  jQuery("#page > a.go-top")
    .attr("href", "#")
    .attr("aria-label", "Scroll to top");

  /* Footer header structure */
  jQuery("div#sidebar-footer h3.widget-title").replaceWith(function() {
    return jQuery("<h2 />", {
      html: this.innerHTML,
      class: "widget-title",
      style: "font-size: 4vh !important;"
    });
  });

  /* Home page header structure */
  jQuery("#main h3.widget-title").replaceWith(function() {
    return jQuery("<h2 />", {
      html: this.innerHTML,
      class: "widget-title"
    });
  });

  /* Home page header structure */
  jQuery("div#TrainingProgrammes h3")
    .filter(function() {
      return this.innerHTML === "&nbsp;";
    })
    .replaceWith(function() {
      return jQuery("<p />", {
        html: this.innerHTML
      });
    });

  /* Who we are page header structure */
  jQuery("div#pl-906 div.siteorigin-widget-tinymce h5:empty").remove();
  jQuery(
    "div#pl-906 div.siteorigin-widget-tinymce h5:not(:has(img))"
  ).replaceWith(function() {
    return jQuery("<h2 />", {
      html: this.innerHTML,
      style: "font-size: 3vh !important; text-align: center"
    });
  });

  /* Organisations blog page header structure */
  jQuery("main#main header.page-header h3.archive-title").replaceWith(
    function() {
      return jQuery("<h1 />", {
        html: this.innerHTML,
        class: "archive-title"
      });
    }
  );

  /* Schools page header structure */
  jQuery("header#masthead").append(
    "<h1 style='position: absolute; left: -10000px; width: 1px; height: 1px;'>Schools</h1>"
  );
  jQuery("div.textwidget > h1").replaceWith(function() {
    return jQuery("<p />", {
      html: this.innerHTML,
      style:
        "text-align: center; color: rgb(68, 63, 63); font-size: 5vh !important; font-family: HelveticaNeueLT-Bold !important; font-weight: 400 !important;"
    });
  });

  /* some other shit */
  const $mainMenuButton = jQuery("header.site-header div.btn-menu");
  let mainMenuOpen = false;
  jQuery("nav.mainnav").attr("aria-expanded", false);

  $mainMenuButton.on("click", function() {
    jQuery("nav.mainnav").attr("aria-expanded", !mainMenuOpen);
    mainMenuOpen = !mainMenuOpen;
  });

  function copyAttributes(from, to) {
    $($(from)[0].attributes).each(function() {
      $(to).attr(this.nodeName, this.nodeValue);
    });

    return $(to);
  }
});
