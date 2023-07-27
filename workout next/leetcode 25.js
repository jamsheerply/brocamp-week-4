function arrangeCoins(n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let k = mid * (mid + 1) / 2;

        if (k === n) {
            return mid;
        } else if (k > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
}