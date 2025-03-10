// 1. toUpperCase & toLowerCase
const greetings = "Welcome to Purwadhika!";
const greetingsUpper = greetings.toUpperCase();
const greetingsLower = greetings.toLowerCase();
console.log(greetingsUpper);
console.log(greetingsLower);

// 2. split
const sentence = "Jakarta is enjoyable if you have enough money";
// const sentenceArray = ["Jakarta", "is", "enjoyable"];
const sentenceArray = sentence.split(" ");
console.log(sentenceArray);

// 3. search
const fullName1 = "King John Un";
const result = fullName1.search("Un");
console.log(result);

// 4. trim
const incomingEmail = " nadhiffuadi@gmail.com  ".trim();
const databaseEmail = "nadhiffuadi@gmail.com";
console.log(incomingEmail === databaseEmail);
