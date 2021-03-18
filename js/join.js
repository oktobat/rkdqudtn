// 회원가입폼 데이터유효성 체크
$('.joinBox form').on('submit', function(){

    // submit을 이용한 보더 리셋
    $('input').css({
        border: '1px solid #ddd'
    })

    // 아이디 유효성체크 : 3~5글자 범위, 특수문자 제외
    var idbox = $('#idbox').val()
    if ( idbox.length>=3 && idbox.length<=5 ) {
        for (var i=0; i<idbox.length; i++) {
            // p.128 참고 이 메소드들은 출력값이 결국 문자임에 유의
            var ch = idbox.charAt(i)
            // 특수문자 판별하기 + 특수문자이면 경고창과 함께 진행 중단
            if ( !(ch>='0' && ch<='9') && !(ch>='A' && ch<='Z') && !(ch>='a' && ch<='z') ) {
                alert('특수문자는 포함하지 않음')
                $('#idbox').css({
                    border: '1px solid #f00',
                }).focus().select()
                return false
            }
        }
    } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#idbox').css({
            border: '1px solid #f00',
        }).focus().select()
        return false
    }

    // 비밀번호 유효성체크 : 첫글자는 영문자만 허용하며, 숫자와 특수문자는 각각 1개 이상 포함
    // ^ : 첫문자일치, $ : 끝문자일치
    // ?= : 조건확인 후 처음으로 돌아감
    // . : 임의의 모든문자(숫자, 문자, 특수문자 포함한 모든 문자)
    // * : 앞의 글자가 0번 이상 나올 수 있음
    var check = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var pwbox = $('#pwbox').val()
    if (!check.test(pwbox)) {
        alert('비밀번호 조건에 맞지 않습니다.')
        $('#pwbox').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    // 이름 유효성체크
    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if (irum.length>=2) {

        // 한글범위인지 유효성체크
        if (!check2.test(irum)) {
            alert('이름은 한글 두글자 이상입니다.')
            $('#irum').css({
                border: '1px solid #f00'
            }).focus().select()
            return false
        }

    // 글자수 유효성 체크
    } else {
        alert('이름은 한글 두글자 이상입니다.')
        $('#irum').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    // 휴대폰번호 유효성체크 : 중간번호(숫자 3~4개), 끝번호(숫자)
    var hp1 = $('#hp1').val()
    var hp2 = $('#hp2').val()
        // /[0-9]{3,4}]/ = 0~9까지 3개에서 4개만 표기하겠다는 정규표현식
    var check3 = /^[0-9]{3,4}$/ // 또는 /d{3,4}
    var check4 = /^[0-9]{4}$/
    if ( !check3.test(hp1) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#hp1').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    } else if (  !check4.test(hp2) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#hp2').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    // 성별 선택 유효성체크 : 반드시 선택해야 함
    // html5속성인 required 속성을 쓸 수 있지만 호환성 문제로 js로 제어
    // 체크가 안되어있다면 0 체크가 돼있다면 1이 될것임
    var gender = $('input[name="gender"]:checked').length
    if (gender === 0) {
        alert('성별을 선택해주세요.')
        $('input[name="gender"]').focus()
        return false
    }

    // 이메일 아이디 유효성체크 : 특수문자제외
    var emailid = $('#emailid').val()
    // []안에 내용이 최소 한번은 반복되겠다는 의미로 +를 붙여줌
    var check5 = /^[a-zA-Z0-9]+$/
    if ( !check5.test(emailid) ) {
        alert('이메일 형식이 맞지 않습니다.')
        $('#emailid').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    var emaildo = $('#emaildomain').val()
    // []안에 내용이 최소 한번은 반복되겠다는 의미로 +를 붙여줌 그다음에 특수문자.이 나온다는 의미
    // 앞에 있는 내용이[] +는 최소 1번이상 *는 최소 0번이상 반복
    // 따라서 *를 붙이는것은 안나올 수도 있기 때문에라는 의미
    // 회사마다 .com 이던지 .co.kr이던지 다르게 끝날 수 있기 때문에
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if (emaildo !== '') {

        // 도메인에 내용이 입력됐을때 check6에 맞지 않는다면
        if ( !check6.test(emaildo) ) {
            alert('이메일 형식이 맞지 않습니다.')
            $('#emaildomain').css({
                border: '1px solid #f00'
            }).focus().select()
            return false
        } 

    } else {
        // 도메인에 내용이 빈칸이라면
        alert('이메일 도메인을 선택해주세요.')
        $('#emaildomain').css({
            border: '1px solid #f00'
        }).focus().select()
        return false
    }

    return false // 테스트 완료 후 삭제해야 서브밋 작동함
})

// 비밀번호 박스를 클릭하면 안내가 뜨고 다른데를 클릭하면 사라지게
$('#pwbox').on('focus', function(){
    $(this).after('<span>비밀번호 첫글자는 영문자이고, 숫자, 특수문자 중에 2가지 이상 조합해야 함</span>')
    $(this).next().css({
        color: '#f00',
        paddingLeft: '10px'
    })
})
$('#pwbox').on('blur', function(){
    $(this).next().remove()
})

// select의 option을 선택할때마다 value값이 추출되게 하기

// option을 선택할때마다 일어나는 change 메소드 활용
$('#domainlist').on('change', function(){
    var doval = $('#domainlist option:selected').val()
    if ( doval !== 'noselect' && doval != 'self' ) {
        $('#emaildomain').val(doval)

    } else if ( doval === 'noselect' ) {
        $('#emaildomain').attr({
            disabled:true
        }).val('')
        
    } else {
        $('#emaildomain').attr({
            disabled:false
        }).val('')
    }
})

// 관심분야 선택
$('#all').on('click',function(){

    // 직접 프로그래밍 제어 오류
    // var all = $('input[id="all"]:checked').length
    // console.log(all)
    // if (all === 0) {
    //     $('input[name^="co"]').attr({checked:false})
    // } else {
    //     $('input[name^="co"]').attr({checked:true})
    // }

    // prop 메소드 제어 가능
    var bool = $(this).prop('checked')
    $('input[name^="co"]').prop('checked', bool)
})

// 남은글자 표시하기
$('#memo').on('keydown',function(){
    var curr = $(this).val().length
    var max = 20
    var remain = max - curr
    $('.remain').text(remain)
})

// 생년월일 칸에 datepicker 연결하기
$('#birth').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:2021'
})