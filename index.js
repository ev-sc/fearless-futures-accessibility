jQuery(function() {
  const $homePage = jQuery("div#pl-838");
  const $schoolsPage = jQuery("div#pl-1134");

  /* Mobile device detection */
  let isMobile = false;
  // noinspection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

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

  /* PDF download button */
  $schoolsPage.find("a.roll-button").each(function() {
    const $this = jQuery(this);
    if (
      $this
        .text()
        .toLowerCase()
        .includes("download")
    ) {
      $this.text(`${$this.text()} (PDF - 9.2MB)`).attr("download", true);
    }
  });

  /* MOBILE: Nav menu button */
  const $mainMenuButton = jQuery("header.site-header div.btn-menu");
  const $mobileNav = jQuery("nav#mainnav-mobi");
  $mobileNav
    .find("ul.menu")
    .append(
      '<li class="menu-item menu-item-type-post_type menu-item-object-page">' +
        `<a href="#" style="text-align: right"><span style="padding-right: 10px;">&#9932;</span>Close</a></li>`
    )
    .on("click", "a", function() {
      $mainMenuButton.trigger("click");
    });
  $mobileNav.attr("aria-expanded", `${false}`);
  let mainMenuOpen = false;
  $mainMenuButton.on("click", function() {
    $mobileNav.attr("aria-expanded", `${!mainMenuOpen}`);
    mainMenuOpen = !mainMenuOpen;
  });
  $mainMenuButton
    .attr({
      "aria-label": "Toggle main navigation menu",
      tabindex: 2
    })
    .on("keydown", function(e) {
      if (e.keyCode === 13) {
        $mainMenuButton.trigger("click");
      }
    });

  /* Navigation tabindex */
  const $mainNav = jQuery("nav#mainnav ul li a");
  $mainNav.each(function(idx) {
    jQuery(this).attr("tabindex", idx + 2);
  });
  $mobileNav.find("ul li a").each(function(idx) {
    jQuery(this).attr("tabindex", idx + 2);
  });

  /* Link outlines */
  const $allHref = jQuery("a, div.btn-menu");
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

  /* Header size on mobile */
  if (isMobile) {
    jQuery("h2.maintitle").attr("style", "font-size: 3rem !important");
  }
});
