import * as admin from "firebase-admin";
// const db = admin.firestore();
const firestore = admin.firestore();

import {messageTreatmentBusiness} from "../../business/exportBusiness";
import {Client, MessageTreatment} from "../../interfaces/exportinterfaces";

class ClientDatasource {
  getClientById = (idClient: string) => {
    return {name: `Roger get -  id: ${idClient}`};
  };

  getClients = (): Client | MessageTreatment => {
    const client: Client = {id: "1", name: "Roger", email: "roger@roger.com",
      success: true};
    return messageTreatmentBusiness
        .successsMsg("Alguns clientes foram encontrados", client);
  };

  createClients = (client: Client): MessageTreatment => {
    // Add a new document in collection "clients"
    const res = firestore.collection("clients").doc().set(client);
    return messageTreatmentBusiness.successsMsg("Cliente adicionado!", res);
  };

  putClients = () => {
    return {name: "Roger put"};
  };

  deleteClients = () => {
    return {name: "Roger delete"};
  };
}

export const clientDatasource = new ClientDatasource();
