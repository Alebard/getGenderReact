import './App.css'
import ReactDOM from 'react-dom'


const serverUrl = 'https://api.genderize.io';


function Input() {
    return <input id="name" type="text" placeholder='введите дату'/>
}

function Button() {
    return <button>Проверить имя</button>
}
function Output(props) {
    return <div>{props.gender}</div>
}

function ErrorMessage() {
    return <p>Неверное имя</p>
}


function App(props) {
    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <Input/>
                {props.name && props.name.length < 3 && <ErrorMessage />}
                <Button/>
            </form>
            {props.gender && <Output gender = {props.gender}/> }
        </div>
    )
}


async function handleSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("input").value
    const gender = (await getGender(name)).gender;
    const element = (
            <App  gender = {gender}  name = {name} />
    )
    ReactDOM.render(element, document.getElementById('root'));
}

async function getGender(name) {
    const urlCheckGender = `${serverUrl}?name=${name}`
    const response = await fetch(urlCheckGender)
    return await response.json()
}

export default App
