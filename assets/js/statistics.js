// Calculate the average

function average(array) {
    // let totalItems = 0;
    // let avg;
    // for (let i in array) {
    //     totalItems += array[i];
    // }
    // avg = totalItems / array.length;
    const sumItems = array.reduce((accumulator, item) => accumulator + item)
    avg = sumItems / array.length;
    return avg;
}

const getAverage = array => array.reduce((a, b) => a + b) / array.length;

// Calculate the median

const isEven = array => (array.length % 2 === 0);

function median(array) {
    let med;
    let sortArray = array.sort((a, b) => a - b);
    let halfposition = parseInt(sortArray.length / 2);
    console.log(sortArray);
    if (isEven(sortArray)) {
        med = (sortArray[halfposition - 1] + sortArray[halfposition]) / 2; 
    }
    else {
        med = sortArray[halfposition];
    }
    return med;
}

// Calculate the mode


function mode(array){
    return array.sort((a,b) => array.filter(v => v===a).length - array.filter(v => v===b).length).pop();
}