// Ass1
// Q1: Create function that return if the number is odd or even 

/**
  
let numb
function getNum() {
    try {
        numb = parseInt(prompt("please enter a number"))


    } catch (e) { alert(e); alert('please enter a number, try again') }
    return numb
}
console.log(numb);
numb = getNum();
function numberIsOddOrEven() {
    try {
        if (isCorrectInput()) {

            if (numb % 2 == 0) {
                alert(`${numb} is even number`)
            }
            else if (numb % 2 != 0) {
                alert(`${numb} is odd number`)

            }
            else { alert('please enter a number, try again') }
        }


    } catch (e) {
        alert('please enter a number, try again')
    }
}
function isCorrectInput() {
    let isCorrectIn = true
    while (isCorrectIn) {
        try {
 
            if (!isNaN(numb)) {
                isCorrectIn = false

                break

            }
            else {
                alert('please enter a number, try again')
                numb = getNum()

                isCorrectIn = true


            }


        } catch (e) {
            alert(e)
            alert('please enter a number, try again')
            isCorrectIn = true
        }
    }
    return !isCorrectIn
}

numberIsOddOrEven()

 */


//Q2: Create function that returns the multiplication table for sepcific number  
/*
let numb
function getNum() {
    try {
        numb = parseInt(prompt("please enter a number"))


    } catch (e) { alert(e); alert('please enter a number, try again') }
    return numb
} 
numb = getNum(); 
let str = ''
function getMultiplicationNum(){
    for(let i=1;i<=10;i++){
        // str+=(numb*i)+"\n"
        str+=` ${numb} * ${i} = ${numb*i}   \n `
    }
}
function MultiplicationOfNum() {
     
    try {
        if (isCorrectInput()) {
            getMultiplicationNum()
            alert(str)
        }


    } catch (e) {
        alert('please enter a number, try again')
    }
}
function isCorrectInput() {
    let isCorrectIn = true
    while (isCorrectIn) {
        try {
 
            if (!isNaN(numb)) {
                isCorrectIn = false

                break

            }
            else {
                alert('please enter a number, try again')
                numb = getNum()

                isCorrectIn = true


            }


        } catch (e) {
            alert(e)
            alert('please enter a number, try again')
            isCorrectIn = true
        }
    }
    return !isCorrectIn
}

MultiplicationOfNum()
*/

/* Q3: Create a function that returns the indeices of the two number in array which their summtion equal to the total_number variable 
 Ex:
 Array =[1,2,3,4,5,6]
 Total_number = 10 
 Output = [3,5] because 4+6 = 10 
 */

 /*
 let arr = [1, 2, 3, 4, 5, 6]
let arrOfIndices = []
let numb
function getNum() {
    try {
        numb = parseInt(prompt("please enter a number"))


    } catch (e) { alert(e); alert('please enter a number, try again') }
    return numb
}
numb = getNum();

let str = ""
function summationEqualsToTotalNum() {

    try {
        if (isCorrectInput()) {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i+1; j < arr.length; j++) {
                    if(arr[i] + arr[j] == numb){
                        arrOfIndices.push({"i":i,"j":j})
                    }
                }
            } 
            let firstIndex,  secondIndex;
            for(let k =0 ;k<arrOfIndices.length;k++){
                 firstIndex =arrOfIndices[k].i;
                 secondIndex = arrOfIndices[k].j;  
                str+=`[${firstIndex},${secondIndex}] because ${arr[firstIndex]}+${arr[secondIndex]} = ${numb} \n`
            }
            if(arrOfIndices.length!=0){
                alert(str)
            }
            else{
                alert("not found the two number in array which their summtion equal to the total_number:"+numb)
            }
 
        }



    } catch (e) {
        alert('please enter a number, try again')
    }
}
function isCorrectInput() {
    let isCorrectIn = true
    while (isCorrectIn) {
        try {

            if (!isNaN(numb)) {
                isCorrectIn = false

                break

            }
            else {
                alert('please enter a number, try again')
                numb = getNum()

                isCorrectIn = true


            }


        } catch (e) {
            alert(e)
            alert('please enter a number, try again')
            isCorrectIn = true
        }
    }
    return !isCorrectIn
}

summationEqualsToTotalNum()


 
 */
/*
Q4: Create a function that returns true if the first array can be nested inside the second array 

Arr1 can be nested in Arr2 if:
1- arr1’s min is greater than arr2’s min
2- arr1’s max is less than arr2’s max 
*/
/*
// first example is nested example
let arr1 = [1, 7,15,10, 6]
let arr2 = [2,9] 

//  second example .. isn't nested example
// let arr1 = [1, 7,15,10, 6]
// let arr2 = [2,20] 


 
function canArr1NestedInArr2() {
let maxNumInArr1 = Math.max(...arr1)
let minNumInArr1 = Math.min(...arr1)
let maxNumInArr2 = Math.max(...arr2)
let minNumInArr2 = Math.min(...arr2)
if(minNumInArr2>minNumInArr1 && maxNumInArr2<maxNumInArr1){
    alert(`[${arr2}] is nested in [${arr1}]`)
}
else{
    alert(`[${arr2}] isn't nested in [${arr1}]`)
}
    
}
 

canArr1NestedInArr2()


 */

/*
Q5: 
** what is the output of 
Console.log( “A” - “B” + 3 )
Console.log( “A” - “B” + “3”)
And explian your answer
*/
// Answer:
 
// console.log( "A" - "B" + 3 ) => this will return NAN because when sub 2 numbers if it's string it will cast it automatically as implicit casting A is not number and can't concatination because "-" not "+" operation and because + and - operation has the same priority this operation will start from left to right

//  console.log( "A" - "B" + "3") => this will return NAN3 the same reson of above situation but add to it that is NAN is number type so when add number to string it will concat to string so NAN will concat to 3 to give result NAN3
 //

 /*
 Q6:
  what is the output of 
Console.log( [ ]  == [ ] )
Console.log( { } == { } )
And explain your answer

*/
// Answer: 

// console.log( [ ]  == [ ] ) = > it will return false because it will comapre address of it array deal with ref and address and both don't refer to same address so it will return false
// console.log( { } == { } )= > it will return false because it will comapre address of it object deal with ref and address and both don't refer to same address so it will return false

/*
Q7: what is the output of this code with explaination

function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
*/
 
//   Answer
  //setTimeout () will take a time so it will put in webApi as js environment (call stack will send setTimeOut() into webApi after that if it finished it will pass to queue then return result to call stack ) so output will be 
  /*
  A
  C
  B
  
  */