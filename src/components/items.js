import EachItems from "./eachItem";

const Items = () => {
  const dummyData = [
    {
      src: "https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },

    {
      src: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
      price: "23.999",
    },
    {
      src: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },
    {
      src: "https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },

    {
      src: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
      price: "23.999",
    },
    {
      src: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },
    {
      src: "https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },

    {
      src: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
      price: "23.999",
    },
    {
      src: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL320_.jpg",
      name: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
      price: "24,999",
    },
  ];
  return (
    <div>
      {dummyData.map((item) => (
        <EachItems items={item} />
      ))}
    </div>
  );
};

export default Items;
