// function bubbleSort() {

    let arrays  = [1, 5, 21, 2, 123, 211, 2, 112, 12, 331];
    for(let j = 0; j < arrays.length - 1; j++) {
      for(let i = 0; i < arrays.length - 1; i++) {
        if (arrays[i] > arrays[i + 1]) {
            [arrays[i], arrays[i+1]] = [arrays[i+1], arrays[i]];
          }
       }
    }
    console.log(arrays);
// };