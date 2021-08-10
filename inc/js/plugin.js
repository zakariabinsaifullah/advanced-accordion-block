;(function($){

    $(document).on('click', '.accordion-head', function(){
        let iconClass = $(this).children('.collapse-icon').children('span');
        if( (iconClass.hasClass('dashicons-plus-alt2') || iconClass.hasClass('dashicons-minus') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt2 dashicons-minus');
        }else if(( iconClass.hasClass('dashicons-arrow-down-alt2') || iconClass.hasClass('dashicons-arrow-up-alt2') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
        }else if(( iconClass.hasClass('dashicons-plus-alt') || iconClass.hasClass('dashicons-dismiss') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt dashicons-dismiss');
        }
        $(this).parent().children('.accordion-body').slideToggle();
    })

})(jQuery);