const addForm = document.querySelector(".add")
const allTasks = document.querySelector(".tasks")
const clearAll = document.querySelector(".clear")
const messageSpan = document.querySelector(".message-box span")
const searchForm = document.querySelector(".search")

function update(){
    const textLength = allTasks.children.length;
    messageSpan.innerText = `You have ${textLength} pending tasks`
}

update();

addForm.addEventListener("submit",(event)=>{
   event.preventDefault();
   const value = addForm.task.value.trim();

   if(value.length){
     allTasks.innerHTML += ` <li>
                                <span>${value}</span>
                                <button class="delete">Delete</button>
                             </li>`
    addForm.reset()
    update()
   }
})

allTasks.addEventListener("click",(event)=>{
       if(event.target.classList.contains("delete")){
        event.target.parentElement.remove()
        update()
       }
})

clearAll.addEventListener("click",(event)=>{
     const taskItems = allTasks.querySelectorAll("li")
     taskItems.forEach((item)=>{
          item.remove()
          update()
      })
})

function filterTask(term){
    Array.from(allTasks.children)
    .filter((task)=>{
          return !task.textContent.includes(term);
    }).forEach((task)=>{
        task.classList.add("hidden")
    });

    Array.from(allTasks.children)
    .filter((task)=>{
          return task.textContent.includes(term);
    }).forEach((task)=>{
        task.classList.remove("hidden")
    })
 
    console.log(allTasks.children)
}

searchForm.addEventListener("keyup",(event)=>{
    const term = searchForm.task.value.trim();
     filterTask(term)
})

searchForm.addEventListener("click",event=>{
    searchForm.reset()
    const term = searchForm.task.value.trim();
     filterTask(term)
})

