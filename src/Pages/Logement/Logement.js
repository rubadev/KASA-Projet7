import "./Logement.css";
import { useEffect } from "react";
import { Carousel, Collapse } from "../../Sections/index";
import { Tages, Rating } from "../../components/index1";
import { data } from "../../Data/data";
import { useParams, useNavigate } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  let navigate = useNavigate();
  useEffect(() => {
    if (logement === undefined) {
      navigate("404", { replace: true });
    }
  }, [id, logement, navigate]);

  if (logement === undefined) {
    return null;
  }

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="blocInfo">
        <div className="titleLocTag">
          <div className="titleLoc">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className="tags">
            <Tages tags={logement.tags} />
          </div>
        </div>
        <div className="ratingHost">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="" />
          </div>
          <div className="rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="logementCollapses">
        <div className="logCol">
          <Collapse titlle="Description" description={logement.description} />
        </div>
        <div className="logCol">
          <Collapse titlle="Equipments" equipments={logement.equipments} />
        </div>
      </div>
    </>
  );
};

export default Logement;
