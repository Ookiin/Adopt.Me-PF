import React from "react";
import Metamask from "../Metamask/Metamask";
import Paypal from "../Paypal/Paypal";
// import App from "../Stripes/Stripe";
import stl from "./Donacion.module.css";
// import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from "../Stripes/Stripe";

// const stripePromise = loadStripe("pk_test_51M9wCWDFa6jLCwa92xpEczTJ20PPSzL6XTQmi8OZan1aNkHFGAv9A0AX7OJIw8wJf1Ru59PdJrRpGnnBvopiFK5T000lEuF7rB")


export default function Donar() {
    
    // const [checkout, setCheckOut] = useState(false)

    return (

        <div className={stl.pagina}>  

            <form className={stl.formulario}>

                <h3 className={stl.titulo}>Adopt.Me - Donaciones</h3>
           
           <div className={stl.datos}>

               <label>Nombre:</label>
               <input placeholder="Nombre"></input>

               <label>Apellido:</label>
               <input placeholder="Apellido"></input>

               <label>Email:</label>
               <input placeholder="Email"></input>

               <label>Donar a:
                <select className={stl.opcionesDonacion}>
                    <option>El Arca de Noé (Cba)</option>
                    <option>Adopteros Argentina (Bs.As)</option>
                    <option>El Campito Refugio (Bs.As)</option>                    
                </select>
               </label>

           </div>

           <div className={stl.metodosPago}>
                
                <div className={stl.botonpaypal}>
                <Paypal />
                </div>

                <div className={stl.botonmetamask}>
                <Metamask />
                </div>

                {/* <div className={stl.botonstripes}>
                <Elements stripe={stripePromise}>
       <div >
         <div >
           <div >
       <CheckoutForm />
           </div>
         </div>
       </div>    
       </Elements>
                </div> */}

        </div>
        
       </form>
        </div>
        
    )
}