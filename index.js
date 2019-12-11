jQuery(function() {
  const $homePage = jQuery("div#pl-838");
  const $schoolsPage = jQuery("div#pl-1134");

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
  $homePage
    .parent()
    .prepend(
      "<h1 style='position: absolute; left: -10000px; width: 1px; height: 1px;'>Home - Organisations</h1>"
    );

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
  jQuery("div#pl-906 div.siteorigin-widget-tinymce h5:has(img)").replaceWith(
    function() {
      return jQuery("<p />", {
        html: this.innerHTML,
        style: "text-align: center"
      });
    }
  );

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
  jQuery("body.schools header#masthead").append(
    "<h1 style='position: absolute; left: -10000px; width: 1px; height: 1px;'>Schools</h1>"
  );
  jQuery("div.textwidget > h1").replaceWith(function() {
    return jQuery("<p />", {
      html: this.innerHTML,
      style:
        "text-align: center; color: rgb(68, 63, 63); font-size: 5vh !important; font-family: HelveticaNeueLT-Bold !important; font-weight: 400 !important;"
    });
  });

  /* Complex images no descriptions */
  jQuery(
    'img[title="FF_Visuals_Digital_Our_Impact_Organisations – FINAL"],' +
      "img.wp-image-1375," +
      "img.wp-image-1378," +
      "img.wp-image-1384," +
      "body.schools img.so-widget-image"
  ).attr({
    "aria-label":
      "This is a complex infographic - our apologies that it is not accessible. We are working to change this",
    alt:
      "This is a complex infographic - our apologies that it is not accessible. We are working to change this"
  });

  /* Footer form submit validation */
  jQuery("div#sidebar-footer input#mc_signup_submit").on("click", function() {
    let $email = jQuery("input#mc_mv_EMAIL");
    let $name = jQuery("input#mc_mv_FNAME");
    let nameValid = $name.val().length > 0;
    let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      $email.val()
    );
    $email.attr("aria-invalid", !emailValid);
    $name.attr("aria-invalid", !nameValid);
    if (!(nameValid && emailValid)) {
      alert("ERROR: Please enter a valid email address and a first name");
    }
  });

  /* Home page carousel show pagination and add page labels */
  setTimeout(function() {
    let $testimonials = jQuery(
      "div#pl-838 div.widget_sydney_testimonials div.owl-carousel"
    );
    $testimonials.attr({
      "aria-label": "A list of testimonials about Fearless Futures",
      id: "home-testimonials",
      "data-autoplay": 0
    });
    jQuery($testimonials)
      .find("div.owl-controls")
      .attr("style", "display: block !important");
    jQuery($testimonials)
      .find("div.owl-pagination div")
      .each(function(idx) {
        jQuery(this).attr({
          tabindex: idx + 100,
          role: "button",
          "aria-label": "carousel item: " + idx.toString()
        });
      });
  }, 3000);

  /* Social menu icons focusable state */
  jQuery("span.social.headersocial > a").attr({ tabindex: -1, disabled: true });
  jQuery(window).on("scroll", function() {
    scrollPosition = jQuery(this).scrollTop();
    if (scrollPosition >= 108) {
      jQuery("span.social.headersocial > a").removeAttr("tabindex disabled");
    } else {
      jQuery("span.social.headersocial > a").attr({
        tabindex: -1,
        disabled: true
      });
    }
  });

  /* Alt text social media images */
  jQuery("span.social > a.facebook").attr(
    "aria-label",
    "Fearless Futures Facebook page"
  );
  jQuery("span.social > a.twitter").attr(
    "aria-label",
    "Fearless Futures Twitter account"
  );
  jQuery("span.social > a.instagram").attr(
    "aria-label",
    "Fearless Futures Instagram account"
  );
  jQuery("span.social > a.youtube").attr(
    "aria-label",
    "Fearless Futures YouTube account"
  );

  /* Sydney video widget links */
  jQuery(".widget_sydney_video_widget a.toggle-popup").attr(
    "aria-label",
    "Play embedded video from beginning"
  );

  /* Disable tab focusing within iframes */
  jQuery("iframe").attr("tabindex", -1);

  /* Set search bar to 100% */
  jQuery(
    "aside.widget_search label, aside.widget_search input.search-field"
  ).css("width", "100%");

  /* Main nav tabindex & outline */
  const $mainNav = jQuery("nav#mainnav ul li a");
  $mainNav.each(function(idx) {
    jQuery(this).attr("tabindex", idx + 2);
  });

  /* Link outlines */
  const $allHref = jQuery("a");
  $allHref.on("focus", function() {
    if (jQuery(this).closest("footer.site-footer").length > 0) {
      jQuery(this).css({
        outline: "3px dashed white",
        "outline-offset": "3px"
      });
    } else {
      jQuery(this).css({
        outline: "3px dashed #C97FA1",
        "outline-offset": "3px"
      });
    }
  });

  $allHref.on("blur", function() {
    jQuery(this).css("outline", "none");
  });

  /* Social icons replace with list */
  const $socialLists = jQuery("span.social");
  $socialLists.each(function() {
    jQuery(this)
      .children()
      .wrapAll("<ul style='list-style-type:none' />");
  });
  $socialLists.find("a").wrap("<li />");
  $socialLists.find("li").css({ padding: "0 2px", float: "left" });
  jQuery("footer span.social").css({ display: "inline-block" });

  /* Skip link */
  jQuery("a.skip-link.screen-reader-text")
    .attr("tabindex", 1)
    .css("font-size", "30px")
    .addClass("screen-reader-shortcut");

  /* Generic buttons */
  $homePage
    .find("a.roll-button")
    .attr(
      "aria-label",
      "Read more about Fearless Futures' work with organisations"
    );
  const tpTitles = [
    "Introductory Workshop",
    "Design for Inclusion",
    "Lead Programme"
  ];
  $homePage.find("div#TrainingProgrammes div.textwidget a").each(function(idx) {
    jQuery(this)
      .attr("aria-label", `More info about & option to book '${tpTitles[idx]}'`)
      .on("focus", function() {
        jQuery(this).css({
          outline: "3px dashed #C97FA1",
          "outline-offset": "3px"
        });
      });
  });
  $schoolsPage.find("div#pg-1134-1 div.panel-grid-cell a.button").hide();

  /* some other stuff */
  const $mainMenuButton = jQuery("header.site-header div.btn-menu");
  let mainMenuOpen = false;
  jQuery("nav.mainnav").attr("aria-expanded", false);

  $mainMenuButton.on("click", function() {
    jQuery("nav.mainnav").attr("aria-expanded", !mainMenuOpen);
    mainMenuOpen = !mainMenuOpen;
  });
});
