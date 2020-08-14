import React, { useEffect , useState} from 'react';
import io from 'socket.io-client';
import uuid from 'uuid/v4';

const myId = uuid();
const socket= io('http://localhost:8080')
socket.on('connect', ()=>{
    console.log('[IO] Connect = A new Connection')
})

const Chat =()=>{


    const [message, updateMessage] = useState('');
    const [messages, updateMessages] =useState([])

    useEffect(()=>{
        const HandleNewMessage = newMessage =>
            updateMessages([...messages, newMessage])
            socket.on('chat.message', HandleNewMessage)

            return () => socket.off('chat.message', HandleNewMessage)
         
    }, [messages])

    function HandleMessage(e){
        updateMessage(e.target.value)
    }
    function HandleFormSubmit(e){
        e.preventDefault();

        if(message.trim()){
            socket.emit('chat.message', {
                id: myId,
                message
            })
            updateMessage('')
        }

    }

    return(
        <main className="container">
            <ul className="list">
                {messages.map((m, index)=>{
                    return(
                        <li key={index} className={`list__item list__item--${m.id===myId?'mine': 'other'}`}>
                        <span id="teste" className={`message message--${m.id===myId? 'mine': 'other'}` }>
                            {m.message}
                        </span>
                    </li>
                    )
                })}
            </ul>
            <form onSubmit={HandleFormSubmit}  className="form">
                <input value={message} type="text" onChange={HandleMessage}  placeholder="Type a new message here" className="form__field"/>
            </form>
        </main>
    )
}
export default Chat;