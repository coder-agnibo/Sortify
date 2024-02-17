async function bubbleSort() {
    disableFeatures();


    for(let j = 0; j < bars.length - 1; j++) {

      for(let i = 0; i < bars.length - j - 1; i++) {

        if (bars[i].clientHeight > bars[i + 1].clientHeight) {
          bars[i].style.backgroundColor = "red";
          bars[i + 1].style.backgroundColor = "red";

          await delay(100);

          let tempBarHeight = bars[i].style.height;


          bars[i].style.height = bars[i + 1].style.height;
          bars[i + 1].style.height = tempBarHeight;

          await delay(100);

          bars[i].style.backgroundColor = "#424fff";
          bars[i + 1].style.backgroundColor = "#424fff";

          } else {
            bars[i].style.backgroundColor = "red";
            bars[i + 1].style.backgroundColor = "red";

            await delay(100);

            bars[i].style.backgroundColor = "#424fff";
            bars[i + 1].style.backgroundColor = "#424fff";
          }
       }
    }
  afterViewComplete();
}