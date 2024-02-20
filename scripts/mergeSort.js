async function mergeSort(){

    let start = 0;
    let end = bars.length-1;

    

    await sort(bars, start, end);

    console.log(bars);

}


async function sort(bars, start, end) {
    
    if(start >= end) return;


    let middle = Math.floor((start + end) /2);

    await sort(bars, start, middle);
    await sort(bars, middle + 1, end);

   
    await merge(bars, start, middle, end);
}


async function merge(bars, start, middle, end){

    let leftArraySize = middle - start + 1;
    let rightArraySize = end - middle;

     // Initialize arrays without pre-defined size, or directly assign values without using push
     let leftArr = [];
     let rightArr = [];
 
     for (let i = 0; i < leftArraySize; i++) {
         leftArr[i] = bars[start + i].style.height; // Directly assigning values
     }
 
     for (let j = 0; j < rightArraySize; j++) {
         rightArr[j] = bars[middle + 1 + j].style.height; // Directly assigning values
     }
 

    let i = 0, k = start, j = 0;

    while (i < leftArraySize && j < rightArraySize) {
        if (parseInt(leftArr[i]) < parseInt(rightArr[j])) {
            bars[k].style.height = leftArr[i]; // Assign the height value directly
            i++;
        } else {
            bars[k].style.height = rightArr[j]; // Assign the height value directly
            j++;
        }
        k++;
    }

    // Correctly placed outside the main while loop
    while (i < leftArraySize) {
        bars[k].style.height = leftArr[i]; // Complete the remaining elements
        i++;
        k++;
    }

    while (j < rightArraySize) {
        bars[k].style.height = rightArr[j]; // Complete the remaining elements
        j++;
        k++;
    }
}