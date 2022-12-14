import "./Carousel.css";
import { data } from "../../Data/data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const { id } = useParams();
  const [curentImg, setCurentImg] = useState(0);
  const logement = data.find((logement) => logement.id === id);
  const pictures = logement.pictures;
  
  
  function setNextImg() {
    if (curentImg + 1 > pictures.length - 1) {
      setCurentImg(0);
    } else {
      setCurentImg(curentImg + 1);
    }
  }
  function setPrevImg() {
    if (curentImg - 1 < 0) {
      setCurentImg(pictures.length - 1);
    } else {
      setCurentImg(curentImg - 1);
    }
  }

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${pictures[curentImg]})` }}
      >
        {pictures.length >1 ? <div
          className="left"
          onClick={() => {
            setPrevImg();
          }}
        >
          <AiOutlineLeft style={{ fontSize: 60 }} />
        </div> : <div
          className="left"
        >
          <AiOutlineLeft style={{ display : "none"}} />
        </div>}
        <div className="center">{`${curentImg + 1}/${pictures.length}`}</div>
        {pictures.length >1 ? <div
          className="right"
          onClick={() => {
            setNextImg();
          }}
        >
          <AiOutlineRight style={{ fontSize: 60 }} />
        </div>: <div
          className="right"
        >
          <AiOutlineRight style={{ display : "none"}} />
        </div>}
      </div>
    </div>
  );
};

export default Carousel;
