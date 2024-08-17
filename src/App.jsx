import React from 'react'
import Todo from './components/Todo';
import img from './assets/pexels.jpg'
const App = () => {
  return (
    <div className='bg-[url("./assets/pexels.jpg")] bg-cover grid py-4 h-screen'>
       <Todo></Todo>
    </div>
  )
}

export default App;