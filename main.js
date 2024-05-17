const inputBox = document.getElementById("inputProject");
const displayContent = document.getElementById("displayContent");
const addBttn = document.getElementById("addBttn");
const viewAllBttn = document.getElementById("viewAll");

addBttn.addEventListener("click", addTask);
viewAllBttn.addEventListener("click", viewAllTasks);

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "taskItem";
    taskDiv.textContent = inputBox.value.trim();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
        taskDiv.remove();
        checkViewAll();
    });

    taskDiv.appendChild(deleteButton);
    displayContent.appendChild(taskDiv);

    inputBox.value = '';

    const taskItems = displayContent.getElementsByClassName("taskItem");
    if (taskItems.length === 1) {
        taskItems[0].style.display = "block";
    }

    checkViewAll();
}

function viewAll() {
    const taskItems = displayContent.getElementsByClassName("taskItem");
    for (let i = 0; i < taskItems.length; i++) {
        taskItems[i].style.display = 'block';
    }
    viewAllBttn.style.display = 'none';
}

function checkViewAll() {
    const taskItems = displayContent.getElementsByClassName("taskItem");
    if (taskItems.length > 1) {
        viewAll.style.display = 'block';
    } else {
        viewAll.style.display = 'none';
    }
}
