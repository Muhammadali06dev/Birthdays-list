import data from './data/db'
import List from "./components/List"
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data)

  //Delete
  function handleDelete(id) {
    setPeople(prev => prev.filter(person => person.id !== id))

  }
  return (
    <div className='container'>
      <h1>{people ? people.length : 0} birthdays today</h1>
      <List people={people} handleDelete={handleDelete} />
      {people.length ? <button onClick={() => setPeople([])} className='clear-btn'>Clear All</button> : <button onClick={() => setPeople(data)} className='refresh-btn'>Refresh</button>}
      {/* {!people.length ? <button onClick={() => setPeople(data)} className='refresh-btn'>Refresh</button> : ""} */}
    </div>
  )
}

export default App
