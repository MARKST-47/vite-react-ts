import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setToDoCompleted(id: number, completed: boolean){
    alert(`Todo with id ${id} is now ${completed?"completed": "not completed"}`);
  }

  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center'>
        Your Todos
      </h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded p-5'>
        <div className='space-y-2'>
          {dummyData.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setToDoCompleted}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App;
