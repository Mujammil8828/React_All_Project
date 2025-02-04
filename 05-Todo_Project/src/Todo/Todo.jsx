import { useState } from "react";
import "./Todo .css";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useEffect } from "react";



export const Todo = () => {
    const [inputValue, setInputValue] = useState("");

    const todokey = "reactTodo"
    const [task, setTask] = useState(() => {
        const rawTodos = localStorage.getItem(todokey);
        if (!rawTodos) return [];

        return JSON.parse(rawTodos);
    });


    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue])

        setInputValue("");
    };



    // Todo Date and time 

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`)

        }, 1000);

        return () => clearInterval(interval);
    }, [])


    // Todo     Add the Data local Storage
    localStorage.setItem(todokey, JSON.stringify(task))

    //todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () => {
        setTask([]);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>

            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>

                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span className="curTask">{curTask}</span>

                                <button className="check-btn ">
                                    <IoMdCheckmark />
                                </button>

                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>
        </section>
    )
}