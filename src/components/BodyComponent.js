import CardComponent from "./CardComponent";

const BodyComponent = () => {
  return (
    <>
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="restaurant-list">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
};
export default BodyComponent;
