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
