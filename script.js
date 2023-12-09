
//your JS code here. If required.
  function secondHighest(arr) {
        // Check if the array is empty or has only 1 element
        if (arr.length <= 1 || new Set(arr).size === 1) {
            return -Infinity;
        }

        // Find the second-highest element
        let firstMax = -Infinity;
        let secondMax = -Infinity;

        for (let num of arr) {
            if (num > firstMax) {
                secondMax = firstMax;
                firstMax = num;
            } else if (num > secondMax && num < firstMax) {
                secondMax = num;
            }
        }

        // Return the second-highest element
        return secondMax;
    }

    // Test cases
    console.log(secondHighest([5, 1, 2, 3, 4]));     // Output: 4
    console.log(secondHighest([-1, -2, -3, -4, -5]));  // Output: -2
    console.log(secondHighest([]));                   // Output: -Infinity
    console.log(secondHighest([1]));                  // Output: -Infinity
    console.log(secondHighest([1, 1, 1, 1, 1]));       // Output: -Infinity
