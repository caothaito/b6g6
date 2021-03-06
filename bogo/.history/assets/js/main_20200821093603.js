$(document).ready(function () {
  $("#topLogo").click(function () {
    $(".plant-trees-account").slideToggle();
  })

})
// ==================
// home

"use strict";

 
$.fn.escape = function(callback) {
    return this.each(function() {
    });
};
var navigationRight = jQuery('.menu-wrap');
function Navigation() {
    var bodyEl = document.body,
        content = document.querySelector('#close-button'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        initEvents();
    }
    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

      
        content.addEventListener('click', function(ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    navigationRight.escape(function() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
            classie.remove(openbtn, 'active')
        }
        isOpen = !isOpen;
    });

    init();
};
 

 
jQuery(document).ready(function($) {    
 
    jQuery('.menu-item-has-children, .page_item_has_children').hover(function() {
        jQuery(this).children('.sub-menu').stop().slideDown(200);
    }, 
    function() {
        jQuery(this).children('.sub-menu').stop().slideUp(200);
    });

    //Mobile Menu Open/Close 
   

   
    //Menu Right Side
    if (navigationRight.length > 0) {
        Navigation();
    };
 
     
});

 







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