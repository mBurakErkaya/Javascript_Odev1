let person = prompt("Adınızı giriniz: ")

document.querySelector("#myName").innerHTML = person;

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let days = [
        " Pazar",
        " Pazartesi",
        " Salı",
        " Çarşamba",
        " Perşembe",
        " Cuma",
        " Cumartesi",
      ];
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML =  h + ":" + m + ":" + s + days[today.getDay()];
    setTimeout(showTime, 1000);

  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()