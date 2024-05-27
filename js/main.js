if (!(localStorage.getItem('language'))) {
    localStorage.setItem('language','english')
}

$('.types-color span').eq(0).click(function(){
        $($('.types-color span').eq(0)).addClass('active').siblings().removeClass('active');
        $('.menu > div').addClass('v-none').fadeOut();
        $('div.special').removeClass('v-none').fadeIn();
});

$('.types-color span').eq(1).click(function(){
        $($('.types-color span').eq(1)).addClass('active').siblings().removeClass('active');
        $('.menu > div').addClass('v-none').fadeOut();
        $('div.pasta').removeClass('v-none').fadeIn();
        AOS.init();
});

$('.types-color span').eq(2).click(function(){
    $($('.types-color span').eq(2)).addClass('active').siblings().removeClass('active');
    $('.menu > div').addClass('v-none').fadeOut();
    $('div.soup').removeClass('v-none').fadeIn();
    AOS.init();
});

$('.types-color span').eq(3).click(function(){
    $($('.types-color span').eq(3)).addClass('active').siblings().removeClass('active');
    $('.menu > div').addClass('v-none').fadeOut();
    $('div.meat').removeClass('v-none').fadeIn();
    AOS.init();
});

$('.types-color span').eq(4).click(function(){
    $($('.types-color span').eq(4)).addClass('active').siblings().removeClass('active');
    $('.menu > div').addClass('v-none').fadeOut();
    $('div.desserts').removeClass('v-none').fadeIn();
    AOS.init();
});




$('.lang-select li a').click(function loadlang(){
    var language = $(this).attr('data-lang');
    switch (language)
      {
      case "En":
        localStorage.setItem('language','english')
      break;
      case "Ar":
        localStorage.setItem('language','arabic')
      break;
      }
});

var page = document.URL.split('/')[document.URL.split('/').length - 1]
//// page = 'index.html ==> ['index','html']
if(localStorage.getItem('language') != null){
    if(localStorage.getItem('language')=='arabic'){
        if(page.indexOf('Ar') == -1){
            var new_page = page.split('.')[0]+'Ar.'+page.split('.')[1]
            window.location = new_page
        }
    }else{
        // user language is english
        if(localStorage.getItem('language')=='english'){
            if(page.indexOf('Ar') > 0)
            {
                var new_page = page.replace('Ar','');
                window.location = new_page
            }
        }
    }
}