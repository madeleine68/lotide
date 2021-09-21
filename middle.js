const middle = function (arr) {

    let res =[];

    if (arr.length == 1 || arr.length == 2) {
        return [];
    }
    if (arr.length %2 == 1) {
        mid = Math.floor(arr.length/2)
        res.push(arr[mid])
    }
    if (arr.length %2 == 0) {
       mid1=arr.length/2;
       mid2=mid1-1;
       res.push(arr[mid2])
       res.push(arr[mid1])
    }
    return (res)
}

module.exports = middle; 