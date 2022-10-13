import {clientDatasource} from "../../datasource/exportDatasource";
import {Client} from "../../interfaces/exportinterfaces";

class ClientBusiness {
  getClientById = (idClient: string) => {
    return clientDatasource.getClientById(idClient);
  };

  getClients = (): Client => {
    return clientDatasource.getClients();
  };

  postClients = () => {
    return clientDatasource.postClients();
  };

  putClients = () => {
    return clientDatasource.putClients();
  };

  deleteClients = () => {
    return clientDatasource.deleteClients();
  };
}

export const clientBusiness = new ClientBusiness();
