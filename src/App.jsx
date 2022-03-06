import './App.css'
import ReactDOM from 'react-dom'
import React from "react";

const serverUrl = 'https://api.genderize.io';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "", gender: ""}

        this.setName = this.setName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Answer = this.Answer.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        const urlCheckGender = `${serverUrl}?name=${this.state.name}`
        const gender = (await fetch(urlCheckGender).then(response => response.json())).gender
        console.log(gender)
        this.setState({gender: gender});
    }


    setName(e) {
        this.setState({name: e.target.value});
    }


    Answer() {
        console.log(this.state.gender)
        if (this.state.gender === null ) {
            return (
                <div>Неизвестное имя</div>
            )
        }else{
            return (
                this.state.gender
            )
        }
    }

    render() {
        return (
            <div className="app">
                <form onSubmit={this.handleSubmit}>
                    <input id="name" type="text" placeholder='введите имя' onChange={this.setName}/>
                    {this.state.name && this.state.name.length < 3 && <div>"Некорректное имя"</div>}
                    <button>Проверить имя</button>
                </form>
                <this.Answer/>
            </div>
        )
    }
}


export default App
