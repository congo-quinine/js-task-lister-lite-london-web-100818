
document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:3000/tasks")
    .then(resp => resp.json())
    .then(grabAllTask)


  console.log('hello')
});

const taskForm = document.querySelector('#create-task-form')
const taskDescription = document.querySelector('#new-task-description')

taskForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const task = {
    task: taskDescription.value
  }

  saveTask(task).then(t => {
    const newTask = new Task(t)

    newTask.addTask()
  })

  // const newTask = new Task(task)
  // newTask.addTask()


})

const grabAllTask = (allTasks) => {
  allTasks.forEach(function(element){
    const newTask = new Task(element)
    newTask.addTask()
  })

}
