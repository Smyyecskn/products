import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ products }) => {
  const [buton, setButon] = useState(true);

  return (
    <Card
      style={{ backgroundColor: "dark" || "red" }}
      onClick={() => setButon(!buton)}
      className="dark rounded-2 m-auto card"
      role="button"
    >
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />

      <div key={products.id}>
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>
            <span>{products.price}$</span>
          </Card.Title>

          <MdFavorite size={30} />
        </Card.Header>
        <Card.Img variant="top" src={products.image} className="player-logo" />

        <Card.Footer className="card__over">
          <Card.Title>{product.title}</Card.Title>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default ProductCard;
