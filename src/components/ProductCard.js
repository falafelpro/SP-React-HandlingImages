import { Button, Card, Col } from "react-bootstrap";
import productStore from "../stores/productStore";
import ProductModal from "./ProductModal";
import ProductModalUpdate from "./ProductModalUpdate";

function ProductCard({ product }) {
  const handleDelete = () => productStore.deleteProduct(product._id);
  console.log(product);
  const handleDuplicate = () => {
    delete product._id;
    productStore.createProduct(product);
  };

  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price} KD</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button className="m-1" onClick={handleDelete} variant="danger">
            DELETE
          </Button>
          <Button className="m-1" onClick={handleDuplicate} variant="warning">
            DUPLICATE
          </Button>
          <ProductModal oldProduct={product} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
