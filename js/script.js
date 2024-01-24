function countdown() {
  let counter = 10;
  document.getElementById("wishes").innerText = counter;
  setTimeout(function () {
    counter--;
    document.getElementById("wishes").innerText = counter;
    setTimeout(function () {
      counter--;
      document.getElementById("wishes").innerText = counter;
      setTimeout(function () {
        counter--;
        document.getElementById("wishes").innerText = counter;
        setTimeout(function () {
          counter--;
          document.getElementById("wishes").innerText = counter;
          setTimeout(function () {
            counter--;
            document.getElementById("wishes").innerText = counter;
            setTimeout(function () {
              counter--;
              document.getElementById("wishes").innerText = counter;
              setTimeout(function () {
                counter--;
                document.getElementById("wishes").innerText = counter;
                setTimeout(function () {
                  counter--;
                  document.getElementById("wishes").innerText = counter;
                  setTimeout(function () {
                    counter--;
                    document.getElementById("wishes").innerText = counter;
                    setTimeout(function () {
                      counter--;

                      document.getElementById("wishes").innerText="Happy Independence Day!"
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  
}

 window.addEventListener("DOMContentLoaded",countdown)