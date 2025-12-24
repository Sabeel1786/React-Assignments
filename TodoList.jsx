import React, { Component } from "react";
import style from "./todo.module.css";
import { FaTrash } from "react-icons/fa";


class TodoList extends Component {
    constructor() {
        super()
    }
    state = {
        inputValue: "",
        todoList: []
    }
    inputhandler = (event) => {
        const data = event.target.value
        this.setState({ inputValue: data })
    }
    DisplayList = () => {
        const data = this.state.inputValue
        this.setState({ todoList: [...this.state.todoList, data], inputValue: "" })
    }
    DeleteItem =(index)=>{
        const newList =[...this.state.todoList];
        newList.splice(index,1)
        this.setState({todoList:newList});

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-center">
                            <h1>TODO LIST</h1>
                            <div className="d-flex">
                                <input type="text" className="form-control" placeholder="Enter your Todo List here" onChange={this.inputhandler} value={this.state.inputValue} />
                                <button className="btn btn-primary m-2" type="submit" onClick={this.DisplayList}>Add</button>
                            </div>
                            <div className="FinalList">
                                {this.state.todoList.map((item,index)=>(
                                    <div key={index} className={style.cards}>
                                        <span>{item}</span>
                                        <FaTrash className={style.icon} onClick={()=>this.DeleteItem(index)}/>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>

                </div>

            </>
        )
    }
}
export default TodoList