//TEMPLATES LITERALS

//``; //.===> TEMPLATES LITERALS
// var studentobj = {
//     name: "ABdullah",
//     Roll: 119778,
//     age: 17,
//     addres:{
//         city: "Karachi",
//         state: "Sindh",
//         country: "Pakistan"
//     },
//     education:["Master","Enter","Matric"],
//     getName:function(e){
//         // return this.name
//         console.log(e);
//     }
// }
// studentobj.fathername = "S.M Aslam";
// studentobj.education.unshift("PHD");
// studentobj.getName("HELLO WORLD");
// delete studentobj.Roll
// console.log("age" in studentobj);
// console.log(studentobj);
// console.log(typeof studentobj.education);
// console.log(studentobj.getName());
// console.dir(document)
// console.log(studentobj.getName("HELLO WORLD"));



// function addtodo(){
//     var input = document.getElementById("inputfield");
//     var lost = document.getElementById("list");
//     lost.innerHTML += `<li> ${input.value} <button onclick="editbtn(this)">Edit</button><button onclick="delbtn(this)">Delete</button></li>`
//     input.value = "";
// }

// function deleteall(){
//     var lost = document.getElementById("list");
//     lost.innerHTML = "";
// }

// function delbtn(e){
//     e.parentNode.remove();
// }

// function editbtn(e){
//     var val = e.parentNode.firstChild.nodeValue;
//     var editvalue = prompt("Enter update value", val);
//     if(editvalue.value === ""){
//         alert("Pleae fill the list...");
//     }
//     else{
//         e.parentNode.firstChild.nodeValue = editvalue
//     }
// }