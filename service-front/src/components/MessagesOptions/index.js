import React, { useState } from "react";
import { messagesServices } from "../../services";
import "./style.scss";
import { useHistory } from "react-router-dom";

//icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function MessagesOptions() {
  const [mymessages, setMymessages] = useState("");
  const PhoneNumber = localStorage.getItem("Number");
  const history = useHistory();

  const messages = [
    {
      message:
        "Bonjour, je voudrais vous informer que votre voiture a été accidentée par quelqu'un.",
    },
    {
      message:
        "Bonjour, je voudrais vous informer que votre voiture bloque la route. ",
    },
    {
      message:
        "Bonjour, je voudrais vous informer que vous vous êtes garé sur la mauvaise place de parking, si vous pouvez venir vous garer quelque part, s'il vous plaît.",
    },
    {
      message:
        "Bonjour, je voudrais vous informer que quelqu'un essaie de voler votre voiture.",
    },
  ];

  const allmessages = document.querySelectorAll(".message p");
  allmessages.forEach((element) => {
    if (element.innerHTML === mymessages) {
      element.parentElement.classList.add("selected");
    } else {
      element.parentElement.classList.remove("selected");
    }
  });

  const handleSelect = async (e) => {
    setMymessages(e.target.innerText);
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
        <SendRoundedIcon />
        <p>Envoyer</p>
      </button>
    </section>
  );
}
export default MessagesOptions;
