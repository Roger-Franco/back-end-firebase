/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
import * as admin from "firebase-admin";
// const db = admin.firestore();
const firestore = admin.firestore();

import {messageTreatmentBusiness} from "../../business/exportBusiness";
import {Client, MessageTreatment} from "../../interfaces/exportinterfaces";

/**
 * @class ClientDatasource
 * @classdesc Esta classe é responsável pro se comunicar com o banco de dados Firestore
 */
class ClientDatasource {
  /**
   * @name getClientById
   * @description busca um cliente por id informado
   * @param {String} idClient
   * @return {Promise<MessageTreatment>} MessageTreatment
   */
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

  updateClients = async (idClient: string, client: Client): Promise<MessageTreatment> => {
    const res = await firestore.collection("clients").doc(idClient).set(client);
    return messageTreatmentBusiness.successsMsg(`Cliente ${client.email} atualizado!`, res);
  };

  deleteClients = async (idClient: string): Promise<MessageTreatment> => {
    return firestore.collection("clients").doc(idClient).delete().then(() => {
      return messageTreatmentBusiness.successsMsg(`Cliente com o id: ${idClient} removido`);
    }).catch((error) => {
      return messageTreatmentBusiness.errorMsg("Falha ao buscar cliente, tente novamente", error);
    });
  };
}

export const clientDatasource = new ClientDatasource();
