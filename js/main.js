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
        $("#megaSportMenu").stop(true, true).slideDown();
      }, 300);
    });

    $("#megaSportMenu").hover(
      function () {
        $(this).stop(true, true).slideDown();
      },
      function () {
        $(this).stop(true, true).slideUp();
      }
    );

    /* Women */
    $("#womenMenu").click(function () {
      setTimeout(function () {
        $("#megaWomenMenu").stop(true, true).slideDown();
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
      }
    );
    /* Men */
    $("#menMenu").click(function () {
      setTimeout(function () {
        $("#megaMenMenu").stop(true, true).slideDown();
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
      }
    );
    /* Kids */
    $("#kidsMenu").click(function () {
      setTimeout(function () {
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
        $(this).stop(true, true).slideUp();
      }
    );

    /* Accessories */
    $("#accessoriesMenu").click(function () {
      setTimeout(function () {
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
        $(this).stop(true, true).slideUp();
      }
    );

    /* Equipments */
    $("#equipmentsMenu").click(function () {
      setTimeout(function () {
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
        $(this).stop(true, true).slideUp();
      }
    );

    /* All */
    $("#allMenu").click(function () {
      setTimeout(function () {
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
        $(this).stop(true, true).slideUp();
      }
    );

    /* Nutrients */
    $("#nutrientsMenu").click(function () {
      setTimeout(function () {
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
        $(this).stop(true, true).slideUp();
      }
    );
  });

  $(document).ready(function () {
    


  });

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
