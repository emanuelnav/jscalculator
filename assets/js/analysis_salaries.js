// Helpers

const salariesCO = colombia.map( (person) => person.salary);

const salariesSorted = salariesCO.sort( (salaryA, salaryB) => salaryA - salaryB);

const isEven = array => (array.length % 2 === 0);

// Median general

const median = array => {
    let med;
    const halfposition = parseInt(array.length / 2);
    console.log(array);
    if (isEven(array)) {
        med = (array[halfposition - 1] + array[halfposition]) / 2; 
    }
    else {
        med = array[halfposition];
    }
    return med;
}

// Top 10% median

const sliceStart = salariesSorted.length * 0.90;

const salariesTop10 = salariesSorted.slice(sliceStart, salariesSorted.length);

const top10Median = median(salariesTop10);