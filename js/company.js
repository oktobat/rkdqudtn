// // 소개1 클릭 시 로드메소드 활용
// $('.aBtn1').on('click', function(e){
//     e.preventDefault()
//     var href = $(this).attr('href')
//     $('#delete').remove()
//     $('.company').load(href+' .delete')
// })

// // 소개2 클릭 시 로드메소드 활용
// $('.aBtn2').on('click', function(e){
//     e.preventDefault()
//     var href = $(this).attr('href')
//     $('#delete').remove()
//     $('.company').load(href+' .delete')
// })

var imgList = ''
$.ajax({
    type : 'GET',
    url : './data/data1.json',
    timeOut : 3000,
    beforeSend : function(xhr){
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType('application/json')
        }
    },
    dataType : 'json',
    success : function(data){
        imgList = data
    },
    error : function(xhr){
        alert(xhr.status + '/' + xhr.errorText)
    }
})

var href = $(this).attr('href')
$('.aBtn1').on('click', function(e){
    e.preventDefault()
    $('.add0').attr('style',imgList[0].location)
    $('.add1').attr('style',imgList[1].location)
    $('.add2').attr('style',imgList[2].location)
    $('#delete1 span').text('다올스마트').css({color: 'yellow'})
})

$('.aBtn2').on('click', function(e){
    e.preventDefault()
    $('.add0').attr('style',imgList[3].location)
    $('.add1').attr('style',imgList[4].location)
    $('.add2').attr('style',imgList[5].location)
    $('#delete1 span').text('Daol Smart').css({color: 'yellow'})
})