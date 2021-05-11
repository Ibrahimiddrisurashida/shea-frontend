import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
import { CubeSpinner } from "react-spinners-kit";

function Products() {
  const { loading, products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <CubeSpinner size={40} color="#686769" />}
      {products.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESTINATION</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.destination}</td>
                <td>{product.email}</td>
                <td>{product.dob}</td>
                <td>
                  <FiDelete />
                  <FiEdit />
                  <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Products;
