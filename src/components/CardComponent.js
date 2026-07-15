import { CARD_IMG } from "../utils/constants";

const CardComponent = () => {
  return (
    <>
      <div className="card">
        <img className="card-data" src={CARD_IMG} alt="Restaurant" />
        <h2 className="card-title">Restaurant Name</h2>
        <p className="card-cuisine">Cuisine Type</p>
        <p className="card-rating">Rating: 4.5</p>
      </div>
    </>
  );
};

export default CardComponent;
