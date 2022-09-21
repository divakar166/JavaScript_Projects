window.onload(function(){
    function selectMode(type){
        let quiz_type = type
        $('.quiz_select').addClass('hide')
        $('.diff_select').removeClass('hide')
        $('.level_box').click(function(){
            let level = $(this).attr('id')
            $('.diff_select').addClass('hide')
        })
    }
})