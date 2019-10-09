window.onload=function()
{
var 
eql=document.getElementById("buttonE"),
one=document.getElementById("button1"),
two=document.getElementById("button2"),
three=document
.getElementById("button3"),
four=document
.getElementById("button4"),
five=document
.getElementById("button5"),
six=document.getElementById("button6"),
seven=document
.getElementById("button7"),
eight=document
.getElementById("button8"),
nine=document
.getElementById("button9"),
zero=document
.getElementById("button0"),
plus=document
.getElementById("buttonP"),
sub=document.getElementById("buttonS"),
mul=document.getElementById("buttonM"),
div=document.getElementById("buttonD"),
dec=document.getElementById("buttond"),
clr=document.getElementById("buttonC"),
txtbox=document
.getElementById("textbox1");

var val1=0,val2=0,val3=0.0,optr="";

plus.onclick=function()
{
val1=Number(txtbox.value)
optr="+"
txtbox.value=""
}

sub.onclick=function()
{
val1=Number(txtbox.value)
optr="-"
txtbox.value=""
}

mul.onclick=function()
{
val1=Number(txtbox.value)
optr="*"
txtbox.value=""
}

div.onclick=function()
{
val1=Number(txtbox.value)
optr="/"
txtbox.value=""
}

clr.onclick=function()
{
val1=val2=0
optr=""
txtbox.value=""
}

dec.onclick=function()
{
txtbox.value+="."
}

zero.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="0"
}

one.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="1"
else
txtbox.value="1"
}

two.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="2"
else
txtbox.value="2"
}

three.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="3"
else
txtbox.value="3"
}

four.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="4"
else
txtbox.value="4"
}

five.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="5"
else
txtbox.value="5"
}

six.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="6"
else
txtbox.value="6"
}

seven.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="7"
else
txtbox.value="7"
}

eight.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="8"
else
txtbox.value="8"
}

nine.onclick=function()
{
if(txtbox.value!="0")
txtbox.value+="9"
else
txtbox.value="9"
}

eql.onclick=function()
{
val2=Number(txtbox.value)
switch(optr)
{
case "+":
val3=val1+val2
txtbox.value=val3
break
case "-":
val3=val1-val2
txtbox.value=val3
break
case "*":
val3=val1*val2
txtbox.value=val3
break
case "/":
if(val2==0)
{
alert("⚠️ Error: Divide by zero!")
txtbox.value="ERROR!"
}
else
{
val3=val1/val2;
txtbox.value=val3
}
break
}
optr=""
val1=val2=0
}
}
