import ReactDOM from "react-dom";
import React from "react";

// import HelloUser from "./js/container/HelloUser";
// import style from './css/style.css';

// ReactDOM.render(<HelloUser />, document.querySelector('#root'));

class Task extends React.Component {
    state = {
        edit: false
    };
    edit = () => {
        this.setState ({edit: true})
    };
    remove = () => {
        this.props.deleteBlock (this.props.index);
    };
    save = () => {
        this.props.update (this.refs.newTxt.value, this.props.index);
        this.setState ({edit: false})
    };
    rendNorm = () => {
        return (
            <div className="box">
              <div className="text">{this.props.children}</div>
              <button onClick={this.edit} className="btn light">Редактировать</button>
              <button onClick={this.remove} className="btn red">Удалить</button>
            </div> 
        );
    };
    rendEdit  = () => {
        return (
            <div className="box">
              <textarea ref="newTxt" defaultValue={this.props.children}></textarea>
              <button onClick={this.save} className="btn success">Сохранить</button>
            </div>  
        );
    };
    render  = () => {
        if (this.state.edit) {
            return this.rendEdit ();
        } else {
            return this.rendNorm ();
        }
    }
};
// let i = 0;
class Field extends React.Component {
    state = {
        tasks: []
    };
    
    add = (text) => {
        let arr = this.state.tasks;
        arr.push (text);
        this.setState ({tasks: arr});
    };
    deleteBlock = (i) => {
        let arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };
    updateText = (text, i) => {
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };
    eachTask = (item, i) => {
        return (
            <Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
              {item}
            </Task>  
        );
    };
    render = () => {
        return (
            <div className="field">
              <button onClick={this.add.bind (null, 'Простое задание')} className="btn new">Новое задание</button> 
              {this.state.tasks.map (this.eachTask)}
            </div> 
        );
    }
};

const app = document.querySelector("#root");

ReactDOM.render (<Field />, app)