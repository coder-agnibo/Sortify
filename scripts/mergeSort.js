async function mergeSort(){
 
    disableFeatures();

    let start = 0;
    let end = bars.length-1;

    await sort(bars, start, end);

    // console.log(bars);

    afterViewComplete();

}


async function sort(bars, start, end) {
    
    if(start >= end) return;


    let middle = Math.floor((start + end) / 2);

    await sort(bars, start, middle);
    await sort(bars, middle + 1, end);

   
    await merge(bars, start, middle, end);
}


async function merge(bars, start, middle, end){

    bars[middle + 1].style.backgroundColor = "violet";

    // Creating two parts of arrays
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
        if (parseInt(leftArr[i]) <= parseInt(rightArr[j])) {

            bars[k].style.backgroundColor = "black";
            bars[start + i].style.backgroundColor = "pink";

            

            bars[k].style.height = leftArr[i]; // Assign the height value directly
            
            await delay(10);
            
            bars[k].style.backgroundColor = "red";
            bars[start + i].style.backgroundColor = "red";

            i++;

            bars[middle + 1].style.backgroundColor = "violet";

        } else {
            bars[k].style.backgroundColor = "black";
            bars[(middle + j + 1)].style.backgroundColor = "black";

            bars[k].style.height = rightArr[j]; // Assign the height value directly
            
            bars[k].style.backgroundColor = "red";
            bars[(middle + j + 1)].style.backgroundColor = "red";

            j++;

            bars[middle + 1].style.backgroundColor = "violet";
        }

        k++;
    }

    // Correctly placed outside the main while loop
    while (i < leftArraySize) {
        bars[start + i].style.backgroundColor = "pink";

        bars[k].style.backgroundColor = "#000";

        bars[k].style.height = leftArr[i]; // Complete the remaining elements
        
        await delay(10);
        
        bars[k].style.backgroundColor = "red";

        bars[start + i].style.backgroundColor = "red";

        i++;
        k++;
    }

    while (j < rightArraySize) {
        bars[k].style.backgroundColor = "black";
        bars[(middle + j + 1)].style.backgroundColor = "pink";

        await delay(10);

        bars[k].style.height = rightArr[j]; // Complete the remaining elements
        
        await delay(10);
        
        bars[k].style.backgroundColor = "red";
        bars[(middle + j + 1)].style.backgroundColor = "red";
        
        j++;
        k++;
    }


    bars[middle + 1].style.backgroundColor = "red";
}