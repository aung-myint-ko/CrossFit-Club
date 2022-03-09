//menu_effect(change threelines to cross when user click)
var menuBtn = document.querySelector(".menu");
var navBar = document.querySelector(" .navigation")
        // let menuOpen = true;
        // menuBtn.addEventListener('click', () =>{
        //     if(menuOpen){
        //         menuBtn.classList.add("open");
        //         menuOpen = false;
        //     }
        //     else{
        //         menuBtn.classList.remove("open");
        //         menuOpen = true;
        //     }
        //     navBar.classList.toggle("show")
        // } )

//menu_close_and_open
$(".menu, .navigation ul li a").on("click", function(){
  
  navBar.classList.toggle("show")
  menuBtn.classList.toggle("open")

    
})
$(".navigation ul li a").on("click", function(){
  $("li a").removeClass('active');
  $(this).addClass('active');

})

// navigation_bar_fixed_after_scroll
// $(window).scroll(function(){
//     if($(this).scrollTop() > 100){
//       $(".header").addClass('fixed');
//     }else{
//       $(".header").removeClass('fixed');
//     }
//   })   

$(".accordion_container").click(function(){
  $(".accordion_container").children(".accordion_body").slideUp();
  $(".accordion_container").removeClass("change")
  $(".accordion_container").children(".accordion_title").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
  $(this).children(".accordion_body").slideDown();
  $(this).addClass("change")
  $(this).children(".accordion_title").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
})

// scroll_reval
ScrollReveal().reveal('.fisrt_about, .second_about, .third_about, .classes .row .col-lg-6', {
    origin: 'bottom',
    distance:"40px",
    easing: 'ease-out',
    interval: 300
});
ScrollReveal().reveal('.service_text, .left_box, .contact_form', {
  origin: 'right',
  distance:"10px",
  easing: 'ease-out',
  delay: 300
});
ScrollReveal().reveal('.accordion, .right_box, .contact_details', {
  origin: 'left',
  distance:"10px",
  easing: 'ease-out',
  delay: 300
 
});
ScrollReveal().reveal('.facilities .row .col-lg-3', {
  origin: 'left',
  distance:"10px",
  easing: 'ease-out',
  interval:300,
  delay: 300
 
});
