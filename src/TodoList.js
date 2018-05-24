import React from 'react';
import './App.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className="mensages">
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default TodoList;
