document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "âœ–";

        // Append the span and delete button to the task item
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";

        // Event listener to mark the task as complete
        taskSpan.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Event listener to delete the task
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }

    // Add event listener to the add task button
    addTaskBtn.addEventListener("click", addTask);

    // Add task on pressing "Enter" in the input field
    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") addTask();
    });
});

