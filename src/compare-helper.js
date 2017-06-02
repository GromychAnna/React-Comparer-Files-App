const splitToStrings = (str) => {
    let stringParsed = [];
    let string = str.split(/\r?\n/);
    for (var i = 0; i < string.length; i++) {
        stringParsed[stringParsed.length] = string[i];
    }
    return stringParsed;
};

const isEqual = (arg1, arg2) => {
    return arg1==arg2;
};


const isExistInFirstFile = (arg, array) => {
    let res = "";
    for (let i=0; i < array.length; i++) {
        if (!res) {
            res = isEqual(arg, array[i]);
        }
    }
    return res;
};

const isExistInSecondFile = (arg, array) => {
    let res = "";
    for (let i=0; i < array.length; i++) {
        if (!res) {
            res = isEqual(arg, array[i]);
        }
    }
    return res;
};

const findArrIndex = (value, array) => {
    let index;
    index = array.indexOf(value);
    return index;
};

const compareArrays = (arr1, arr2, self) => {
    let resultArray = [];
    debugger
    while (arr2.length > 0) {
        if (arr1[0]==undefined) {
            while (arr2[0]!=undefined) {
                resultArray.push({
                    id: resultArray.length+1,
                    sign: "+",
                    value: arr2[0]
                });
                arr2.splice(0,1);
            }
        }
        //Проверка 2 (на равенство):
        // Если 1й элемент 1ого массива равен любому эл-у из 2ого массива
        else
        if (isExistInSecondFile(arr1[0], arr2)) {
            //В arr2Index запишем под каким индексом в 2ом массиве (первым найденым) найдено такое же значение как 1й элемент 1ого массива
            let arr2Index = findArrIndex(arr1[0], arr2);
            resultArray.push({
                id: resultArray.length+1,
                sign: "=",
                value: arr1[0]
            });
            //удаляем найденые элементы
            arr1.splice(0,1);
            arr2.splice(arr2Index,1);
        }
        //Проверка 3 (на изменение):
        // Если 1й эл. 1ого массива не совпадает ни с одним эл. из 2ого массива
        // и 1й эл 2ого массива не совпадает ни с одним эл. из 1ого массива
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
        //Проверка 4 (есть в 1ом массиве - нет во 2ом):
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

    console.log("resultArray", resultArray);
    return resultArray;
};

export default {
    splitToStrings,
    isEqual,
    isExistInFirstFile,
    isExistInSecondFile,
    findArrIndex,
    compareArrays
}