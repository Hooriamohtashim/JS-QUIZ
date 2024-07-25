var score = 0;

alert("Get ready to test your JavaScript knowledge and skills.\n Whether you're a beginner or an expert, this quiz is designed to challenge and educate you. Have fun and enjoy the journey of mastering JavaScript!\n Good luck!")

var ques1 = "1. What does the term 'Hoisting' refer to in JavaScript?\n" +
    "A.Moving all declarations to the top of the current scope.\n" +
    "B.Automatically converting types during assignment.\n" +
    "C.terating over an array using a loop. \n" +
    "D. None of the above" ;


var ans1 = prompt(ques1);
if (ans1 === "A") {
    alert("Correct !");
    score++
}

else {
    alert("Incorrect. The correct answer is A.")
}


var ques2 = "What is the difference between 'undefined' and null in JavaScript?\n" +
    "A.Both represent an empty value. \n " +
    "B.undefined is the value assigned to a declared variable that is not initialized, while null is an explicitly assigned value representing no value. \n" +
    "C.null is used for functions only. \n" +
    "D. None of the above. ";

var ans2 = prompt(ques2);

if (ans2 === "B") {
    alert("correct!");
    score++
}
else {
    alert("Incorrect. The answer is B");
}

var ques3 = "How can you add a comment in JavaScript?\n" +
    "A.<!-- This is a comment --> \n " +
    "B. // This is a comment\n" +
    "C. /* This is a comment */\n" +
    "D. Both B and C";

var ans3 = prompt(ques3);

if (ans3 === "B") {
    alert("correct!");
    score++
}

else {
    alert("Incorrect. the answer is B");
}


var ques4 = "What is the correct way to declare a variable in JavaScript?\n" +
    "A.variable name = value;\n"+
    "B.var name = value;\n" +
    "C.variable = value;\n" +
    "D.value = name;";

var ans4 = prompt(ques4);

if (ans4 === "B"){
    score++
}

else {
    alert("Incorrect. the answer is B");
}


var ques5 = "What does an else statement do in JavaScript?\n" +
    "A.Executes a block of code if the condition is true.\n " +
    "B.Executes a block of code if the condition is false.\n" +
    "C.Executes a block of code repeatedly \n" +
    "D.None of the above.";

var ans5 = prompt(ques5);

if (ans5 === "B") {
    alert("correct!");
    score++
}

else {
    alert("Incorrect. the answer is B");
}

var ques6 = "How do you check if a variable x is equal to 5 in JavaScript? \n" +
    "A.if x equals 5\n " +
    "B.if (x == 5)\n" +
    "C.if x = 5\n" +
    "D.if (x === 5)";

var ans6 = prompt(ques6);

if (ans6 === "B") {
    alert("correct!");
    score++
}

else {
    alert("Incorrect. the answer is B");
}

var ques7 = "What is the difference between == and === in JavaScript?\n" +
    "A.They are identical in functionality.\n " +
    "B.=== compares both value and type, while === compares only value.\n" +
    "C.== compares both value and type, while === compares only value." +
    "D.=== performs a deep comparison of objects, while == does a shallow comparison.";

var ans7 = prompt(ques7);

if (ans7 === "B") {
    alert("correct!");
    score++
}

else {
    alert("Incorrect. the answer is B");
}

var ques8 = "What happens if you omit the else statement in an if...else structure? \n" +
    "A.The if statement will not execute.\n " +
    "B.The else statement will execute instead.\n" +
    "C. It is a syntax error.\n" +
    "D.None of the above";

var ans8 = prompt(ques8);

if (ans8 === "A") {
    alert("correct!");
    score++
}

else {
    alert("Incorrect. the answer is A");
}


alert("Quiz is over! you scored " + score + " out of 8")