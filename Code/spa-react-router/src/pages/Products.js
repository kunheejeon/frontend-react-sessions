import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>The Products page</h1>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default ProductsPage;
