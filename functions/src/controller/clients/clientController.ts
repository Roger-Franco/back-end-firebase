import {clientBusiness} from "../../business/exportBusiness";
import {Client} from "../../interfaces/exportinterfaces";

class ClientController {
  getClientById = (idClient: string) => {
    return clientBusiness.getClientById(idClient);
  };

  getClients = () => {
    return clientBusiness.getClients();
  };

  createClients = (client: Client) => {
    return clientBusiness.createClients(client);
  };

  putClients = () => {
    return clientBusiness.putClients();
  };

  deleteClients = (idClient: string) => {
    return clientBusiness.deleteClients(idClient);
  };
}

export const clientController = new ClientController();
