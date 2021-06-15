import $ from "jquery";

// import 'fullpage.js/vendors/scrolloverflow.min.js';
// import fullpage from "fullpage.js";
import 'jquery-scrollify';

let module = (() => {
    function showMenu(){
        let btn = document.querySelector('.header__menu-btn');
        let menu = document.querySelector('.header__menu');
        let links = document.querySelectorAll('.header__menu-link');
        btn.addEventListener('click', (e)=>{
            btn.classList.toggle('menu-btn--active-js');
            menu.classList.toggle('header__menu--active-js');
        });
        links.forEach(element => {
            element.addEventListener('click', (e) => {
                btn.classList.remove('menu-btn--active-js');
                menu.classList.remove('header__menu--active-js');
            })
        });
    }
    showMenu();

    $(function () {
        $.scrollify({
            section: ".panel",
            before: function (i, panels) { 
                let ref = panels[i].attr("data-section-name");                 
                $(".pagination .active").removeClass("active");
                $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
                for (const key in panels) {//удаление активного класса ссылки меню
                    if (Object.hasOwnProperty.call(panels, key)) {
                        const element = panels[key];
                        let href = element.attr("data-section-name");                         
                        $("a[href=\"#" + href + "\"]").each(function (i, el) {
                            if (el.classList.contains('active-menu-js')) {
                                el.classList.remove("active-menu-js");
                            }
                        });
                    }
                }
                //добавление активного класса ссылке меню
                let arrActiveLinks = $("a[href=\"#" + ref + "\"]");
                arrActiveLinks.each(function(i, el){
                    if (!el.classList.contains('active')) {                         
                        el.classList.add("active-menu-js");                        
                    }
                });                
            },
            afterRender: function () {
                let pagination = "<ul class=\"pagination\">";
                let activeClass = "";
                $(".panel").each(function (i) {                     
                    activeClass = "";
                    if (i === $.scrollify.currentIndex()) {
                        activeClass = "active";                         
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                });
                 
                pagination += "</ul>";

                $(".main").append(pagination);
                /*
          
                Tip: The two click events below are the same:
          
                $(".pagination a").on("click",function() {
                  $.scrollify.move($(this).attr("href"));
                });
          
                */
                $(".pagination a").on("click", $.scrollify.move);   
                
                $('.header__logo').on("click", $.scrollify.move);
                $('.header__menu-link').on("click", $.scrollify.move);
                $('.header__logo-mobile').on("click", $.scrollify.move);
                $('.contacts__menu-link').on("click", $.scrollify.move);
                $('.btn').on("click", $.scrollify.move);
            }        
        });
    });
    
    // new fullpage('#fullpage', {
    //     licenseKey: 'YOUR_KEY_HERE',
    //     //Navigation
    //     menu: '#menu',
    //     // lockAnchors: true,
    //     // anchors: ['firstPage', 'secondPage'],
    //     navigation: true,
    //     navigationPosition: 'right',
    //     navigationTooltips: ['firstSlide', 'secondSlide'],
    //     showActiveTooltip: true,
    //     // slidesNavigation: true,
    //     // slidesNavPosition: 'bottom',

    //     //Scrolling
    //     // css3: true,
    //     scrollingSpeed: 700,
    //     autoScrolling: true,
    //     // fitToSection: true,
    //     // fitToSectionDelay: 1000,
    //     // scrollBar: false,
    //     // easing: 'easeInOutCubic',
    //     // easingcss3: 'ease',
    //     // loopBottom: false,
    //     // loopTop: false,
    //     // loopHorizontal: true,
    //     // continuousVertical: false,
    //     // continuousHorizontal: false,
    //     // scrollHorizontally: false,
    //     // interlockedSlides: false,
    //     // dragAndMove: false,
    //     // offsetSections: false,
    //     // resetSliders: false,
    //     // fadingEffect: false,
    //     // normalScrollElements: '#element1, .element2',
    //     scrollOverflow: true,
    //     // scrollOverflowReset: false,
    //     // scrollOverflowOptions: null,
    //     // touchSensitivity: 15,
    //     // bigSectionsDestination: null,

    //     //Accessibility
    //     keyboardScrolling: true,
    //     animateAnchor: true,
    //     recordHistory: true,

    //     //Design
    //     controlArrows: true,
    //     verticalCentered: true,
    //     // sectionsColor: ['#ccc', '#fff'],
    //     paddingTop: '0',
    //     paddingBottom: '50px',
    //     // fixedElements: '#header, .footer',
    //     // responsiveWidth: 0,
    //     // responsiveHeight: 0,
    //     // responsiveSlides: false,
    //     // parallax: false,
    //     // parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    //     // dropEffect: false,
    //     // dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
    //     // cards: false,
    //     // cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //     //Custom selectors
    //     sectionSelector: '.section',
    //     // slideSelector: '.slide',

    //     lazyLoading: true,

    // });     
})();

export default module;