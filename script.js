// alert("loading");
function addNewWEField(){
    //  console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}
// generating CV
function generateCV(){
    
let namefield = document.getElementById("namefield").value;

let nameT1 = document.getElementById("nameT1");

nameT1.innerHTML = namefield;

document.getElementById("nameT2").innerHTML=namefield;

// contact
document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
// address
document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

document.getElementById("LinkedT").innerHTML=document.getElementById("LinkedField").value;

// objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

// for work experience

let wes=document.getElementsByClassName("weField");

let str="";

for(let e of wes)
    {
str=str + `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML= str ;
//aq

let aqs=document.getElementsByClassName("eqField")

let str1=""

for(let e of aqs)
{
    str1+=`<li> ${e.value} </li>`
}

document.getElementById("aqT").innerHTML= str1 ;

document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';


}



// print CV
function printCV(){
    window.print();
}