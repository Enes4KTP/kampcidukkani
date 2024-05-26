(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".instagram").show();
  $(".instagram").click(function () {
    window.location.href =
      "https://www.instagram.com/kampcidukkani?igsh=eW01dmJ2MHRrd3Qz";
    return false;
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Related carousel
  $(".related-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  $(document).ready(function () {
    $(".menu-toggle").on("click", function () {
      $("#side-menu").addClass("open");
    });

    $("#menu-close").on("click", function () {
      $("#side-menu").removeClass("open");
    });
  });

  $(document).ready(function () {
    /* Sports */
    $("#sportsMenu").click(function () {
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
      setTimeout(function () {
        $("#sportsMenu").addClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
        $("#megaSportMenu").stop(true, true).slideDown();
      }, 300);
    });

    $("#megaSportMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $(this).stop(true, true).slideUp();
        $("#sportsMenu").removeClass("active");
      }
    );

    /* Women */
    $("#womenMenu").click(function () {
      setTimeout(function () {
        $("#megaWomenMenu").stop(true, true).slideDown();
        $("#womenMenu").addClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaWomenMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $(this).stop(true, true).slideUp();
        $("#womenMenu").removeClass("active");
      }
    );
    /* Men */
    $("#menMenu").click(function () {
      setTimeout(function () {
        $("#megaMenMenu").stop(true, true).slideDown();
        $("#menMenu").addClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaMenMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $(this).stop(true, true).slideUp();
        $("#menMenu").removeClass("active");
      }
    );
    /* Kids */
    $("#kidsMenu").click(function () {
      setTimeout(function () {
        $("#kidsMenu").addClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#accessoriesMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
        $("#megaKidsMenu").stop(true, true).slideDown();
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaKidsMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $("#kidsMenu").removeClass("active");
        $(this).stop(true, true).slideUp();
      }
    );

    /* Accessories */
    $("#accessoriesMenu").click(function () {
      setTimeout(function () {
        $("#equipmentsMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
        $("#accessoriesMenu").addClass("active");
        $("#megaAccessoriesMenu").stop(true, true).slideDown();
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaAccessoriesMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $("#accessoriesMenu").removeClass("active");
        $(this).stop(true, true).slideUp();
      }
    );

    /* Equipments */
    $("#equipmentsMenu").click(function () {
      setTimeout(function () {
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
        $("#equipmentsMenu").addClass("active");
        $("#megaEquipmentsMenu").stop(true, true).slideDown();
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaEquipmentsMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $("#equipmentsMenu").removeClass("active");
        $(this).stop(true, true).slideUp();
      }
    );

    /* All */
    $("#allMenu").click(function () {
      setTimeout(function () {
        $("#allMenu").addClass("active");
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#nutrientsMenu").removeClass("active");
        $("#megaAllMenu").stop(true, true).slideDown();
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaNutrientsMenu").stop(true, true).slideUp();
    });

    $("#megaAllMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $("#allMenu").removeClass("active");
        $(this).stop(true, true).slideUp();
      }
    );

    /* Nutrients */
    $("#nutrientsMenu").click(function () {
      setTimeout(function () {
        $("#accessoriesMenu").removeClass("active");
        $("#kidsMenu").removeClass("active");
        $("#menMenu").removeClass("active");
        $("#equipmentsMenu").removeClass("active");
        $("#sportsMenu").removeClass("active");
        $("#womenMenu").removeClass("active");
        $("#allMenu").removeClass("active");
        $("#nutrientsMenu").addClass("active");
        $("#megaNutrientsMenu").stop(true, true).slideDown();
      }, 300);
      $("#megaSportMenu").stop(true, true).slideUp();
      $("#megaMenMenu").stop(true, true).slideUp();
      $("#megaWomenMenu").stop(true, true).slideUp();
      $("#megaKidsMenu").stop(true, true).slideUp();
      $("#megaAccessoriesMenu").stop(true, true).slideUp();
      $("#megaEquipmentsMenu").stop(true, true).slideUp();
      $("#megaAllMenu").stop(true, true).slideUp();
    });

    $("#megaNutrientsMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $("#nutrientsMenu").removeClass("active");
        $(this).stop(true, true).slideUp();
      }
    );
  });

  $(document).ready(function () {});

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);
