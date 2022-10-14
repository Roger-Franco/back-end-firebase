/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
import * as functions from "firebase-functions";
import * as express from "express";


import {clientController} from "./controller/exportController";

const admin = require("firebase-admin");
const serviceAccount = require("./config/backfirebase.json");
// não esta encontrando o arquivo acima
// https://www.youtube.com/watch?v=KCYbGzACqO0&list=PLWOeg0VagJCQTPCtLXrMm2RM4OtpUOy_S&index=10&ab_channel=GuilhermedeSouzaSilveira
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://back-end-firebase-54c3b.firebaseio.com",
});

// APPS
const appApi = express();
const appClients = express();

// ROTA - API
appApi.get("/", function(req, res) {
  res.send(`STATUS: online ${new Date()}`);
});

// ROTA - CLIENTS
appClients.get("/:idClient", (req, res) => {
  res.json(clientController.getClientById(req.params.idClient));
});
appClients.route("/")
    .get((req, res) => {
      res.json(clientController.getClients());
    })
    .post((req, res) => {
      res.json(clientController.postClients());
    })
    .put((req, res) => {
      res.json(clientController.putClients());
    })
    .delete((req, res) => {
      res.json(clientController.deleteClients());
    });


// EXPORT APPS
exports.api = functions.https.onRequest(appApi);
exports.clients = functions.https.onRequest(appClients);


