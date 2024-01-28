const notesContainer = document.querySelector(".notescontainer");
const createBtn = document.querySelector(".btn");
const createhBtn = document.querySelector(".hbtn");
let notes = document.querySelectorAll(".inputbox");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputbox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "image/trash.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

createhBtn.addEventListener

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputbox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})