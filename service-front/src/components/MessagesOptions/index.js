import React, { useState, useEffect } from "react";
import { messagesServices } from "../../services";
import "./style.scss";
import { useHistory } from "react-router-dom";

//icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function MessagesOptions(props) {
  const [messages, setMessages] = useState([]);
  const [mymessages, setMymessages] = useState("");
  const [setError] = useState("");
  const PhoneNumber = localStorage.getItem("Number");
  const history = useHistory();
  useEffect(() => {
    const getMessages = async () => {
      try {
        const Messages = await messagesServices.getAll();
        setMessages(Messages.data.data);
      } catch (error) {
        if (error) {
          setError(error);
        }
      }
    };
    getMessages();
  }, [setError]);

  const allmessages = document.querySelectorAll(".message p");
  allmessages.forEach((element) => {
    if (element.innerHTML === mymessages) {
      element.parentElement.classList.add("selected");
    } else {
      element.parentElement.classList.remove("selected");
    }
  });

  const handleSelect = async (e) => {
    setMymessages(e.target.innerHTML);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(PhoneNumber + " sending......... " + mymessages);
    history.push("/sent");
  };

  return (
    <section className="messagesection">
      {messages.map((message, index) => (
        <div key={index} className="message" onClick={handleSelect}>
          <p>{message.message}</p>
          <div className={messages.class}></div>
        </div>
      ))}

      <button className="mainbutton" onClick={sendMessage}>
        <p>Envoyer</p>
        <SendRoundedIcon />
      </button>
    </section>
  );
}
export default MessagesOptions;
