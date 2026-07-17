import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const BodyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );
      const data = await response.json();
      const restaurants =
        data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log("Fetched Restaurants bodycomponent:", restaurants);
      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {console.log("rendering body component")}
      <div className="body">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
              const filteredRestaurants = restaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(text.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          />
          <div className="filter-bar">
            <div className="rating">
              <button
                className="filter-btn"
                onClick={() => {
                  const filteredRestaurants = restaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4,
                  );
                  console.log("Filtered Restaurants:", filteredRestaurants);
                  setFilteredRestaurants(filteredRestaurants);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
        </div>
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <CardComponent key={restaurant.info.id} resData={restaurant.info} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BodyComponent;
