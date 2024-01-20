const $thmbs = document.querySelectorAll('.slides>ul>li>a');
const $screen = document.getElementById('screen');
const $btnPrev = document.querySelector('.arrow>.prev');
const $btnNext = document.querySelector('.arrow>.next');
const $submit = document.querySelector('.submit');
const $exit = document.querySelector('.exit');
const $login = document.querySelector('#login');
const $japBgImg = document.querySelector(".jap_bg>img");
const $japtourbox1 = document.querySelector(".jap_tourcontainer>.tourbox-1");
const $japtourbox1Img = document.querySelector(".jap_tourcontainer>.tourbox-1>img");
const $japtourbox2 = document.querySelector(".jap_tourcontainer>.tourbox-2");
const $japtourbox2Img = document.querySelector(".jap_tourcontainer>.tourbox-2>img");
const $japtourbox3 = document.querySelector(".jap_tourcontainer>.tourbox-3");
const $japtourbox3Img = document.querySelector(".jap_tourcontainer>.tourbox-3>img");
const $japtourbox4 = document.querySelector(".jap_tourcontainer>.tourbox-4");
const $japtourbox4Img = document.querySelector(".jap_tourcontainer>.tourbox-4>img");
const $mnus = document.querySelectorAll('.gnb>li>a');
const $articles = document.querySelectorAll('article');
const $vieBgImg = document.querySelector(".vie_bg>img");
const $vietourbox1 = document.querySelector(".vie_tourcontainer>.tourbox-1");
const $vietourbox1Img = document.querySelector(".vie_tourcontainer>.tourbox-1>img");
const $vietourbox2 = document.querySelector(".vie_tourcontainer>.tourbox-2");
const $vietourbox2Img = document.querySelector(".vie_tourcontainer>.tourbox-2>img");
const $vietourbox3 = document.querySelector(".vie_tourcontainer>.tourbox-3");
const $vietourbox3Img = document.querySelector(".vie_tourcontainer>.tourbox-3>img");
const $vietourbox4 = document.querySelector(".vie_tourcontainer>.tourbox-4");
const $vietourbox4Img = document.querySelector(".vie_tourcontainer>.tourbox-4>img");

const arrTopVal = [];

$articles.forEach(($article, idx) => {
    arrTopVal[idx] = $article.offsetTop;
});

console.log(arrTopVal);

const pageAni = function(idx) {
    window.scrollTo({
        left: 0,
        top: arrTopVal[idx],
        behavior: 'smooth'
    });
};

$mnus.forEach(($mnu, idx) => {
    $mnu.addEventListener('click', (evt) => {
        evt.preventDefault();
        pageAni(idx);

        oldIdx = nowIdx;
        nowIdx = idx;

        $mnus[nowIdx].parentElement.setAttribute('class', 'on');
        $mnus[oldIdx].parentElement.removeAttribute('class');
    });
});

window.addEventListener('scroll', function(){
  const scrollTop = Math.ceil(window.scrollY); 
  console.log('scrollTop =', scrollTop);

  for(let i=0; i<$articles.length; i++) {
      if(scrollTop >= arrTopVal[i] - 66) {		
          oldIdx = nowIdx;
          nowIdx = i;		


          $mnus[oldIdx].parentElement.classList.remove('on'); 
          $mnus[nowIdx].parentElement.classList.add('on'); 

          if(i === 1) {
              let japanVideo = document.querySelector(".jap_youtube>iframe");
              let src = japanVideo.src.split('?')[0];
              japanVideo.src = src + "?autoplay=1&mute=1";
          } else if(i === 2) {
              let vietnamVideo = document.querySelector(".vie_youtube>iframe");
              let src = vietnamVideo.src.split('?')[0];
              vietnamVideo.src = src + "?autoplay=1&mute=1";
          }
      } else if(scrollTop < arrTopVal[0] - 66) { 
          let japanVideo = document.querySelector(".jap_youtube>iframe");
          let vietnamVideo = document.querySelector(".vie_youtube>iframe");
          japanVideo.src = japanVideo.src.split('?')[0];
          vietnamVideo.src = vietnamVideo.src.split('?')[0];

          $mnus[nowIdx].parentElement.classList.remove('on'); // on 제거
      }
  }
});

$(document).ready(function() {
  $('.searbtn').click(function(e) {
      e.preventDefault();
      let selectedArea = $('#area').val();

      if(selectedArea === 'japan') {
          $('html, body').animate({
          scrollTop: $('.japanpage').offset().top
          }, 1200);
      }else if(selectedArea === 'vietnam'){
          $('html, body').animate({
          scrollTop: $('.vietnampage').offset().top
          }, 2000);
      }else{
          alert('선택한 여행지에 대한 정보가 아직 준비되지 않았습니다.');
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let japanLink = document.querySelector(".gnb>li:nth-child(2)>a");
  let vietnamLink = document.querySelector(".gnb>li:nth-child(3)>a");

  japanLink.addEventListener("click", function(event) {
      event.preventDefault();

      let japanVideo = document.querySelector(".jap_youtube>iframe");
      let src = japanVideo.src.split('?')[0];
      japanVideo.src = src + "?autoplay=1&mute=1";
  });

  vietnamLink.addEventListener("click", function(event) {
      event.preventDefault();

      let vietnamVideo = document.querySelector(".vie_youtube>iframe");
      let src = vietnamVideo.src.split('?')[0];
      vietnamVideo.src = src + "?autoplay=1&mute=1";
  });
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".gnb-2>li:first-child>a").addEventListener('click', function() {
        $login.style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $japtourbox1.addEventListener("click", function(evt) {
        evt.preventDefault();
        $japBgImg.src = $japtourbox1Img.src;
    });

    $japtourbox2.addEventListener("click", function(evt) {
        evt.preventDefault();
        $japBgImg.src = $japtourbox2Img.src;
    });

    $japtourbox3.addEventListener("click", function(evt) {
        evt.preventDefault();
        $japBgImg.src = $japtourbox3Img.src;
    });

    $japtourbox4.addEventListener("click", function(evt) {
        evt.preventDefault();
        $japBgImg.src = $japtourbox4Img.src;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $vietourbox1.addEventListener("click", function(evt) {
        evt.preventDefault();
        $vieBgImg.src = $vietourbox1Img.src;
    });

    $vietourbox2.addEventListener("click", function(evt) {
        evt.preventDefault();
        $vieBgImg.src = $vietourbox2Img.src;
    });

    $vietourbox3.addEventListener("click", function(evt) {
        evt.preventDefault();
        $vieBgImg.src = $vietourbox3Img.src;
    });

    $vietourbox4.addEventListener("click", function(evt) {
        evt.preventDefault();
        $vieBgImg.src = $vietourbox4Img.src;
    });
});

$exit.addEventListener('click', function() {
    $login.style.display = 'none';
});

function checkInput() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        $submit.style.backgroundColor = 'orange';
    } else {
        $submit.style.backgroundColor = '';
    }
}

document.getElementById('username').addEventListener('input', checkInput);
document.getElementById('password').addEventListener('input', checkInput);

let nowIdx = 0;
let oldIdx = nowIdx;
let intervalKey = null;

const forFn = function() {
    const img = $thmbs[nowIdx].getAttribute('href');
    $screen.setAttribute('src', img);
};

const autoPlay = function(sec) {
    intervalKey = setInterval(function() {
        if (nowIdx < $thmbs.length - 1) {
            nowIdx++;
        } else {
            nowIdx = 0;
        }

        forFn();
    }, sec * 1000);
};

window.addEventListener('load', function() {
    autoPlay(3);
});

for (let i = 0; i < $thmbs.length; i++) {
    $thmbs[i].addEventListener('click', function(evt) {
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = i;

        forFn();
    });
}

$btnPrev.addEventListener('click', function(evt) {
  evt.preventDefault();

  oldIdx = nowIdx;

  if (nowIdx > 0) {
      nowIdx--;
  } else {
      nowIdx = 4;
  }

  forFn();
});

$btnNext.addEventListener('click', function(evt) {
  evt.preventDefault();

  oldIdx = nowIdx;

  if (nowIdx < $thmbs.length - 1) {
      nowIdx++;
  } else {
      nowIdx = 0;
  }

  forFn();
});

document.addEventListener('DOMContentLoaded', function() {
  $("#start").datepicker({
      dateFormat: "y년 m월 d일",
      minDate: 0,
      onSelect: function(selectedDate) {
          let minDate = $(this).datepicker("getDate");
          $("#end").datepicker("option", "minDate", minDate);
      }
  });
  $("#end").datepicker({
      dateFormat: "y년 m월 d일",
      minDate: 0,
      beforeShow: function() {
          let minDate = $("#start").datepicker("getDate");
          $(this).datepicker("option", "minDate", minDate);
      }
  });
});

let api_key = '44dde8c0d35fc9e0e0db5593a0e92a33';

let city_id = '2128295';
let url = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric&lang=en`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      let temp = data.main.temp;
      let weather = data.weather[0].description;
      let icon = data.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
      document.getElementById('jap_weather').innerHTML = `* 실시간날씨 : <img src="${iconUrl}" alt="Weather icon" style="vertical-align: middle;"> ${temp}℃`;
  }
}
xhr.send();

let danang_city_id = '1566083';
let danang_url = `https://api.openweathermap.org/data/2.5/weather?id=${danang_city_id}&appid=${api_key}&units=metric&lang=en`;

let danang_xhr = new XMLHttpRequest();
danang_xhr.open('GET', danang_url, true);
danang_xhr.onreadystatechange = function () {
  if (danang_xhr.readyState == 4 && danang_xhr.status == 200) {
      let danang_data = JSON.parse(danang_xhr.responseText);
      let danang_temp = danang_data.main.temp;
      let danang_weather = danang_data.weather[0].description;
      let danang_icon = danang_data.weather[0].icon;
      let danang_iconUrl = "http://openweathermap.org/img/w/" + danang_icon + ".png";
      document.getElementById('vie_weather').innerHTML = `* 실시간 날씨 : <img src="${danang_iconUrl}" alt="Weather icon" style="vertical-align: middle;"> ${danang_temp}℃`;
  }
}
danang_xhr.send();

$(document).ready(function() {
  getExchangeRate(); 
  setInterval(getExchangeRate, 300000); 

  function getExchangeRate() {
      $.ajax({
          url: "https://api.exchangerate-api.com/v4/latest/KRW",
          method: "GET",
          dataType: "json",
          success: function(data) {
              let jpyExchangeRate = data.rates.JPY; 
              let krwPer100JPY = 100 / jpyExchangeRate;
              let jpyFormattedRate = krwPer100JPY.toFixed(0); 
              $("#jap_exchangeRate").text("* 엔(YEN) 환율 : " + jpyFormattedRate + "원 (100엔) ");

              let vndExchangeRate = data.rates.VND; 
              let krwPer100VND = 100 / vndExchangeRate;
              let vndFormattedRate = krwPer100VND.toFixed(0); 
              $("#vie_exchangeRate").text("* 동(VND) 환율 : " + vndFormattedRate + "원 (100동) ");  
          },
          error: function() {
              console.log("환율정보를 가져오는데 실패했습니다.");
          }
      });
  }
});

function addEventListenerToTourbox(tourboxClass, targetClass) {
  const tourbox = document.querySelector(tourboxClass);
  const target = document.querySelector(targetClass);

  tourbox.addEventListener('mouseover', function() {
      target.style.display = 'block';
  });

  tourbox.addEventListener('mouseout', function() {
      target.style.display = 'none';
  });
}

addEventListenerToTourbox('.tourbox-1', '.sapporo');
addEventListenerToTourbox('.tourbox-2', '.noboribetsu');
addEventListenerToTourbox('.tourbox-3', '.furano');
addEventListenerToTourbox('.tourbox-4', '.otaru');

