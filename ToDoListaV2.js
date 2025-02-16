const addTaskInput=document.querySelector(".addTaskInput")
const addTaskBtn=document.querySelector(".addTaskBtn")
const myList=document.querySelector(".myList")

ShowTask()
TaskReady()

addTaskBtn.addEventListener("click",AddTask)


function AddTask(){
    let task=addTaskInput.value.trim()

    if(task !== ""){
        let li=document.createElement("li")
        li.innerHTML=task
        AddDeleteBtn(li)
        myList.appendChild(li)
    }
    else{
        alert("Write in something..")
    }

    addTaskInput.value=""
    SaveData()
}


function AddDeleteBtn(li){
    const deleteBtn=document.createElement("i")
    deleteBtn.innerHTML=""
    deleteBtn.classList="fa-solid fa-circle-xmark deleteBtn"
    li.appendChild(deleteBtn)
}



function TaskReady(){
    myList.addEventListener("click", (event) => {
        if(event.target.tagName === "LI"){
            event.target.classList.toggle("checked")
            SaveData()
        }
        else if(event.target.tagName === "I"){
            event.target.parentElement.remove()
            SaveData()
        }
    })

}


function SaveData(){
    localStorage.setItem("data", myList.innerHTML)
}

function ShowTask(){
    myList.innerHTML=localStorage.getItem("data")
}