async function heapSort() {
    disableFeatures(); // Assume this function disables UI features

    let n = bars.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(bars, n, i);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(bars, 0, i);
        bars[i].style.backgroundColor = "green"; // Mark the sorted element

        // call max heapify on the reduced heap
        await heapify(bars, i, 0);
    }

    afterViewComplete(); // Assume this function re-enables UI features
}

async function heapify(bars, n, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && parseInt(bars[l].style.height) > parseInt(bars[largest].style.height))
        largest = l;

    // If right child is larger than largest so far
    if (r < n && parseInt(bars[r].style.height) > parseInt(bars[largest].style.height))
        largest = r;

    // If largest is not root
    if (largest != i) {
        swap(bars, i, largest);

        // Recursively heapify the affected sub-tree
        await heapify(bars, n, largest);
    }
}

async function swap(bars, index1, index2) {
    let temp = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = temp;

    // Visual swapping effect
    bars[index1].style.backgroundColor = "red";
    bars[index2].style.backgroundColor = "red";
    await delay(10); // Assume delay function exists for visual effect
    bars[index1].style.backgroundColor = "black";
    bars[index2].style.backgroundColor = "black";
}

// Include the delay function here, similar to the one used in your merge sort visualization
