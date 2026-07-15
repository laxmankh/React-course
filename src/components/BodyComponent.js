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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
      );
      const data = await response.json();
      setRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
      );
      setFilteredRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
      );
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
