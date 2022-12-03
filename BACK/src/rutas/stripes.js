// const express = require('express')
// const Stripe = require('stripe')
// const stripe = new Stripe("sk_test_51M9wCWDFa6jLCwa9MZXEbHmyUy2Jw6LfVGcx5m8mb2yEyI6S64nrpgQrsQ9AUfhoDIiz2stAkQNaxZJ8U2GsLXJk00Q2TjSi5r")


// app.post('/payment', async (req, res) => {
            
//     try {
//         const { id, amount } = req.body

    
//         const payment = await stripe.paymentIntents.create({
//             amount,
//             currency: "USD",
//             description: "",
//             payment_method: id,
//             confirm: true
//         });

//         console.log(payment);
    
//     res.send({messahe: 'Successfull payment'})
//     } catch (error) {
//         console.log(error);
//         res.json({ message: error.raw.message })
//     }
// })