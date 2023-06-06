import React from "react";
import Mgolf from "../img/img2.jpg";
import Messages from "./Messages";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Mgolf} alt="" />
        <div className="userChatInfo">
          <span>Maigolf</span>
          <p>Hellowwww</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Mgolf} alt="" />
        <div className="userChatInfo">
          <span>Maigolf</span>
        </div>
      </div>
      <div className="userChat">
        <img src={Mgolf} alt="" />
        <div className="userChatInfo">
          <span>Maigolf</span>
        </div>
      </div>
    </div>
  );
};
export default Chats;
