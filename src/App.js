import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div>
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Friday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        </div>
        <div className="todos">

          {
            toDos.map((value) => {
              return (
                <div className="todo">
                  <div className="left">
                    <input onChange={(e) => {
                      setToDos(toDos.filter(obj => {
                        if (obj.id == value.id) {
                          obj.status = e.target.checked
                        }
                        return obj
                      }))
                    }} value={value.status} type="checkbox" name="" id="" />
                    <p>{value.text}</p>
                  </div>
                  <div className="right">
                    <i onClick={(e) => {
                      setToDos(toDos.filter(obj1 => {
                        if (obj1.id != value.id) {
                          return obj1
                        }
                      }))
                    }} className="fas fa-times"></i>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (
                <h1>{obj.text}</h1>
              )
            }
            return null
          })
        }
    </div>
  );
}

export default App;