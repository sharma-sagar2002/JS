function mergeIntervals (intervals) {

    let ans = [];
    //soriing the array in increasing order
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);

    if (intervals.length === 0) {
        return ans;
    }
    
    let temp = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= temp[1]) {
            temp[1] = Math.max(temp[1], intervals[i][1]);
        } 
        else {
            ans.push(temp);
            temp = intervals[i];
        }
    }
    // last interval pushed 
    ans.push(temp);
    console.log(ans);
    return ans;

};

const intervals=[[2,6],[3,4],[7,9]];
mergeIntervals(intervals);







  