/**
 * PRACTICAL LOOPS EXERCISE
 */

/**
 * Part 1: Fizz Buzz
 */

// Print a title for the exercise
console.log("***************************")
console.log("***  FizzBuzz Exercise  ***")
console.log("***************************")
// Create a for loop initilize in 1 with the condition <=100 and an increment on 1
for (let i = 1; i <= 100; i++) {

  // Fizz Buzz verification if it is divided by 5 and 3
  if (i % 3 === 0 && i % 5 == 0) {
    console.log("Fizz Buzz")
    //Fizz Verification if it is only divided by 3
  } else if (i % 3 === 0 && i % 5 != 0) {
    console.log("Fizz")
    //Buzz verfication if it is only divided by 5
  } else if (i % 3 != 0 && i % 5 === 0) {
    console.log("Buzz")
    //Print the number if it not a multiple of 3 or 5
  } else {
    console.log(i)
  }
}

/**
 * Part 2: Prime Time
 */

// Print a title for the exercise
console.log("***************************")
console.log("*** Prime Time Exercise ***")
console.log("***************************")

//declare a initial number
let initialNumber = 60
let finishNumber = 100


//let prime = false
let nextPrime = 0
let index = 0
if(initialNumber>finishNumber){
  console.log(`Your initial number of ${initialNumber} can be greater than ${finishNumber}`)
}else{
if (initialNumber < 3) {
  console.log(`The next prime number is : 2`)
}
else {
  for (i = initialNumber; i <= finishNumber; i++) {
    //verificar si i es primo
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        break
      }

      index = j
    }

    if (index + 1 == i) {
      nextPrime = i
      console.log(`The next prime number is : ${nextPrime}`)     
      break
    }

  }
  if(nextPrime===0)
  {
    console.log(`There is no prime numbers between ${initialNumber} and ${finishNumber}`)
    console.log(`Please increment the finish limit of ${finishNumber}`)
  }
}
}

/**
 * Part 3: Prime Time
 */

// Print a title for the exercise
console.log("***************************")
console.log("*** Prime Time Exercise ***")
console.log("***************************")

let rowString=""
let cells=[]

let dataString ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

//console.log(dataString)

 while(dataString.length>0){
  //buscar \n
  //si encuentra la cadena tomamos todo hasta antes de la \n
  if(dataString.indexOf("\n")!==-1){
    rowString=dataString.slice(0,dataString.indexOf("\n"))
    dataString=dataString.slice(dataString.indexOf("\n")+1,dataString.length)
  } else {
    rowString=dataString.slice(0,dataString.length)
    dataString=""
  }

  let index=0;
   while(rowString.length>0||index===3){
     if(rowString.indexOf(",")!==-1){
      cells[index]=rowString.slice(0,rowString.indexOf(","))
      rowString=rowString.slice(rowString.indexOf(",")+1,rowString.length)
   } else {
      cells[index]=rowString
      rowString=""
   }
   index++
  }

   console.log(`${cells[0]},${cells[1]},${cells[2]},${cells[3]}`)
   cells.length=0


 }