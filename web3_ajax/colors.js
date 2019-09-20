var Body = {    //객체생성
  setColor : function(color){   //메소드 정의(1) - 객체 정의 구현 부분에서 메소드 정의
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
  // },
  // setBackgroundColor : function(color){
  //   document.querySelector('body').style.backgroundColor = color;
  // }
}

Body.setBackgroundColor = function(color){  //메소드 정의(2) - 생성한 객체에 메소드 추가
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
}

var Links = {
  setColor : function(color){
    // 직접 짠 코드
    /*
    var alist = document.querySelectorAll('a');
    var i=0;
    while( i < alist.length ){
        alist[i].style.color = color;
        i++;
    } */
    // 동일한 기능을 수행하는 jQuery 코드
    $('a').css('color', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value === 'night'){
    Body.setBackgroundColor('gray');
    Body.setColor('white');             //Body 객체의 setColor 메소드 호출
    self.value='day';

    Links.setColor('orange');           //Links 객체의 setColor 메소드 호출
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    Links.setColor('black');
  }
}
