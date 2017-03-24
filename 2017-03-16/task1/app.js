var perc = +prompt("Enter Your Percentage To Find Your Grade", "");
if(perc >=101){
    document.write("Invalid Input Percentage Can't Be Above 100");
}else
if(pesdasrc >= 90){
    document.write("Your Grade Is A++");
}else 
if(perc >= 80){
    document.write("Your Grade Is A+");
}else 
if(perc >= 70){
    document.write("Your Grade Is A");
}else 
if(perc >= 60){
    document.write("Your Grade Is B");
}else 
if(perc >= 50){
    document.write("Your Grade Is C");
}else {
    document.write("Sorry, You Are Failed");
}
function myFunction() {
    location.reload();
}
