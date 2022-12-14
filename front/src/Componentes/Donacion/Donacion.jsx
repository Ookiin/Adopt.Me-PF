import React from "react";
import Footer from "../Footer/Footer";
import Metamask from "../Metamask/Metamask";
import NavBar from "../NavBar/NavBar";
import Paypal from "../Paypal/Paypal";
import Purchases from "../Paypal/Purchase";
import Purchases2 from "../Paypal/Purchase copy";
import Purchases3 from "../Paypal/Purchase copy 2";
// import App from "../Stripes/Stripe";
import stl from "./Donacion.module.css";
// import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from "../Stripes/Stripe";

// const stripePromise = loadStripe("pk_test_51M9wCWDFa6jLCwa92xpEczTJ20PPSzL6XTQmi8OZan1aNkHFGAv9A0AX7OJIw8wJf1Ru59PdJrRpGnnBvopiFK5T000lEuF7rB")


export default function Donar() {
    

    return (
        <div>
            <NavBar></NavBar>
            <div className={stl.pagina}>  
            
            <form className={stl.formulario}>

                <h3 className={stl.titulo}>Adopt.Me - Donaciones</h3>
           
           <div className={stl.datos}>

           </div>

           <div className={stl.metodosPago}>
            

                <div className={stl.botonmetamask}>
                <Metamask />
                </div>
                <br></br>
                <div>
                    <Purchases />
                </div>

                <div>
                    <Purchases2 /> 
                </div>

                <div>
                    <Purchases3 />
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
            <Footer></Footer>
        </div>
        
        
    )
}