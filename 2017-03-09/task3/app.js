var Name=prompt("Welcome, This App Is Use As Simple Calculator, Please Enter Your Name To Proceed","Your Name");

var num1=+prompt("Enter the First Number","eg:123...");

var num2=+prompt("Enter the Second Number","eg:123...");

var opp=prompt("Enter the Operations","Function Limited to : *, / , + -");

var result="0";

if(opp=="*")
{result=num1 *  num2;
document.write(Name + " Your Answer For " + num1 + " X " + num2 + " = " + result+"<hr>");}

else if(opp=="/")
{result=num1 /  num2;
document.write(Name + " Your Answer For " + num1 + " / " + num2 + " = " + result+"<hr>");}

else if(opp=="+")
{result=num1 +  num2;
    document.write(Name + " Your Answer For " + num1 + " + " + num2 + " = " + result+"<hr>");}

else if(opp=="-")
{result=num1 -  num2;
    document.write(Name + " Your Answer For " + num1 + " - " + num2 + " = " + result+"<hr>");}

    else{document.write(" invalid function called "+"<br>");}
    result=0;
    function myFunction() {location.reload();
}