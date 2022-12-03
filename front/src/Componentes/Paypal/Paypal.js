import { useEffect, useRef } from "react";
import stl from "../Paypal/Paypal.module.css";

export default function Paypal() {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Donacion",
                            amount: {
                                currency_code: "USD",
                                value: 1
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                await alert ('SU DONACIÓN A SIDO REALIZADA CON EXITO')
                window.location.replace('/homepage')
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
      
            <div className={stl.botonpaypal} ref={paypal}></div>
        
    )
}