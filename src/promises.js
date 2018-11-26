//promises



const saveTask = (task) =>
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  }).then(resp => resp.json())



const deleteTask = (task) => {
  fetch(`http://localhost:3000/tasks/${task.id}`, {
    method: "DELETE"
  })
}
