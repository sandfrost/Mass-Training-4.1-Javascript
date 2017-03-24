var html = +prompt("Enter Your Score For HTML","");
var css = +prompt("Enter Your Score For CS","");
var javascript = +prompt("Enter Your Score For Javascript","");

if(html >= 50 && html <= 100){document.write("Your HTML Is Cleared"+"<br>");}
else if(html <= 50 && html <= 100) {document.write("HTML Not Cleared"+"<br>");}
else{document.write("Inaviald Input HTML"+"<br>");}

if(css >= 50 &&  css <= 100){document.write("Your CSS Is Cleared"+"<br>");}
else if(html <= 50 && css <= 100)  {document.write("CSS Not Cleared"+"<br>");}
else{document.write("Inaviald Input CSS"+"<br>");}

if(javascript >= 50 && javascript <= 100 ){document.write("Your Javascript Is Cleared"+"<br>");}
else  if(html <= 50 && javascript <= 100) {document.write("JavaScript Not Cleared"+"<br>");}
else{document.write("Inaviald Input javascript"+"<br>");}

if(css >= 50 && html >= 50 && javascript >= 50)
{document.write( "Your Are Now Admited To Bright Section"+"<br>"); }
else if(css >= 50 && html >= 50 || javascript >= 50 && html >= 50 || css >= 50 && javascript >= 50)
{document.write("Your Are Now Admited To Orange Section"+"<br>");}
else{document.write("Sorry, You Are Failed"+"<br>");}

function myFunction() {
    location.reload();
}