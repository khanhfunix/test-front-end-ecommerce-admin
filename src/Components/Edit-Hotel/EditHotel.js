import { useState } from "react";
import classes from "./EditHotel.module.css";
import { Form } from "react-router-dom";

function EditHotel({ hotel }) {
  const [nameInput, setNameInput] = useState(hotel.name);
  const [typeInput, setTypeInput] = useState(hotel.type);
  const [cityInput, setCityInput] = useState(hotel.city);
  const [addressInput, setAddressInput] = useState(hotel.address);
  const [distanceInput, setDistanceInput] = useState(hotel.distance);
  const [titleInput, setTitleInput] = useState(hotel.name);
  const [descriptionInput, setDescriptionInput] = useState(hotel.desc);
  const [priceInput, setPriceInput] = useState(hotel.cheapestPrice);
  const [imagesInput, setImagesInput] = useState(hotel.photos.toString());
  const [featuredInput, setFeaturedInput] = useState(hotel.isFeatured);
  const [roomsInput, setRoomsInput] = useState(hotel.rooms.toString());
  const [ratingInput, setRatingInput] = useState(hotel.rating);
  console.log(hotel);
  return (
    <div className={classes.formWrapper}>
      <div className={classes.formContent}>
        <h2>Edit Hotel</h2>
      </div>
      <div className={classes.formContent}>
        <Form method="post">
          <div className={classes.form}>
            <div className={classes.input}>
              <p>Name</p>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name!!"
                value={nameInput}
                onChange={(event) => {
                  setNameInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Type</p>
              <input
                id="type"
                type="text"
                name="type"
                placeholder="Enter type!!"
                value={typeInput}
                onChange={(event) => {
                  setTypeInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>City</p>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter city!!"
                value={cityInput}
                onChange={(event) => {
                  setCityInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Address</p>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Enter address!!"
                value={addressInput}
                onChange={(event) => {
                  setAddressInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Distance From City Center</p>
              <input
                id="distance"
                type="text"
                name="distance"
                placeholder="Enter distance!!"
                value={distanceInput}
                onChange={(event) => {
                  setDistanceInput(event.target.value);
                }}
                min={0}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Title</p>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter title!!"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Description</p>
              <input
                id="description"
                type="text"
                name="description"
                placeholder="Enter description!!"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Price</p>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Enter price!!"
                value={priceInput}
                onChange={(event) => {
                  setPriceInput(event.target.value);
                }}
                min={0}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Images</p>
              <textarea
                cols="30"
                rows="3"
                id="images"
                type="text"
                name="images"
                placeholder="Enter images!!, add a commas betwwen url"
                value={imagesInput}
                onChange={(event) => {
                  setImagesInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Featured</p>
              <select
                id="isFeatured"
                name="isFeatured"
                value={featuredInput}
                onChange={(event) => {
                  setFeaturedInput(event.target.value);
                }}
                required
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className={classes.input}>
              <p>Rooms</p>
              <textarea
                cols="50"
                rows="5"
                id="rooms"
                type="text"
                name="rooms"
                placeholder="Enter rooms!! add a commas betwwen rooms"
                value={roomsInput}
                onChange={(event) => {
                  setRoomsInput(event.target.value);
                }}
                required
              />
            </div>
            <div className={classes.input}>
              <p>Rating</p>
              <input
                id="ratings"
                name="ratings"
                type="number"
                placeholder="Enter Ratings"
                value={ratingInput}
                onChange={(event) => {
                  setRatingInput(event.target.value);
                }}
                min={0}
                required
              />
            </div>
          </div>
          <button className={classes.btn}>EDIT</button>
        </Form>
      </div>
    </div>
  );
}

export default EditHotel;
