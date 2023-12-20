import { Form } from "react-router-dom";
import classes from "./AddProduct.module.css";

function AddProduct() {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.formContent}>
        <h2>Add New Product</h2>
      </div>
      <div className={classes.formContent}>
        <Form method="post" encType="multipart/form-data">
          <div className={classes.form}>
            <div className={classes.input}>
              <p>Name</p>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name !!"
                required
              />
            </div>
            <div className={classes.input}>
              <p>Category</p>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter category !!"
                required
              />
            </div>

            <div className={classes.input}>
              <p>Price</p>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Enter price !!"
                min={0}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Short Description</p>
              <input
                id="short_desc"
                type="text"
                name="short_desc"
                placeholder="Enter short_desc !!"
                required
              />
            </div>
            <div className={classes.input}>
              <p>Long Description</p>
              <input
                id="long_desc"
                type="text"
                name="long_desc"
                placeholder="Enter long_desc !!"
                required
              />
            </div>
            <div className={classes.input}>
              <p>Count</p>
              <input
                id="count"
                type="number"
                name="count"
                placeholder="Enter count !!"
                min={0}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Upload Images (5 images) </p>
              <input id="images" type="file" multiple name="images" required />
            </div>
          </div>
          <button className={classes.btn}>ADD HOTEL</button>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;
