import "./TittleImage.css";


const TittleImage = (props) => {
  return (
    <div className="containerTittle">
      <div className="tittle">
        <img src={props.img} alt="" />
        <div className="textDiv">
          {props.text ? <p className="text">{props.text}</p> : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default TittleImage;
