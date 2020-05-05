import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {Link } from "react-router-dom";
import TasksDataService from './templates/taks.services'

class List extends Component {
    constructor() {
      super();
      this.state = { tasks: [] };
    }
    
    componentDidMount() {
        this.retrieveTutorials();
      }
  
    retrieveTutorials() {
        TasksDataService.getAll()
          .then(response => {
            console.log(response.data);
            this.setState({
              tasks: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      
    render() {
      let i = 1;
      let tasks = this.state.tasks.map((task) => {
        return (
          <tr key={task._id}>
            <td>{i++}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.taskDate}</td>
            <td>
              <button className="edit">Edit</button>
            <Link to={`/delete/${task._id}`} >
            <button className="delete">Delete</button>
            </Link>
            <Link to={`/task/${task._id}`} >
            <button className="delete">Info</button>
            </Link>
             
            </td>
          </tr>
        );
      });
  
      return (
        
        <div className="App Container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Task Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{tasks}</tbody>
          </table>
            <div className="add-btn">
                <Link to="/add">Add new task</Link>
            </div>
          
        </div>
      );
    }
  }
  export default List;
  