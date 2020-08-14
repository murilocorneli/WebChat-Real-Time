import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import './MainStyle.css'

const Main = ()=>{

    const [name, setName] = useState('');

    const history = useHistory();

    function HandleChat(e){
        e.preventDefault();
        if(name.trim()){
            localStorage.setItem('UserName', name);
            history.push('/chat')
        }

    }

    return(
        <div className="container-log">
            <div className="login">
                <form onSubmit={HandleChat}>
                    <h3>Seu nome:</h3>
                    <input value={name} onChange={e =>setName(e.target.value)} type="text"/>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Main;