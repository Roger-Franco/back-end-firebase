/* eslint-disable max-len */
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
    // const idClient = client.id;
    // delete client.id; // não vai ser possível deletar o id dessa forma por causa do typescript
    return clientDatasource.updateClients(client.id, client);
  };

  deleteClients = (idClient: string) => {
    return clientDatasource.deleteClients(idClient);
  };
}

export const clientBusiness = new ClientBusiness();
