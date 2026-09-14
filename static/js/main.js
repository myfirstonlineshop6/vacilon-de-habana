(function () {
  "use strict";

  var lineup = [
    { date: "FRI · SEP 18", night: "Midnight House", dj: "DJ Aurora + special guests", genre: "House · Disco", tickets: "From $25" },
    { date: "SAT · SEP 19", night: "Techno Temple", dj: "V.I.E. b2b Niko", genre: "Techno", tickets: "From $30" },
    { date: "FRI · SEP 25", night: "Retro Nights", dj: "DJ Mars Live", genre: "Funk · Nu-Disco", tickets: "From $20" },
    { date: "SAT · SEP 26", night: "Bass Kingdom", dj: "RAVE-O vs. Sendi", genre: "Drum & Bass", tickets: "From $28" },
  ];

  function renderLineup() {
    var list = document.getElementById("lineup");
    if (!list) return;

    list.innerHTML = lineup
      .map(function (n) {
        return (
          '<article class="ln-item">' +
          '<div class="ln-date">' + n.date + "</div>" +
          '<div class="ln-head"><h3>' + n.night + "</h3><p>" + n.dj + "</p></div>" +
          '<span class="ln-genre">' + n.genre + "</span>" +
          '<span class="ln-tickets">' + n.tickets + "</span>" +
          "</article>"
        );
      })
      .join("");
  }

  function initHeader() {
    var header = document.getElementById("site-header");
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initNavToggle() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReserveForm() {
    var form = document.getElementById("reserve-form");
    var status = document.getElementById("r-status");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();

      status.className = "form-status";
      if (!name || !phone) {
        status.textContent = "Please tell us your name and phone number.";
        status.classList.add("err");
        return;
      }

      status.textContent =
        "On it, " + name + "! Our reservations team will call you at " + phone + " within the hour.";
      status.classList.add("ok");
      form.reset();
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  renderLineup();
  initHeader();
  initNavToggle();
  initReserveForm();
  initYear();
})();