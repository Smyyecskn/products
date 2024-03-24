import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products } from "../../helper/data";
import { Header } from "../header/Header";

const ProductsList = ({ categories }) => {
  return (
    <>
      <Header />
      <ul className="d-flex justify-content-center align-items-center gap-4">
        {categories.map((category, i) => {
          return (
            <div key={i}>
              <h5>{category}</h5>
            </div>
          );
        })}
      </ul>

      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {products.map((product, id) => {
            return <ProductCard key={id} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
