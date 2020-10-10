const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(
  'sk_test_51HaZTLAIyAl0abbvs2Tby33cuExoFbBorSmJn98ZbJNx0xNEFxnUsTqAN0gL407d65zdfMXRwKn63mnPGuIHyjgH00ZYJCUSk3'
);

// API

// APP config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => {
  response.status(200).send('Hello Papijuancho!');
});

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment request total >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-f3966/us-central1/api
