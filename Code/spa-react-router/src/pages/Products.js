import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default ProductsPage;
