async function selectionSort() {

    disableFeatures();
    
    for(let j = 0; j < bars.length - 1; j++){

        bars[j].style.backgroundColor = "blue";
        let min = j;

        await delay(speedExecution);

        for (let i = j + 1; i < bars.length; i++) {

            bars[i].style.backgroundColor = "blue";

            await delay(speedExecution);

            if (parseInt(bars[min].style.height) > parseInt(bars[i].style.height)) {
                if (min !== i) { // Reset the color of the previous 'min' if it's not the initial 'j'
                    bars[min].style.backgroundColor = "red";
                    bars[j].style.backgroundColor = "blue";
                }
                
                min = i;
                bars[i].style.backgroundColor = "white";
                await delay(speedExecution);
            } else {
                bars[i].style.backgroundColor = "red";
                await delay(speedExecution);
            }
        }

        if (min !== j) { // Only swap if a new minimum is found
            let tempHeight = bars[j].style.height;
            bars[j].style.height = bars[min].style.height;
            bars[min].style.height = tempHeight;
            await delay(speedExecution);

            // Reset colors after swap
            bars[min].style.backgroundColor = "red";
            await delay(speedExecution);
        }

        bars[j].style.backgroundColor = "red"; // Reset the color of the 'j' bar after operation

        await delay(speedExecution);
    }

    afterViewComplete(); // Call this function to indicate sorting is complete
}