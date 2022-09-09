import React, {useCallback, useEffect, useMemo, useState} from 'react'

function AppUseState() {
  
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        //similar ao componentDidMount
        const tasksStorage = localStorage.getItem('tasks');
        if (tasksStorage){
            setTasks( JSON.parse( tasksStorage));
        }


        //este codigo abaixo ira rodar como sendo o componentWillAmount
        return() =>{

        }

    }, []);

    useEffect(() => {
        //similar ao componentDidUpdate
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleTask(e){
        setTask(e.target.value)
    }

    //useCallback, evita que as funcoes fiquem sendo recriadas a todo momento
    //para isso, nao pode mais ser uma funcao, tem que ser uma const
    //só é recriada a funcao quando as states no array sao alteradas
    const addTask = useCallback (() => {
        setTasks([...tasks, task])
        setTask('')
    }, [task, tasks])

    //useMemo
    const totalTasks = useMemo(() => 
        tasks.length, [tasks]);

    return (
    <div>
        <h1>UseState, UseEffect, UseMemo, UseCallBack</h1>
        <h3>tarefas</h3>
        <ul>
            {tasks.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <input type='text' value={task} onChange={handleTask}></input>
        <button type='button' onClick={addTask}>Adicionar tarefa</button>

        <strong>Voce tem: {totalTasks} tarefas</strong>
        
    </div>
  )
}

export default AppUseState