import React from "react";
import Bimg from "../img/imgbilly.jpg";
const Message = () => {
  return (
  <div className="message owner">
    <div className="messageInfo">
      <img src={Bimg} alt="" />
      <span>Just Now</span>
    </div>
    <div className="messageContent">
      <p>This text can't </p>
      <img src={Bimg} alt="" />
    </div>
  </div>
)   
};
export default Message;
/*<img src={Vimg} alt="" /> */