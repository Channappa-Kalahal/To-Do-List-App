
const inputbox = document.getElementById("input-box");
const tasks = document.getElementById("tasks");

function addtask() {
    if (inputbox.value == '') {
        alert("Write something brroooo.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        tasks.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);

        let img = document.createElement("img");
        img.src = "images/cancel.png";

        span.appendChild(img);

    }
    inputbox.value = '';
    savedata();
}

tasks.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName == "IMG"){
        //alert("do you want to delete the task");
        e.target.parentElement.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}

function showtask(){
    tasks.innerHTML  = localStorage.getItem("data");
}
showtask();