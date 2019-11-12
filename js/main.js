
$(document).ready(function() {
    
    var filterizd = $('.portfolio_content').filterizr({
       //options object
    });
    
    var home_position = $('#home').position();
    var home_top_position = home_position.top;
    
    var service_section_position = $('.service_section').position();
    var service_top_position = service_section_position.top;
    
    var portfolio_position = $('#portfolio').position();
    var portfolio_top_position = portfolio_position.top;
    
    var about_position = $('#about').position();
    var about_top_position = about_position.top;
    
    var contact_position = $('#contact').position();
    var contact_top_position = contact_position.top;
    
    $(window).scroll(function(){
        var current_scroll_position = $(window).scrollTop();
        if(current_scroll_position>=150){
            $('.header_bg').css({
                'padding': '15px 0px',
                'top' : '0px'
            });
            
//            var hide = setTimeout(function(){$('.header_bg').css({'top' : '-100%'});}, 5000);
            
        }
        else{
//            clearTimeout(hide);
            $('.header_bg').css({
                'padding': '50px 0px',
                'top' : '0px'
            });
            
        }
        
        
//        if(current_scroll_position>=service_top_position){
//            clearTimeout(hide);
//            var hide = setTimeout(function(){$('.header_bg').css({'top' : '-100%'});}, 2000);
//        }
//        else{
//            clearTimeout(hide);
//        }
        
        
        if(current_scroll_position>=home_top_position && current_scroll_position<service_top_position-100){
            $('.header_menu>ul>li').removeClass('active');
            $('.home_btn').addClass('active');
//            clearTimeout(hide);
        }
        else if(current_scroll_position>=service_top_position-100 && current_scroll_position<portfolio_top_position){
            $('.header_menu>ul>li').removeClass('active');
            $('.service_btn').addClass('active');
        }
        else if(current_scroll_position>=portfolio_top_position && current_scroll_position<about_top_position-400){
            $('.header_menu>ul>li').removeClass('active');
            $('.portfolio_btn').addClass('active');
        }
        else if(current_scroll_position>=about_top_position-400 && current_scroll_position<contact_top_position-200){
            $('.header_menu>ul>li').removeClass('active');
            $('.about_btn').addClass('active');
        }
        else if(current_scroll_position>=contact_top_position-200){
            $('.header_menu>ul>li').removeClass('active');
            $('.contact_btn').addClass('active');
        }
    });
    
    $('.portfolio_menu>ul>li').click(function(){
        $('.portfolio_menu>ul>li').removeClass('active');
        $(this).addClass('active');
    });
    
      var owl = $("#testimonial_carousel");
 
      owl.owlCarousel({
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
      animateOut: 'fadeOut',
        animateIn: 'flipInX',
      });
})
    
