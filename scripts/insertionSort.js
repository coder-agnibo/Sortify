async function insertionSort() {
    disableFeatures(); // Disables UI features not relevant during sorting

    let n = bars.length;
    for (let i = 1; i < n; i++) {
        let key = bars[i].style.height; // The height of the bar being inserted
        let j = i - 1;

        // Highlight the bar being inserted
        bars[i].style.backgroundColor = "blue";

        /* Move elements of bars[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j + 1].style.height = bars[j].style.height; // Move the bar visually
            bars[j].style.backgroundColor = "pink"; // Highlight the bar being compared
            await delay(speedExecution); // Visual delay

            // Reset the color of bars after comparison
            if (j != i - 1) {
                bars[j + 1].style.backgroundColor = "red";
            }
            j = j - 1;
        }
        bars[j + 1].style.height = key; // Insert the bar in its correct position

        // Reset the colors after insertion
        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = "green";
        }
    }

    afterViewComplete(); // Re-enables UI features after sorting is complete
}