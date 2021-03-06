// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as toDoActions from '../actions/todo_actions';

// Components
import ViewToDos from './view_todos';
import CreateToDo from './create_todo';

class Main extends React.Component {

    render() {
        return (
            <div>
                
                <CreateToDo />
                <ViewToDos />

            </div>

        )
    }
}

export default Main;