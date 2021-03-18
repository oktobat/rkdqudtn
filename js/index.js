$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 500, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})
$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 500, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 스크롤 특정 구간 도착 시 이벤트 발생 + 헤더 픽스
var wh = $(window).height()
var article2Near = $('.article2').offset().top - (wh-300)
var article3Near = $('.article3').offset().top - (wh-300)
var article5Near = $('.article3').offset().top + 300

// 슬라이드 멈춤 재생 버튼
// var $ibutton;
// $('.article1 .plpa').on('click', function(){
//     $ibutton = $(this).find('i')
//     if ($ibutton.hasClass('fa-pause')) {
//         $('.slide_group').slick('slickPause')
//         $ibutton.removeClass('fa-pause').addClass('fa-play')
//     } else {
//         $('.slide_group').slick('slickPlay')
//         $ibutton.removeClass('fa-play').addClass('fa-pause')
//     }
// })
// 슬라이드 멈춤 재생 버튼 2
// var $ibutton2;
// $('.article4 .plpa').on('click', function(){
//     $ibutton2 = $(this).find('i')
//     if ($ibutton2.hasClass('fa-pause')) {
//         $('.slide_group2').slick('slickPause')
//         $ibutton2.removeClass('fa-pause').addClass('fa-play')
//     } else {
//         $('.slide_group2').slick('slickPlay')
//         $ibutton2.removeClass('fa-play').addClass('fa-pause')
//     }
// })

// prev, next
var ww = $(window).width()
var $prev = $('.slide_group .prev')
var $prevAni = $('#section .article1 .prevani')
var $next = $('.slide_group .next')
var $nextAni = $('#section .article1 .nextani')
$prev.hover(
    function(){
        if(!$prevAni.hasClass('on')) {
            $prevAni.addClass('on')
        }
    },
    function(){
        if($prevAni.hasClass('on')) {
            $prevAni.removeClass('on')
        }
    }
)
$next.hover(
    function(){
        if(!$nextAni.hasClass('on')) {
            $nextAni.addClass('on')
        }
    },
    function(){
        if($nextAni.hasClass('on')) {
            $nextAni.removeClass('on')
        }
    }
)

// 넓이 300px 이하일때 article4 이벤트
var $art4s1h3 = $('#section .article4 .slide1 h3');
var $art4s1p = $('#section .article4 .slide1 p');
var $art4s1a = $('#section .article4 .slide1 a');
var $art4s2h3 = $('#section .article4 .slide2 h3');
var $art4s2p = $('#section .article4 .slide2 p');
var $art4s2a = $('#section .article4 .slide2 a');
if (ww<=300) {
    $art4s1h3.text('창업 안내')
    $art4s1p.css({
        display: 'none'
    })
    $art4s1a.text('상세내용 바로가기')
}
if (ww<=300) {
    $art4s2h3.text('이벤트 안내')
    $art4s2p.css({
        display: 'none'
    })
    $art4s2a.text('이벤트 바로가기')
}
