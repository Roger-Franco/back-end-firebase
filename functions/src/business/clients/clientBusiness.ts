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

  putClients = () => {
    return clientDatasource.putClients();
  };

  deleteClients = (idClient: string) => {
    return clientDatasource.deleteClients(idClient);
  };
}

export const clientBusiness = new ClientBusiness();
