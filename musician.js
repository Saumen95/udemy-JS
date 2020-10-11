/*
 * Programming Quiz: Musical Groups (3-3)
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */

// change the value of `musicians` to test your conditional statements
var musicians = 20;
if (musicians === 1) {
    console.log("solo");
} // your code goes here
else if (musicians === 2) {
    console.log("duet");
} // your code goes here
else if (musicians === 3) {
    console.log("trio");
} // your code goes here
else if (musicians === 4) {
    console.log("quartet");
} // your code goes here
else if (musicians > 4) {
    console.log("this is a large group");
} // your code goes here
else {
    console.log("not a group");
}