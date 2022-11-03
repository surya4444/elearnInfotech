import "./eachItems.css";

const EachItems = (props) => {
  console.log(props.items.name);
  return (
    <div key={props.items.name} className="eachDiv">
      <img src={props.items.src} alt={props.items.name} />
      <p>{props.items.name}</p>
      <p>{props.items.price} Rs</p>
      <button>Buy</button>
    </div>
  );
};

export default EachItems;
