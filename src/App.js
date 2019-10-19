import React, { Component } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

class App extends Component {

    state = {
        todos: [
            { id: 1, description: 'Task 1' },
            { id: 2, description: 'Task 2' }
        ]
    }

    handleDelete = (id) => {
        const todos = this.state.todos.slice();
        const index = todos.findIndex(function(todos) {
            return todos.id === id;
        });

        todos.splice(index, 1);
        this.setState({ todos: todos });

    }

    handleAdd = (todo) => {
        const todos = [...this.state.todos];
        todos.push(todo);
    
        this.setState({ todos: todos });
    };

    render(){
        return (
            <div className="container">
                <h2 className="text-center my-4">React To-do List</h2>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} id={todo.id} description={todo.description} onDelete={this.handleDelete} />
                ))}
                <Form onAddTask={this.handleAdd} />
            </div>
      );
    }
}

export default App;
