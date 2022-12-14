import { useEffect, useState } from "react";
import "./Paypal.css";

export default function PayPal({ cost, desc }) {
  const [completed, setCompleted] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    window.paypal?.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: desc, 
                amount: {
                  currency_code: "USD",
                  value: 1 
                }
              }
            ]

          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          setCompleted(true);
          console.log(order);
        },
        onError: (err) => {
          setCompleted(true);
          console.error(err);
        }
      })
      .render("#paypal-button-container");
  }, [cost, desc]);

  return (
    <div className="Processing">
      Donar U$S 1
      <div id="paypal-button-container" /> 
      {completed &&
        (paid ? (
          
          <div>Gracias por su donacion!</div>
        ) : (
       
          <div>Ocurrio un error con su pago. Por favor verifique los datos</div>
        ))}
    </div>
  );
}