(function(){
    var hour = document.querySelector(".containerInputHour");
    var minute =  document.querySelector(".containerInputMinute");
    console.log(minute);
    var second =  document.querySelector(".containerInputSecond");
    console.log("  :: ",second);

    var startBtn = document.querySelector(".btnStart");
    var stopBtn = document.querySelector(".btnStop");
    var resetBtn = document.querySelector(".btnReset");

    var countDownTimer = null;

    startBtn.addEventListener("click",function(){
        if(hour.value == 0 && minute.value == 0 && second.value == 0) {return;}

        function startInterval() {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";
            console.log('insid start interval');


            countDownTimer = setInterval(() => {
                timer();
                console.log('inside a timer ... ');
            }, 1000);
        } 

        startInterval();

    });

    function stopInterval(state) {
        startBtn.innerHTML = (state === 'Pause')?"Continue":"Start";
        startBtn.style.display = "initial";
        stopBtn.style.display = "none";
        clearInterval(countDownTimer);
    }

    function timer(){
        //console.log('inside timer function. *** ')
        //console.log(hour.value,minute.value,second.value);
        if(second.value>60){
            minute.value++;
            second.value = parseInt(second.value)-59;
        }
        if(minute.value>60){
            hour.value++;
            minute.value = parseInt(minute.value)-60;
        }

        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            hour.value = "";
            minute.value = "";
            second.value = "";
            stopInterval();
          } else if (second.value != 0) {
            second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
          } else if (minute.value != 0 && second.value == 0) {
            second.value = 59;
            minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
          } else if (hour.value != 0 && minute.value == 0) {
            minute.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
          }

          stopBtn.addEventListener('click',function(){
            stopInterval("Pause");
          })

          resetBtn.addEventListener('click',function(){
            hour.value = '',
            minute.value = '',
            second.value = ''

          })


          return;
    }
})();