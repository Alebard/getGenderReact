import './App.css'
import React from "react";
import {Answer, Form} from "./components"

const serverUrl = 'https://api.genderize.io';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "", gender: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const name = e.target[0].value;
        const urlCheckGender = `${serverUrl}?name=${name}`
        const gender = (await fetch(urlCheckGender).then(response => response.json())).gender
        this.setState({name: name});
        this.setState({gender: gender});

    }


    render() {
        return (
            <div className="app">
                <Form handleSubmit = {this.handleSubmit} setName = {this.setName} name = {this.state.name} />
                <Answer gender = {this.state.gender}/>
            </div>
        )
    }
}

export default App
