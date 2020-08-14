import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Main from '../src/Components/Main'
import Chat from '../src/Components/Chat'

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Main}/>
            <Route path ="/chat" component={Chat}/>
        </BrowserRouter>
    )
}

export default Routes;