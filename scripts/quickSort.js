async function quickSort() {

    // disableFeatures();

    let start = 0;

    let end = bars.length - 1;
  
    await quicksort(bars, start, end);
    // console.log(bars);
  
    afterViewComplete();
}

async function quicksort(bars, start, end) {

    if (start >= end) { 
        return; 
    }
  
    let pivotIndex = Math.floor((start + end) / 2);
    let pivotElement = bars[pivotIndex];
    bars[pivotIndex].style.backgroundColor = "blue";


    let index = await partition(bars, start, end, pivotElement);
    
    await quicksort(bars, start, index - 1);
    await quicksort(bars, index, end); // Note: Using index as the start for the right sub-array
}

async function partition(bars, start, end, pivotElement) {

    let pivotValue = parseInt(pivotElement.style.height);

    while (start <= end){

        while (parseInt(bars[start].style.height) < pivotValue) {
            bars[start].style.backgroundColor = "black";

            await delay(10);

            bars[start].style.backgroundColor = "red";
            start++;
        }

        while (parseInt(bars[end].style.height) > pivotValue) {
            bars[end].style.backgroundColor = "black";

            await delay(10);

            bars[end].style.backgroundColor = "red";
            end--;
        }

        if (start <= end) {

            bars[start].style.backgroundColor = "pink";
            bars[end].style.backgroundColor = "pink";
        
            await delay(10);
        
            let temp = bars[start].style.height;
            bars[start].style.height = bars[end].style.height;
            bars[end].style.height = temp;
            
            await delay(10);
        
            bars[start].style.backgroundColor = "red";
            bars[end].style.backgroundColor = "red";

            start++;
            end--;
        }
    }

    return start; // This correctly splits the array for further sorting
}
