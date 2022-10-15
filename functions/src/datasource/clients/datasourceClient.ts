/* eslint-disable max-len */
import * as admin from "firebase-admin";
// const db = admin.firestore();
const firestore = admin.firestore();

import {messageTreatmentBusiness} from "../../business/exportBusiness";
import {Client, MessageTreatment} from "../../interfaces/exportinterfaces";

class ClientDatasource {
  getClientById = async (idClient: string): Promise<MessageTreatment> => {
    const collection = await firestore.collection("clients").doc(idClient);
    return await collection.get()
        .then(async (result) => {
          return await messageTreatmentBusiness.successsMsg("Cliente encontrado", result.data());
        })
        .catch((error) => {
          return messageTreatmentBusiness.errorMsg("Falha ao buscar cliente, tente novamente", error);
        });
  };

  getClients = (): Client | MessageTreatment => {
    const client: Client = {id: "1", name: "Roger", email: "roger@roger.com",
      success: true};
    return messageTreatmentBusiness
        .successsMsg("Alguns clientes foram encontrados", client);
  };

  createClients = async (client: Client): Promise<MessageTreatment> => {
    // Add a new document in collection "clients"
    const res = await firestore.collection("clients").doc().set(client);
    return messageTreatmentBusiness.successsMsg(`Cliente ${client.email} adicionado!`, res);
  };

  putClients = () => {
    return {name: "Roger put"};
  };

  deleteClients = () => {
    return {name: "Roger delete"};
  };
}

export const clientDatasource = new ClientDatasource();
