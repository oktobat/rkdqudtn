// 탑버튼 부드럽게 스크롤
$('.topbt').on('click', function(e){
    e.preventDefault()
    var sct = $(window).scrollTop()
    if (sct===0) {
         return false
    } else {
        $('html').animate({
            scrollTop:0
        }, 500)
    }    
})

    // 헤더 픽스
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=1 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('.topbt').addClass('on')
    } else if (sct<1 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
        $('.topbt').removeClass('on')
    }

    // article2 depth3
    if (sct>=article2Near && !$('.article2').hasClass('on')) {
        $('.article2').addClass('on')
    }

    // article3 depth3
    if (sct>=article3Near && !$('.article3').hasClass('on')) {
        $('.article3').addClass('on')
    }

    // article5 depth1
    if (sct>=article5Near && !$('.article5').hasClass('on')) {
        $('.article5').addClass('on')
    }
})

// 열기, 닫기 버튼 + 네비게이션 부드럽게 생기고, 사라지기 수정
$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
    if (ww<=768) {$('#header .open').next().css({opacity:1}).animate({right: 0},300)}
    if (ww<=1024 && ww>768) {$('#header .open').next().css({opacity:1}).animate({right: '40px'},500)}
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().prev().addClass('on')
    if (ww<=768) {$('#header .close').prev().animate({right: '-150px'},300,function(){$(this).css({opacity:0})})}
    if (ww<=1024 && ww>768) {$('#header .close').prev().animate({opacity:0},300,function(){$(this).css({right: '-100%'})})}
})

// PC화면에서 li 햄버거 버튼
$('.modalopen').on('click', function(){
    $('#modal').addClass('on')
})
$('.modalclose').on('click', function(e){
    e.preventDefault()
    $('#modal').removeClass('on')
})

//여기서부터 resize 이벤트 발생 시 스크롤바 유무에 따른 상태제어 프로그램
//함수 선언
var deviceSize1 = 1024;    
var deviceSize2 = 768;

function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize1 -= swd;
    deviceSize2 -= swd;
}

//함수 선언
var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile')
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
    }
}
function init2(){
    ww = $(window).width()
    if (ww>deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        $('html').scrollTop(0)
        $('#nav').css({opacity: 1, right: '15px'})
        $('#modal').removeClass('on')
    } else if ( ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet') ) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').scrollTop(0)
        $('#nav').css({opacity: 0, right: '-100%'})
        $('#nav .depth2').slideUp(300)
        $('#header .open').addClass('on')
        $('#header .close').removeClass('on')        
        $('#modal').removeClass('on')
        // $('.depth1 > li').removeClass('on')
    } else if ( ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
        $('html').scrollTop(0)
        $('#nav .depth2').slideUp(300)
        $('#header .open').addClass('on')
        $('#header .close').removeClass('on')
        // $('#nav').removeClass('on')
        // $('#header .close').removeClass('on')
        // $('#header .open').addClass('on')
    }
}

init()

$(window).on('resize', function(){
    init2()
})
//여기까지 resize 이벤트 발생 시 스크롤바 유무에 따른 상태제어 프로그램

// 네비게이션 호버 이벤트 + on이벤트를 스크롤로 대체
$('#nav .depth1 > li').hover(
    function(){
        if ($('html').hasClass('pc')) {
            // $(this).addClass('on')
            $(this).find('.depth2').stop().slideDown(300)
        }
    },
    function(){
        if ($('html').hasClass('pc')) {
            // $(this).removeClass('on')
            $(this).find('.depth2').stop().slideUp(300)
        }
    }
)

// 네비게이션 클릭 이벤트 + on이벤트를 스크롤로 대체
$('#nav .depth1 > li').on('click', function(e){
    if ($('html').hasClass('tablet') || $('html').hasClass('mobile')) {
        e.preventDefault()
        // $(this).toggleClass('on').siblings().removeClass('on')
        $(this).find('.depth2').stop().slideToggle(300)
        $(this).siblings().find('.depth2').stop().slideUp(300)
    }
})
$('#nav .depth2 > li').on('click', function(e){
    e.stopPropagation()
})

// 모달창 호버 이벤트 + on이벤트를 스크롤로 대체
$('#modal .depth2 > li').hover(
    function(){
        if ($('html').hasClass('pc')) {
            // $(this).addClass('on')
            $(this).find('.depth3').stop().slideDown(300)
        }
    },
    function(){
        if ($('html').hasClass('pc')) {
            // $(this).removeClass('on')
            $(this).find('.depth3').stop().slideUp(300)
        }
    }
)

// 모달창 클릭 이벤트 + on이벤트를 스크롤로 대체
$('#modal .depth2 > li').on('click', function(e){
    e.preventDefault()
    // $(this).toggleClass('on').siblings().removeClass('on')
    $(this).find('.depth3').stop().slideToggle(300)
    $(this).siblings().find('.depth3').stop().slideUp(300) 
})
$('#modal .depth3 > li').on('click', function(e){
    e.stopPropagation()
})