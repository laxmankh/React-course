import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();
  console.log("Restaurant ID from URL:", resId);
  const FetchData = async () => {
    try {
      const response = await fetch(
        `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
      );
      const data = await response.json();
      console.log("Raw Restaurant Menu Response:", data);
      const cards = data?.data?.cards || [];
      const restaurantCard = cards.find((card) => {
        return card?.card?.card?.info?.name;
      });
      const restaurantMenu = restaurantCard?.card?.card?.info || null;
      console.log("Restaurant Menu Data:", restaurantMenu);
      setRestaurantData(restaurantMenu);
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  };
  useEffect(() => {
    FetchData();
  }, [resId]);

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
