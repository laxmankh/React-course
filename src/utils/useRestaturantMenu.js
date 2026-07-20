import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  console.log("Restaurant ID from URL:", resId);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const response = await fetch(
        `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
      );
      const data = await response.json();
      setRestaurantData(data);
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  };
  return restaurantData;
};
export default useRestaurantMenu;
