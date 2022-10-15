import {clientDatasource} from "../../datasource/exportDatasource";
import {Client} from "../../interfaces/exportinterfaces";

class ClientBusiness {
  getClientById = (idClient: string) => {
    return clientDatasource.getClientById(idClient);
  };

  getClients = () => {
    return clientDatasource.getClients();
  };

  createClients = (client: Client) => {
    return clientDatasource.createClients(client);
  };

  updateClients = (client: Client) => {
    const idClient = client.id;
    delete client.id; // está funcionando, apesar do erro de slint
    return clientDatasource.updateClients(idClient, client);
  };

  deleteClients = (idClient: string) => {
    return clientDatasource.deleteClients(idClient);
  };
}

export const clientBusiness = new ClientBusiness();
