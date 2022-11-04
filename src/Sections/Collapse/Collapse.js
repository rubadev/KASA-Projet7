import "./Collapse.css";
import { useState } from "react";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";

const Collapse = (props) => {
    const [isOpen,setIsOpen] = useState(true)
  return (

        <div className="item">
        <div className="itemTitlle" onClick={()=>{setIsOpen(!isOpen)}} >
            <h2>{props.titlle}</h2>
            <span style={{"color" : '#fff'}}>{isOpen ? <FaAngleUp/> : <FaAngleDown/>}</span>
        </div>
        <div className={isOpen? 'itemDescription': 'itemDescriptionNon'}>{props.description}</div>
        </div>
  );
};

export default Collapse;
