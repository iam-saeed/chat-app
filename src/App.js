import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';

import './App.css';
import LoginForm from './components/LoginForm.jsx';


const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine 
            height="100vh"
            projectID="fff7ada8-a9f0-449d-928b-c1ceeba84ab9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  { ...chatAppProps } /> }
        />
    )
}

export default App;