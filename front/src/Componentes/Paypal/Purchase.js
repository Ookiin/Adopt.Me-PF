import React, { useState } from "react";
import PayPal from "../Paypal/Paypal";
import stl from "../Paypal/Purchase.module.css";

const Purchases = () => {
  const [state, setState] = useState({
    cost: 5.0,
    checkout: false,
    desc: "Test"
  });

  const renderCard = (title, desc, cost) => {
    return (
      <div >
        <div>
          <div >
            {title}
          </div>
        </div>
        <div>
          <button className={stl.botonespaypal}
            onClick={() =>
              setState({
                cost,
                desc,
                checkout: true
              })
            }
            color="primary"
          >
            Donar
          </button>
        </div>

      </div>
    );
  };


  return (
    <div >
      {state.checkout ? (
        <div>
          <div>Checkout</div>
          <div >
            {state.desc}: ${state.cost} USD
          </div>
          <button className={stl.botonespaypal}
            onClick={() => setState((prev) => ({ ...prev, checkout: false }))}
          >
            Cambiar Donacion
          </button>
          <PayPal cost={state.cost} desc={state.desc} />
        </div>
      ) : (
        <div >
          {renderCard("U$S 1", 1)}
          {renderCard("U$S 5", 5)}
          {renderCard("U$S 10", 10)}
        </div>
      )}
    </div>
  );
};
export default Purchases;