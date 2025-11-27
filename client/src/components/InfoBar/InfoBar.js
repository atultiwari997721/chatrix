import React from "react";

import onlineIcon from "../../icons/onlineIcon.svg";
import closeIcon from "../../icons/closeIcon.svg";

import "./InfoBar.css";

const InfoBar = ({ room, users = [] }) => {
  const total = users.length;
  const latest =
    total > 0
      ? users[total - 1].name || users[total - 1].username || users[total - 1]
      : null;

  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <div className="roomBlock">
          <div className="roomTitle">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
          </div>
          <div className="roomMeta">
            {latest ? (
              <span className="latest">
                Latest: <strong>{latest}</strong>
              </span>
            ) : (
              <span className="latest">No users yet</span>
            )}
            <span className="count">{total} online</span>
          </div>
        </div>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
