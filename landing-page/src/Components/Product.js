// Importing react-bootstrap Card
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

// Product Component CSS styling
import "./Product.css";

// Product Component displaying product info
const Product = (props) => {
  return (
    <section className="productContainer">
      <Card className="productCard">
        <Card.Title className="productTitle">{props.name}</Card.Title>
        <Card.Img className="clothingPic" alt={props.name} src={props.clothingImage}></Card.Img>
        <Card.Body>
          <Card.Text className="productInfo"><b>Product Description: </b>{props.clothingPrice}</Card.Text>
          <p className="productInfo"><b>Score: </b>{props.clothingScore}</p>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Product;

