import { CARD_IMG, CDN_URL } from "../utils/constants";

const CardComponent = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;
  return (
    <>
      <div className="card">
        <img
          className="card-data"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
        <h2 className="card-title">{name}</h2>
        <p className="card-cuisine">{cuisines?.join(", ") || "Cuisine Type"}</p>
        <p className="card-rating">Rating: {avgRating || "4.5"}</p>
        <p className="card-cost">{costForTwo}</p>
        <p className="card-delivery">Delivery Time: {sla?.deliveryTime} mins</p>
      </div>
    </>
  );
};

export default CardComponent;
