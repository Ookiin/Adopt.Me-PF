import { useEffect, useState } from "react";
// import stl from "../Paypal/Paypal.module.css";


// export default function Paypal() {

//     const paypal = useRef();

//     useEffect(() => {
//         window.paypal.Buttons({
//             createOrder: (data, actions, err) => {
//                 return actions.order.create({
//                     intent: "CAPTURE",
//                     purchase_units: [
//                         {
//                             description: "Donacion",
//                             amount: {
//                                 currency_code: "USD",
//                                 value: 5
//                             }
//                         }
//                     ]
//                 })
//             },
//             onApprove: async (data, actions) => {
//                 const order = await actions.order.capture()
//                 console.log(order)
//                 await alert ('SU DONACIÓN A SIDO REALIZADA CON EXITO')
//                 window.location.replace('/homepage')
//             },
//             onError: (err) => {
//                 console.log(err)
//             }
//         }).render(paypal.current)
//     }, [])

//     return (
//         <div>
//             <div className={stl.botonpaypal} ref={paypal}></div>
//         </div>
//     )
// }

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