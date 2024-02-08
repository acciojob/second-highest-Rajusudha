// main.html


    function secondHighest(arr) {
        if (arr.length < 2 || new Set(arr).size === 1) {
            return -Infinity;
        }

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

        return secondMax;
    }

