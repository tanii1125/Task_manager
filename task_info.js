 // Assuming task data is passed as a query parameter
const urlParams = new URLSearchParams(window.location.search);
const taskName = urlParams.get('title');
const taskStatus = urlParams.get('status');

document.getElementById("task-heading").innerText = `Task: ${taskName}`;
document.getElementById("task-status").innerText = `Status: ${taskStatus}`;

// Load saved description from localStorage (if any)
const savedDescription = localStorage.getItem(taskName);
if (savedDescription) {
    document.getElementById("description").value = savedDescription;
    document.getElementById("task_description").innerText = savedDescription;
}


//enter new description
document.getElementById("save").addEventListener("click", display);
function display() {
  const data = document.getElementById("description").value.trim(); 
  if (!data) {
    alert("Please enter a valid Explaination.");
    return;
  }
  // Save data to localStorage using taskName as key
    localStorage.setItem(taskName, data);


  document.getElementById("task_description").innerText = `${data}`;
  alert(`Data saved successfully!\nTask: ${taskName}\nStatus: ${taskStatus}\nDescription: ${data}`);
  data=""; // Clear the input field after saving
}


// Go back button
document.getElementById("go_back").addEventListener("click", () => {
    window.location.href = "index.html";
});