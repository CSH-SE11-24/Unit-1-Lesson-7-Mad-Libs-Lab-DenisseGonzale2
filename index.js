// Console log a welcome message with instructions to mad libs
console.log("Hello,This is to give you a story about cats and haunted houses!!  ")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("enter a adjective")
let pluralNoun = prompt("enter a plural noun")
let verb =prompt("enter a verb")
let adjective2 = prompt("enter a adjective")

// Create an array that stores the values the user entered
let array =[]
array.push(adjective)
array.push(pluralNoun)
array.push(verb)
array.push(adjective2)
console.log("The "+ array[0] + " cat, slowly creaked inside the house. Then BOOM a group of "+ array[1] + " came out, so the cat jumped and " + array[2] + ". Shortly after, the cat met up with a another "+ array[3] +" cat and they got out the scary haunted house. THE END!")

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console







