var React = require('react');
var ReactDOM = require('react-dom');

// Module requires
var ToDoItem = require('./todoItem');
var AddItem = require('./addItem');

//CSS requires
require('./css/index.css');

// Create component
var ToDoComponent = React.createClass({
    getInitialState: function(){
        return{
            todos: ['wash up', 'eat some cheese', 'take a nap','buy flowers']
        }
    }, // getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<ToDoItem item={item} key={index} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                < AddItem onAdd={this.onAdd} />
            </div>
        );
    }, // render

    // Custom Methods
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});

ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));