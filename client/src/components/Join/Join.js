
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const roomParam = searchParams.get('room');
    const nameParam = searchParams.get('name');

    if (roomParam) setRoom(roomParam);
    if (nameParam) setName(nameParam);
  }, [location]);

  const copyLink = () => {
    if (!room) {
        alert("Please enter a room name first!");
        return;
    }
    const link = `${window.location.origin}/#/join?room=${room}`;
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied to clipboard!");
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" value={room} onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
        <button className={'button mt-20'} style={{backgroundColor: '#2979FF'}} onClick={copyLink}>Share Link</button>
      </div>
    </div>
  );
}
