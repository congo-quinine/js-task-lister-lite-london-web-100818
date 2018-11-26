class Task {

  constructor(taskName){
    this.taskName = taskName;
    this.todoList = document.querySelector('#tasks')
  }

  addTask(){
  const liTodo = document.createElement('li');
  liTodo.setAttribute("id", `task${this.taskName.id}`);

    liTodo.innerHTML = `
        <p> ${this.taskName.task} </p>
        <input style="" type='button'>Delete</input>
    `
    this.todoList.appendChild(liTodo);

    liTodo.addEventListener("click", (event) => {
      console.log(`${this.taskName.id}`)
      const deleteElement = document.querySelector(`#task${this.taskName.id}`)
      deleteTask(this.taskName);
      deleteElement.remove();

    })
  }



}
