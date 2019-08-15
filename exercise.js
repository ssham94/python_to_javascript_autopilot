var apples = 14;
console.log(`I have ${apples} apples.`);
console.log('');

var materials = ['wood', 'metal', 'stone'];
var words = {
    'elephant': 'The world\'s largest land mammal.',
    'school': 'A place of learning.', 
    'ice cream': 'A delicious milk-based dessert.'
}

// Checking to see if the list and object has been created correctly
console.log(materials[0]);
console.log(words['elephant']);

var num = 16;
if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10.`);
}

for (let i = 0; i < 10; i++){
    console.log('Doing the same thing over and over.');
}

const base = 5
for (let i = 0; i < 20; i ++){
    console.log(i + 5);
}

var total = 0
for (let i = 0; i < 100; i ++){
    total += i;
}

console.log('');
console.log(total);
console.log('');

for (let height = 3; height < 15; height++){
    if (height > 9){
        console.log('You can get on the rollercoaster!');
    } else {
        console.log('You are too short to ride this rollercoaster');
    }
}

console.log('');

var containers = ['purse', 'wallet', 'backback'];
for (let i = 0; i < containers.length; i++){
    console.log(containers[i]);
} 

function hello_world(){
    return 'Hello World!';
}
console.log('')
console.log(hello_world());

function add(first_num, second_num){
    return first_num + second_num;
}
console.log('')
console.log(add(5,6));