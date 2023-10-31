import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
// import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  // const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitFormHandler = (event)=>{
    event.preventDefault();

    //Lean approach
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);


    //Not lean approach
    // const quantity = document.getElementById(`amount_${props.id}`).value;
    // cartCtx.addItem({...props.item, quantity: quantity});
  }
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input    
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
