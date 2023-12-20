import classes from "./ResponseBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-router-dom";

function ResponseBox() {
  return (
    <div className={classes.responseBox}>
      <Form className={classes.formChat}>
        <input id="adminChat" name="adminChat"></input>
        <label htmlFor="adminChat" />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#005eff" }} />
        </button>
      </Form>
    </div>
  );
}

export default ResponseBox;
