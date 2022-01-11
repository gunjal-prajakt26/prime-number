var chalk = require ("chalk");
var readLine= require('readline-sync')

var n= readLine.question(chalk.green("Enter number : "));
var flag=0;
var m= n/2;
for(var i = 2 ; i < m; i++ ){
  if(n % i===0){
    console.log(chalk.red("\n"+n+" is not prime number "));
    flag=1;
    break;
  }
}
if(flag===0){
  console.log(chalk.blue("\n"+n+" is prime number "));
}