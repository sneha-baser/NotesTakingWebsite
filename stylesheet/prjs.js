<!-- code for adding notes to local storage -->
shownotes();
var btn=document.getElementById("addNote");
btn.addEventListener("click",function(e){
var addtext=document.getElementById("addText");
var addtitle=document.getElementById("addTitle");
let notes=localStorage.getItem("notes");
if(notes==null)
notesobj=[];
else
notesobj=JSON.parse(notes);
let myobj = {
	title : addtitle.value,
	text : addtext.value
}
notesobj.push(myobj);
localStorage.setItem("notes",JSON.stringify(notesobj));
addtext.value=" ";
addtitle.value=" ";
shownotes();})
<!-- code for displaying notes that is added to ui -->
function shownotes(){
	let notes=localStorage.getItem("notes");
if(notes==null){
notesobj=[];
}
else{
notesobj=JSON.parse(notes);
}
let html=" ";
notesobj.forEach(function(element,index){
	html += `<div class="notecard my-2 mx-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.text}</p>
    <button class="btn btn-primary" id="${index}" onclick="DeleteNote(this.id)">Delete Note</button>
  </div>
</div>`;
	
});
let noteselem = document.getElementById('notes');
if(notesobj.length==0)
noteselem.innerHTML='Nothing to show! add notes too add'
if(notesobj.length!=0)
	noteselem.innerHTML=html;

}
// code for delete note

function DeleteNote(index){
	let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}





// code for search notes
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
