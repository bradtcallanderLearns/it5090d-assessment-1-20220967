import "./Product.css";

const Product = ({ id, name, image, price }) => {
  const handleClick = () => {
    alert("Product has been added to your cart!");
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="product-details-container">
        <h2>{name}</h2>
        <p>${price}</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
