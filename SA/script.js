const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("addquestioncard");
const cardButton = document.getElementById("savebtn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("addflashcard");
const closeBtn = document.getElementById("closebtn");
let editBool = false;

//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
});

//Hide create flashcard card
closeBtn.addEventListener(
    "click",
    (hideQuestion = () => {
        container.classList.remove("hide");
        addQuestionCard.classList.add("hide");
        if (editBool) {
            editBool = false;
            submitQuestion();
        }
    })
);

//Submit question
cardButton.addEventListener(
    "click",
    (submitQuestion = () => {
        editBool = false;
        tempQuestion = question.value.trim();
        tempAnswer = answer.value.trim();
        if (!tempQuestion || !tempAnswer) {
            errorMessage.classList.remove("hide");
        }
        else {
            container.classList.remove("hide");
            errorMessage.classList.add("hide");
            viewlist();
            question.value = "";
            answer.value = "";
        }
    })
);

//cARD generate
function viewlist() {
    var listCard = document.getElementsByClassName("cardlistcontainer");
    var div = document.createElement("div");
    div.classList.add("card");
    //Question
    div.innerHTML += `<p class="questiondiv">${question.value}</p>`;
    //Answer
    var displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answerdiv", "hide");
    displayAnswer.innerText = answer.value;
 
    //Link to show/hide answer
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "showhidebtn");
    link.innerHTML = "Show/Hide";
    link.addEventListener("click", () => {
        displayAnswer.classList.toggle("hide");
    });
    div.appendChild(link);
    div.appendChild(displayAnswer);
 
//Edit Button
 let buttonsCon = document.createElement("div");
 buttonsCon.classList.add("buttonscon");
 var editButton = document.createElement("button");
 editButton.setAttribute("class", "edit");
 editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
 editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
 });
 buttonsCon.appendChild(editButton);
 disableButtons(false);

//Delete Button
 var deleteButton = document.createElement("button");
 deleteButton.setAttribute("class", "delete");
 deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 deleteButton.addEventListener("click", () => {
  modifyElement(deleteButton);
 });
 buttonsCon.appendChild(deleteButton);



 div.appendChild(buttonsCon);
    listCard[0].appendChild(div);
    hideQuestion();
 };
 //Modify elements
 const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement.
    parentElement;
    let parentQuestion = parentDiv.querySelector(".questiondiv").innerText;
    if (edit) {
        let parentAns = parentDiv.querySelector(".answerdiv").innerText;
        answer.value = parentAns;
        question.value = parentQuestion;
        disableButtons(true);
    }
    parentDiv.remove();
 };

 //Disable edit and delete button
 const disableButtons = (value) => {
    let editButtons = document.getElementsByClassName
    ("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = value;
    });
 };