import React, { useRef } from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Small timeout to allow mobile keyboard to open before scrolling
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  return (
    <form className="form">
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onFocus={handleFocus}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
