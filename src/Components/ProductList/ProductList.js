import classes from "./ProductList.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductList({ products }) {
  const navigate = useNavigate();
  const [renderProducts, setRenderProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");

  const fetchSearch = async function () {
    console.log(searchInput.toLowerCase().replace(/\s/g, ""));
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}product/search/${searchInput
          .toLowerCase()
          .replace(/\s/g, "")}`
      );
      if (response.status !== 200) {
        window.alert("Something went wrong! Please refresh the page!!");
      }
      const data = await response.json();
      console.log(data);
      setRenderProducts(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const searchChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const submitSearchHandler = (event) => {
    event.preventDefault();
    fetchSearch();
  };

  const deleteById = (id) => {
    if (window.confirm("Are you sure ??") === true) {
      const sendDeleteRequest = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/admin/delete-hotel/${id}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                hotelId: id,
              }),
            }
          );
          // if (!response.ok) {
          //   throw new Error("Something Went Wrong!!!");
          // }
          const data = await response.json();

          window.alert(data.message);
          if (data.status === 422) {
            return;
          }
          if (data.status === 200) {
            navigate("/hotels");
          }
        } catch (err) {
          console.log(err);
        }
      };
      sendDeleteRequest();
    } else {
      return;
    }
  };

  return (
    <div className={classes.wrapperContent}>
      <div className={classes.headerList}>
        <h2>Products List</h2>
        <button
          className={classes.btnNew}
          onClick={() => {
            navigate("/add-product");
          }}
        >
          Add New
        </button>
      </div>
      <form className={classes.searchForm} onSubmit={submitSearchHandler}>
        <input
          placeholder="Search For Product"
          type="text"
          id="search"
          value={searchInput}
          onChange={searchChangeHandler}
          required
        ></input>
        <label htmlFor="search"></label>
        <button>Search</button>
      </form>

      <div className={classes.tableList}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderProducts &&
              renderProducts.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.count}</td>

                    <td>
                      <div style={{ display: "flex", gap: "7px" }}>
                        <button
                          // onClick={() => {
                          //   navigate(`/edit-hotel/${hotel._id}`);
                          // }}
                          className={classes.editBtn}
                        >
                          Edit
                        </button>
                        <button
                          // onClick={() => {
                          //   deleteById(hotel._id);
                          // }}
                          className={classes.deleteBtn}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
