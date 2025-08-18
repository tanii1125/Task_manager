document.getElementById("addBtn").addEventListener("click", addTask);


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }
  
  const li = document.createElement("li");
  li.textContent = taskValue;

  const progress=document.createElement("input");
  progress.type= "checkbox";
  progress.className= "status";
  progress.onclick= function(){
    if (progress.checked){
      li.style.textDecoration= "line-through";
    }else{
      li.style.textDecoration= "none";
    }
  }
  
  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.className = "delete";
  delBtn.onclick = function() {
    li.remove();
  };
  
  const edit=document.createElement("button");
  edit.to_edit=li.textContent;
  edit.textContent="Edit";
  edit.className="edit";
  edit.onclick= function(){  //window.prompt() instructs the browser 
  // to display a dialog with an optional message prompting the user to
  //  input some text, and to wait until the user either submits the text
  //  or cancels the dialog.
    const newTask= prompt("Edit your task:",edit.to_edit.replace("x",""))
    if (newTask !==null && newTask.trim()!==""){
      li.textContent =newTask.trim();
      li.appendChild(edit);
      li.prepend(progress);
      li.appendChild(delBtn);
    }
  }

  const More_info=document.createElement("button");
  More_info.textContent="More Info";
  More_info.className="more_info";
  More_info.onclick=function(){
    
  const title = taskValue;// the task text
  const status = progress.checked ? "Completed" : "Pending"; // checkbox status
  
  data=null;
  // Pass both as URL parameters
  const url = "task_info.html?title=" + encodeURIComponent(title) + 
              "&status=" + encodeURIComponent(status)+"&data=" + encodeURIComponent(data)

  window.open(url,target="_blank");
  // window.location.href = url;
  }



  li.appendChild(edit);
  li.prepend(progress);
  li.appendChild(More_info);
  li.appendChild(delBtn);
  

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
