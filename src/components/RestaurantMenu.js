import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaturantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("Restaurant ID from URL:", resId);

  const data = useRestaurantMenu(resId);
  console.log("Raw Restaurant Menu Response:", data);
  const cards = data?.data?.cards || [];
  const restaurantCard = cards.find((card) => {
    return card?.card?.card?.info?.name;
  });
  const restaurantMenu = restaurantCard?.card?.card?.info || null;
  console.log("Restaurant Menu Data:", restaurantMenu);
  const restaurantData = restaurantMenu || {};

  if (!restaurantData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="restaurant-menu">
      <img
        className="restaurant-menu-img"
        src={CDN_URL + restaurantData.cloudinaryImageId}
        alt={restaurantData.name}
      />
      <h1>{restaurantData.name}</h1>
      <p>{restaurantData.cuisines?.join(", ")}</p>
      <p>
        {restaurantData.avgRatingString} ({restaurantData.totalRatingsString})
        &middot; {restaurantData.costForTwoMessage}
      </p>
    </div>
  );
};
export default RestaurantMenu;
