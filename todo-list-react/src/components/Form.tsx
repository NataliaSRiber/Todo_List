import { ChangeEvent, FormEvent, useState } from "react";

function Form() {
  // ver para salvar no local storage
  const [ tasks, setTasks ] = useState<string[]>([]);
  const [ newTask, setNewtask ] = useState('');
  const [ taskChecked, setTaskChecked ] = useState('');
  const [ taskCheckedList, setTaskCheckedList ] = useState<string[]>([]);


  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewtask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewtask('');
  }

  function DeleteTask(taskToDelete: string) {
    const listWithoutDeletedOne = tasks.filter((taskOnList) => {
      return taskToDelete !== taskOnList 
    })
    setTasks(listWithoutDeletedOne);
  }

  function checkedTask(task: string) {
    if(!taskCheckedList.includes(task)) {
      setTaskCheckedList([...taskCheckedList, task]);
    }
    // caso a pessoa clique e desclique no checkbox, a tarefa será removida da lista
    else {
      setTaskCheckedList(taskCheckedList.filter((item) => item !== task));
    }
    setTaskChecked('');
  }

  return (
    <header>
      <form onSubmit={handleCreateNewTask}>
        <input placeholder='Adicione uma nova tarefa'
        name="task" onChange={handleNewTaskChange} value={newTask} required />
        <button type='submit'>Criar</button>
      </form>
      <div>
        <div>
          <h3>Tarefas criadas {tasks.length}</h3>
          <h3>Concluídas{' '}{taskCheckedList.length}de{' '}{tasks.length}</h3>
        </div>
        <div>
          {tasks.map((task) => {
            return (
              <div key={task}>              
                <input type="checkbox" value={task} onChange={() => checkedTask(task)}/>
                <div 
                  >
                  {task}
                  <button type="button" onClick={() => DeleteTask(task)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Form