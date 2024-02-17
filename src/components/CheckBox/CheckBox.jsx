import Form from "react-bootstrap/Form";
import styles from "./CheckBox.module.css";

function CheckBox({ propsChangeFunction, opzione1, opzione2 }) {
  return (
    <Form.Select
      className={styles.form}
      onChange={(event) => {
        propsChangeFunction(event.target.value);
      }}
      aria-label="Default select example"
    >
      <option value={opzione1}>{opzione1}</option>
      <option value={opzione2}>{opzione2}</option>
    </Form.Select>
  );
}

export default CheckBox;
