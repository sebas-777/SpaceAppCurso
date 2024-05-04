function myDatas(name,age,callback) {
    console.log('my name is ' + name +" and  have " + age + " year Old");
    callback();
} 

function showMessage() {
    console.log("Welcome learing to JavaScript");
} 

myDatas("Isabella",10,showMessage);
