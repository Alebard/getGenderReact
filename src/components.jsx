import React from "react";

export function Answer(props) {
    if (props.gender === null ) {
        return (
            <div>Неизвестное имя</div>
        )
    }else{
        return (
            props.gender
        )
    }
}


export function Form(props) {
    const isNotValidName = props.name && props.name.length < 3
    return(
        <form onSubmit={props.handleSubmit}>
            <input id="name" type="text" placeholder='введите имя'/>
            { isNotValidName && <div>"Некорректное имя"</div>}
            <button>Проверить имя</button>
        </form>
    )
}