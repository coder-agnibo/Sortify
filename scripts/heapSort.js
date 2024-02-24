async function heapSort() {
    disableFeatures(); // Disables UI features not relevant during sorting

    let n = bars.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(bars, n, i);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        // Visual update before swap
        bars[0].style.backgroundColor = "magenta"; // Color to highlight the root before swap
        bars[i].style.backgroundColor = "magenta"; // Color to highlight the target before swap
        await delay(speedExecution); // Allow observation of the highlight

        await swap(bars, 0, i); // Await the swap function

        bars[i].style.backgroundColor = "green"; // Mark the sorted element

        await delay(speedExecution); // Allow observation of the swap

        // call max heapify on the reduced heap
        await heapify(bars, i, 0);
    }

    afterViewComplete(); // Re-enables UI features after sorting is complete
}

async function heapify(bars, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && parseInt(bars[left].style.height) > parseInt(bars[largest].style.height)) {
        largest = left;
    }

    if (right < n && parseInt(bars[right].style.height) > parseInt(bars[largest].style.height)) {
        largest = right;
    }

    if (largest !== i) {
        await swap(bars, i, largest);
        
        await delay(speedExecution);

        // Recursively heapify the affected subtree
        await heapify(bars, n, largest);
    }
}

async function swap(bars, index1, index2) {
    // Visual swapping effect
    bars[index1].style.backgroundColor = "red";
    bars[index2].style.backgroundColor = "red";
    await delay(speedExecution);

    let temp = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = temp;

    await delay(speedExecution); // This delay allows the color change to be observed

    // Optionally reset colors back to some default (e.g., black) immediately after swap
    bars[index1].style.backgroundColor = "#424fff";
    bars[index2].style.backgroundColor = "#424fff";
}
