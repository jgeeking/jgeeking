

const arrowDom = [


    document.getElementById("grid1-content"),
    document.getElementById("grid2-content"),
    document.getElementById("grid3-content"),
    document.getElementById("grid4-content"),
    document.getElementById("grid5-content"),
    document.getElementById("grid6-content"),
    document.getElementById("grid7-content"),
    document.getElementById("grid8-content"),
    document.getElementById("grid9-content")


];


function dropdown1(){
    document.getElementById("dropdown1").src = "images/drop-up.svg";
    arrowDom[0].style.marginBottom = "20px";
    arrowDom[0].innerHTML = `<p> Variable is a very important concept in programming.
    The two programming languages have different approach in storing data in a variable.
    When learning a new langauge it is very essential to understand how variables are implemented.
    Variable can be use to store information using a specific data type and it can be access at any time in the program.
    In C# the data type that is being store in a variable is specific upon the variable declaration</p> `;
    arrowDom[0].style.background = "#c7f0ec";
    arrowDom[0].style.marginRight = "800px";
    //arrowDom[0].style.color = "white";


}
function dropup1() {
    document.getElementById("dropdown1").src = "images/arrow.svg";
    arrowDom[0].style.marginBottom = "0px";
    arrowDom[0].innerHTML = "";
    arrowDom[0].style.background = "white";
    arrowDom[0].style.padding = "0px";

}

function dropdown2(){
    document.getElementById("dropdown2").src = "images/drop-up.svg";
    arrowDom[1].style.marginBottom = "20px";
    arrowDom[1].innerHTML = `<p> String are use to store textual data. Strings are implemented similarly in both language
    with slight difference in syntax. Some primitive string methods are implemented differently in both language. </p> `;
    arrowDom[1].style.background = "#c7f0ec";
    arrowDom[1].style.marginRight = "800px";
    //arrowDom[1].style.color = "white";




}

function dropup2(){
    document.getElementById("dropdown2").src = "images/arrow.svg";
    arrowDom[1].style.marginBottom = "0px";
    arrowDom[1].innerHTML = "";
    arrowDom[1].style.background = "white"
    arrowDom[1].style.padding = "0px";


}
function dropdown3(){
    document.getElementById("dropdown3").src = "images/drop-up.svg";
    arrowDom[2].style.marginBottom = "20px";
    arrowDom[2].innerHTML = `<p> Math class in most programming languages are use to accomplish mathematical task. The things
    to understand is how those classes method are implemented differently using the two langauges, and how those classes can be
    included in your c# program to accomplish computation
   </p> `;
    arrowDom[2].style.background = "#c7f0ec";
    arrowDom[2].style.marginRight = "800px";
   // arrowDom[2].style.color = "white";




}

function dropup3(){
    document.getElementById("dropdown3").src = "images/arrow.svg";
    arrowDom[2].style.marginBottom = "0px";
    arrowDom[2].innerHTML = "";
    arrowDom[2].style.background = "white"
    arrowDom[2].style.padding = "0px";


}
function dropdown4(){
    document.getElementById("dropdown4").src = "images/drop-up.svg";
    arrowDom[3].style.marginBottom = "20px";
    arrowDom[3].innerHTML = `<p>Understanding how to write a function is very pivotal when learning a new programming language.
    Though functions and methods are used interchangeably but there is a difference between a stand alone function and a function
    that is written in a class. Functions that are created in a  specific class are called  methods in object oriented programming. The syntax
    for writting function is different in the two language. Python is a flexible and less syntax heavy. The underlying concept remain the same.
    There are functions or methods that return value to the caller and also functions that don't.

    </p> `;;
    arrowDom[3].style.background = "#c7f0ec";
    arrowDom[3].style.marginRight = "800px";
    //arrowDom[3].style.color = "white";




}

function dropup4(){
    document.getElementById("dropdown4").src = "images/arrow.svg";
    arrowDom[3].style.marginBottom = "0px";
    arrowDom[3].innerHTML = "";
    arrowDom[3].style.background = "white"
    arrowDom[3].style.padding = "0px";


}
function dropdown5(){
    document.getElementById("dropdown5").src = "images/drop-up.svg";
    arrowDom[4].style.marginBottom = "20px";
    arrowDom[4].innerHTML = `<p> Having a way to interact with user is valuable in programming. There are alot of instances
    in a programming that user input determine what the output of the program might be. Most program requires getting data from user to
    use it for decision making or other purposes. Python use less syntax to implement getting an input from user. In fact it is
    one line of code in python. In C# it takes about two line of code to accomplish this. </p> `;;
    arrowDom[4].style.background = "#c7f0ec";
    arrowDom[4].style.marginRight = "800px";
    //arrowDom[4].style.color = "white";




}

function dropup5(){
    document.getElementById("dropdown5").src = "images/arrow.svg";
    arrowDom[4].style.marginBottom = "0px";
    arrowDom[4].innerHTML = "";
    arrowDom[4].style.background = "white"
    arrowDom[4].style.padding = "0px";


}
function dropdown6(){
    document.getElementById("dropdown6").src = "images/drop-up.svg";
    arrowDom[5].style.marginBottom = "20px";
    arrowDom[5].innerHTML = `<p> Array is a very important data type. Array is one of the data structures that beginner get
    introduce to early on while learning a programming language. Understanding the primitive array method of a new programing langauge
    is a great way to take full advantage of the array data structure while using the language. In python array is implemented as a list. The syntax
    is slightly different in the two language.  </p> `;;
    arrowDom[5].style.background = "#c7f0ec";
    arrowDom[5].style.marginRight = "800px";
    //arrowDom[5].style.color = "white";




}

function dropup6(){
    document.getElementById("dropdown6").src = "images/arrow.svg";
    arrowDom[5].style.marginBottom = "0px";
    arrowDom[5].innerHTML = "";
    arrowDom[5].style.background = "white"
    arrowDom[5].style.padding = "0px";


}
function dropdown7(){
    document.getElementById("dropdown7").src = "images/drop-up.svg";
    arrowDom[6].style.marginBottom = "20px";
    arrowDom[6].innerHTML = `<p> If statements are core concept in programming. It is use to allow programs to make logical decisions.
    If statement give programmer alot of power to handle logic in their program. It is definitely one of the key things to understand
    when picking up a new programming language. Implementing "if statement" in C# require using opening and
    closing curly braces, where the instructions are written. For python it is simple. It can even be read just like plain English</p> `;
    arrowDom[6].style.background = "#c7f0ec";
    arrowDom[6].style.marginRight = "800px";
    //arrowDom[6].style.color = "white";




}

function dropup7(){
    document.getElementById("dropdown7").src = "images/arrow.svg";
    arrowDom[6].style.marginBottom = "0px";
    arrowDom[6].innerHTML = "";
    arrowDom[6].style.background = "white"
    arrowDom[6].style.padding = "0px";


}
function dropdown8(){
    document.getElementById("dropdown8").src = "images/drop-up.svg";
    arrowDom[7].style.marginBottom = "20px";
    arrowDom[7].innerHTML = `<p> Loops are used frequently to allow our program to execute repeatedly. There are two kinds of loops. "While" loop
    which is a indefinite loop and "for" loop a definite loop. The implementation of "for" loop in c# is completely different from how it is implemented in python.
    As a python developer it will take time to get use to the syntax. But the overall concept still remain. The program is going to loop at a specific range of time.
    There are also some cool looping structure in c# such as the "do" while loop and the foreach loop. </p> `;;
    arrowDom[7].style.background = "#c7f0ec";
    arrowDom[7].style.marginRight = "800px";
    //arrowDom[7].style.color = "white";




}

function dropup8(){
    document.getElementById("dropdown8").src = "images/arrow.svg";
    arrowDom[7].style.marginBottom = "0px";
    arrowDom[7].innerHTML = "";
    arrowDom[7].style.background = "white"
    arrowDom[7].style.padding = "0px";


}
function dropdown9(){
    document.getElementById("dropdown9").src = "images/drop-up.svg";
    arrowDom[8].style.marginBottom = "20px";
    arrowDom[8].innerHTML = `<p> Classes are very important to understand while learning  object oriented programming. Implementing classes in both
    programming language require having a constructor which is the first method that is called when a class is created. Also we have
    the chance to write method in our classes. Based on our class we can create object in our program that can have different properties and behavior.
    As a python developer while  implementing classes in c# it is very quick to realize the importance of object oriented  programming because the
    structure of the language syntax convey object oriented programming explicitly. A good example is that you can explicitly name your classes
    private and public in c#. How cool is that?
     </p> `;
    arrowDom[8].style.background = "#c7f0ec";
    arrowDom[8].style.marginRight = "800px";
    //arrowDom[8].style.color = "white";




}

function dropup9(){
    document.getElementById("dropdown9").src = "images/arrow.svg";
    arrowDom[8].style.marginBottom = "0px";
    arrowDom[8].innerHTML = "";
    arrowDom[8].style.background = "white"
    arrowDom[8].style.padding = "0px";


}

function colorchange1(){
    document.getElementById("v-image1").src = "images/floor4I.png"
  

}
function color_remove1(){
  document.getElementById("v-image1").src = "images/floor-program4.jpeg"
}

function colorchange2(){
    document.getElementById("v-image2").src = "images/floor5I.png"


}
function color_remove2(){
  document.getElementById("v-image2").src = "images/floor-program5.jpeg"
}
