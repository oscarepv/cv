$(document).ready(function() {
  // Smooth scrolling for nav links
  $("a.nav-link, a.btn-primary, a.btn-outline").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var navHeight = $(".navbar").outerHeight();
      $("html, body").animate({
        scrollTop: $(hash).offset().top - navHeight
      }, 800);
    }
  });

  // Navbar shrink on scroll
  var navbar = $(".navbar");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 80) {
      navbar.addClass("navbar-scrolled");
    } else {
      navbar.removeClass("navbar-scrolled");
    }

    // Active link highlighting
    var scrollDistance = $(window).scrollTop() + $(".navbar").outerHeight() + 10;
    $("section").each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $(".nav-links a.nav-link.active").removeClass("active");
        $(".nav-links a.nav-link").eq(i - 1).addClass("active");
      }
    });
  }).scroll();

  // Reveal animations
  var revealElements = $(".reveal");
  if (revealElements.length > 0 && window.IntersectionObserver) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealElements.each(function() { observer.observe(this); });
  } else {
    revealElements.addClass("visible");
  }

  // Back to top
  var backToTop = $("#backToTop");
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 400) {
      backToTop.addClass("visible");
    } else {
      backToTop.removeClass("visible");
    }
  });

  backToTop.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Modal image
  $(".project-view").on("click", function(e) {
    e.preventDefault();
    $("#imagen-modal").attr("src", $(this).data("img"));
  });

  // Close modal on backdrop click
  $("#modal").on("click", function(e) {
    if ($(e.target).hasClass("modal") || $(e.target).closest(".modal-content").length === 0) {
      $("#modal").modal("hide");
    }
  });

  // Return focus after modal closes
  var lastFocused = null;
  $(".project-view").on("click", function() { lastFocused = this; });
  $("#modal").on("hidden.bs.modal", function() {
    if (lastFocused) { $(lastFocused).focus(); }
  });

  // Reset active link on load
  if ($(window).scrollTop() === 0) {
    $(".nav-links a.nav-link.active").removeClass("active");
    $(".nav-links a.nav-link").first().addClass("active");
  }
});
