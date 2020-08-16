$(document).ready(function () {
  $("#topLogo").click(function () {
    $(".plant-trees-account").slideToggle();
  })
})

// (function () {

//   var hamburger = {
//     navToggle: document.querySelector('.nav-toggle'),
//     nav: document.querySelector('nav'),

//     doToggle: function (e) {
//       e.preventDefault();
//       this.navToggle.classList.toggle('expanded');
//       this.nav.classList.toggle('expanded');
//     }
//   };

//   hamburger.navToggle.addEventListener('click', function (e) {
//     hamburger.doToggle(e);
//   });
//   hamburger.nav.addEventListener('click', function (e) {
//     hamburger.doToggle(e);
//   });

// }());


// =====FAQs=========
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));