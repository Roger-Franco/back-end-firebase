/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
const admin1 = require("firebase-admin");
// import * as admin from "firebase-admin";

// const serviceAccount = require("./config/backfirebase.json");
const serviceAccount = {
  type: "service_account",
  project_id: "back-end-firebase-54c3b",
  private_key_id: "a4c74b80e32a53aa040579941256e2fc2e4ed587",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdbr3Vl62URKBa\nDxdVucAzeM0tyYLp+feqaODU/vOI6TtzPpIA9C9S7Vaua6NrpufsVODukmls14/b\nfvdkVi0CkjSfnmNiv5TntuERGHS/1tkZQFFRhAI9Q3I5qTzNeqvtAVcho+AmJ1Uc\nlrhq4QCyE9kP82pNWmR+WMyOsx7u3owSc+7t5VmovBWHRVLbxo4WDV0ARUGfJe+7\n87NS1xUl/ArLv+DVTMrJ2WpXodmYNF2ic8Jlc7ZpBOACGEQ0FF6I7TTvL6BrvwfI\ntbbPL+a5+JdSPpQeDWgMnMJxKqFMHwODO6iEVv/DGvhaKV9layFkU5C8efsF7Vew\nOGoi00JbAgMBAAECggEATdKS41OYjMiFtsEhCV7sHurw6Yut9/+DPJ/5jMJB4zdd\nToaKF826KCID2e84kygo0JWQLCjG5proE1OPLPNghEvQNN0cvuLoOXu7pB99QMMI\nr+g77DNB+jgPGBbTqL/ZVsWm0sreh2pBbnfGPsHvVabGHeYF0UPYl9MrqWdokrh7\nDPdHGnbRKCKo7tNVJehART2fCJ/8idnWhltSwh0lPkCC+Ob3PbYRy+PsP8UG0Gdf\nyamppttwuJCL7UMI/bVlPdu455RNiLLh+lWn2vOWjwLSL4jhUmViinAYnNN/tOi5\n48OubM5B2/+uBK1VBBizSZn3jJ7NN/J98unw0VTh2QKBgQDywaXHze+4L3Aay0GP\nICge1oqZnphBhsiLNQrLgSo/ZJFbIEoItCy1pgYSsiXqsAWV9XlMYB08ke9Nsn2J\nNyF7V1Uadbrq9CB7q+YWxDD0EcSxGPCD8rjyXo88FU6JCGNngLW+xBkeUqIzvBqy\n46ZxEK9SAj1/xXp2gE0zeCnYlQKBgQDpg0iciomGO5SALkHwd04HxyGH1qfRt1p3\nJD+H1Ff7psoGF2epG4ralAHYBa1MG7fxFn6KxuVEuVbDfqQvoFmE6vZEmynwwH4N\nWXHT8NxdcxI+EZ1HGA+HQP2KqTcgrHiRrdXhNaigvTM/KWsBXHt8B5rDQAdPwJ/O\nOKrJLL/DLwKBgGQtf6FNncBvax7ThBFxXr0jIf01EnXwDjBMSlEi03Fnqghl8cdX\nux+XDOiINdd8nkF9FHptK4OEYbG5l86ZPqrspkUOEn3FEuaWUJRSkDUYZAgFV7PL\n5YC3fvp3fHpWSNc8qUO5HviBd0hMNuRdx6DfFsqL/B8POnNOjQ1RaEtlAoGAX98Z\nwcOTQPxXNOVJB0xESic0mgvEbPLlfoLwXnkNAnHxAd08Hw8CzEj2FNYH13aN57q/\ni4SrfrLFb5AgIrmn5018fKBj8MdnOV3ewRBjuS5UcA1VUGoNfg9tyS8+Rfjpq43+\ngO9B43SqhKUhnLZ2sG6C2OUB23mPYuCbJetsc9sCgYB0nMlQ/iRn56u2Xx57JMIl\n0aa4zFrEByKtKzwMQYPFtFgfRKx505wszwkHohWE3G1E6xjOKW38xj9RAdm68gT2\nJ6Q/spJjC9+arVjM//n1uc54DFtt0+8Mx/0lEkSFR8Mr0vyV88bF10n2YJsdPTV9\n3WM/DMyygXy9CKjrCsV9Cw==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-6be8e@back-end-firebase-54c3b.iam.gserviceaccount.com",
  client_id: "115213888049044291715",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6be8e%40back-end-firebase-54c3b.iam.gserviceaccount.com",
};
admin1.initializeApp({
  credential: admin1.credential.cert(serviceAccount),
  databaseURL: "https://back-end-firebase-54c3b.firebaseio.com",
});

import * as functions from "firebase-functions";
import * as express from "express";
// import * as admin from "firebase-admin";

import {clientController} from "./controller/exportController";


// APPS
const appApi = express();
const appClients = express();

// ROTA - API
appApi.get("/", function(req, res) {
  res.send(`STATUS: online ${new Date()}`);
});

// ROTA - CLIENTS
appClients.get("/:idClient", async (req, res) => {
  res.json(await clientController.getClientById(req.params.idClient));
});
appClients.route("/")
    .get((req, res) => {
      res.json(clientController.getClients());
    })
    .post(async (req, res) => {
      res.json(await clientController.createClients(req.body));
    })
    .put(async (req, res) => {
      res.json(await clientController.updateClients(req.body));
    })
    .delete(async (req, res) => {
      res.json(await clientController.deleteClients(req.body.id));
    });


// EXPORT APPS
exports.api = functions.https.onRequest(appApi);
exports.clients = functions.https.onRequest(appClients);


