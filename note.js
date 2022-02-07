let inputEl = document.getElementById("input-el");
let addNote = document.getElementById("addNote");
let box = document.getElementById("box");
let myNotes=[];
var modal = document.getElementById("myModal");
var view = document.getElementById("view");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let detailNotes=document.getElementById("detailNotes")

addNote.addEventListener("click",function(){
 
if(inputEl.value!= ""){
myNotes.push(inputEl.value);
}

inputEl.value ="";



localStorage.setItem('myNotes',JSON.stringify(myNotes));


addNewNote();

//console.log(localStorage.getItem("myNotes"));
})



// When the user clicks the button, open the modal 



let myNotesFromlocalstorage = JSON.parse(localStorage.getItem("myNotes"));
console.log(myNotesFromlocalstorage);
 
if(myNotesFromlocalstorage){
	myNotes = myNotesFromlocalstorage;
	addNewNote();
}
function addNewNote(){
	let element='';
	for(let i= 0 ; i < myNotes.length ; i++)
	{
		element +=`<div class="column"><p style="font-size:20px;font-weight:bold;">Note:
		${i+1}</p>
		${myNotes[i]}<br>
		<p></p>
		<button id="view" onclick="viewDetail()" style="background-color:#2688eb;border-radius:5px;border:none">Detail</button>
		</div>`
	}
	if(myNotes.length > 10){

		detailNotes.innerHTML = myNotes;
	}
	box.innerHTML = element;
	
}

//view.onclick = 
function viewDetail() {
	modal.style.display = "block";
	let element1 ='';
	for(let i= 0 ; i < myNotes.length ; i++)
	{
		element1 =`<p>
		${myNotes[i]}
		</p>`
	}
	detailNotes.innerHTML = element1;
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
	modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }
  