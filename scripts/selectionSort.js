async function selectionSort() {

    for(let j = 0; j < bars.length - 1; j++){

        bars[j].style.backgroundColor = "blue";
        let min = j;

        await delay(10);

        for (let i = j + 1; i < bars.length; i++) {

            bars[i].style.backgroundColor = "blue";

            await delay(10);

            if (parseInt(bars[min].style.height) > parseInt(bars[i].style.height)) {
                if (min !== i) { // Reset the color of the previous 'min' if it's not the initial 'j'
                    bars[min].style.backgroundColor = "red";
                    bars[j].style.backgroundColor = "blue";
                }
                min = i;
                bars[i].style.backgroundColor = "green";
                await delay(100);
            } else {
                bars[i].style.backgroundColor = "red";
                await delay(100);
            }
        }

        if (min !== j) { // Only swap if a new minimum is found
            let tempHeight = bars[j].style.height;
            bars[j].style.height = bars[min].style.height;
            bars[min].style.height = tempHeight;
            await delay(100);

            // Reset colors after swap
            bars[min].style.backgroundColor = "red";
            await delay(100);
        }

        bars[j].style.backgroundColor = "red"; // Reset the color of the 'j' bar after operation

        await delay(100);
    }

    afterViewComplete(); // Call this function to indicate sorting is complete
}