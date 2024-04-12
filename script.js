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
for(let i=1; i<=100;i++){
  
  // Fizz verification
  if(i%3===0&&i%5==0){
    console.log("Fizz Buzz") 
  } else if(i%3===0&&i%5!=0){
    console.log("Fizz") 
  } else if(i%3!=0&&i%5===0){
    console.log("Buzz") 
  } else {
    console.log(i)
  }
}