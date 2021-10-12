//1
const sumOfThreeAndFive = () => { 
    let sum = 0; 
    for(let i = 1; i < 1000; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    } return sum;
  
}

//console.log(sumOfThreeAndFive());


const greaterNum = (int1, int2) => {
    if(!Number.isInteger(int1) || !Number.
    isInteger(int2)) {
        return 'null'
    }
    else if(int1 === int2) {
        return 'both integers are equal';
    }else if (int1 > int2) {
        return int1;
    }else {
        return int2;
    }
  
}

// console.log(greaterNum('dsabhbaj', 5));

const oddAndEvenInFifteen = () => {
    let resultArray = [];
    for(let i = 0; i <= 15; i++) {
       if(i % 2 === 0){
            resultArray.push(`${i} is even`);
        }else {
            resultArray.push(`${i} is odd`);
        }
    } return resultArray;
  
}
//console.log(oddAndEvenInFifteen());




//Horrible solution, bugged. Needs refactoring and clean up. 

// const sortThreeNums = (int1, int2, int3) => {
//     let greatest = 0;
//     let middle = 0;
//     let smallest = 0;
//     if(isNaN(int1) || isNan(int2) || isNan(int3)) {
//         return 'please use a valid number';
//     } 

//     if(int1 > int2 && int1 > int3 && int2 > int3) {
//         greatest = int1; 
//         middle = int2;
//         smallest = int3;

//     if(int1 > int2 && int1 > int3 && int3 > int2) {
//         greatest = int1; 
//         middle = int3;
//         smallest = int2;

//     } 
//     else if(int2 > int1 && int2 > int3 && int3 > int1) {
//         greatest = int2; 
//         middle = int3;
//         smallest = int1;

//     } 
//     else if(int2 > int1 && int2 > int3 && int1 > int3) {
//         greatest = int2; 
//         middle = int1;
//         smallest = int3;

//     } 

//     else if(int3 > int1 && int3 > int2 && int1 > int2) {
//         greatest = int3; 
//         middle = int1;
//         smallest = int2;

//     } 

//     else if(int3 > int1 && int3 > int2 && int2 > int1) {
//         greatest = int3; 
//         middle = int2;
//         smallest = int1;

//     } 

//     return smallest, middle, greatest;
        
        

  
// }
// }


// console.log(sortThreeNums(1, 2, 3));






