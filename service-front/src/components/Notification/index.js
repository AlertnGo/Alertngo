import React  from "react";
import "./style.scss";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

function Notification(props) {
  return (
    <div className="notification">
      <p>{props.notif}</p>
      <p  className="close" onClick={props.unsetfunction}><HighlightOffOutlinedIcon/></p>
    </div>
  );
}
export default Notification;
