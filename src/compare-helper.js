const isExistInFirstFile = (arg, array) => {
    let res = "";
    for (let i=0; i < array.length; i++) {
        if (!res) {
            res = arg === array[i];
        }
    }
    return res;
};

const isExistInSecondFile = (arg, array) => {
    let res = "";
    for (let i=0; i < array.length; i++) {
        if (!res) {
            res = arg === array[i];
        }
    }
    return res;
};

const compareArrays = (firstTextParse, secondTextParse) => {
    let resultArray = [];
    let arr1, arr2 = '';
    if ((firstTextParse.length < secondTextParse.length)||(firstTextParse.length === secondTextParse.length)) {
        arr1 = firstTextParse;
        arr2 = secondTextParse;
    } else {
        arr1 = secondTextParse;
        arr2 = firstTextParse;
    }
    while (arr2.length > 0) {
        if (arr1[0]===undefined) {
            arr2.map(value => {
                resultArray.push({
                    id: resultArray.length+1,//+i
                    sign: "+",
                    value: arr2[0]
                });
                arr2.splice(0,1);
            });
        }
        // Check 1 (for equality):
        // If the 1st element of the 1st array is equal to any element from the 2nd array
        else
        if (isExistInSecondFile(arr1[0], arr2)) {
            // In arr2Index we write under what index in the 2nd array (the first one found) the same value as the 1st element of the first array was found
            let arr2Index = arr2.indexOf(arr1[0]);
            resultArray.push({
                id: resultArray.length+1,
                sign: " ",
                value: arr1[0]
            });
            // delete found items
            arr1.splice(0,1);
            arr2.splice(arr2Index,1);
        }
        //Check 2 (for change):
        //If the 1st element of the 1st array does not coincide with any element from the 2 nd array
        //аnd the 1st element of the 2nd array does not coincide with any e. From the 1st array
        else if (!isExistInSecondFile(arr1[0], arr2) &&
            !isExistInFirstFile(arr2[0], arr1)) {
            resultArray.push({
                id: resultArray.length+1,
                sign: "*",
                value: `${arr1[0]} | ${arr2[0]}`
            });
            arr1.splice(0,1);
            arr2.splice(0,1);
        }
        // Check 4 (there is in the 1st array - not in the 2nd array):
        else if (!isExistInSecondFile(arr1[0], arr2) &&
            isExistInFirstFile(arr2[0], arr1)) {
            resultArray.push({
                id: resultArray.length+1,
                sign: "-",
                value: arr1[0]
            });
            arr1.splice(0,1);
        }
    }
    return resultArray;
};

export default {
    isExistInFirstFile,
    isExistInSecondFile,
    compareArrays
}