import * as functions from "firebase-functions";
import * as express from "express";

import {clientController} from "./controller/exportController";

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


