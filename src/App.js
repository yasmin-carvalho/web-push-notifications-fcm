import React from 'react';
import firebase from './firebase';
import './App.css';

function App() {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })

  return (
    <div className="App">
      <h1>Push Notification FCM</h1>
    </div>
  );
}

export default App;
