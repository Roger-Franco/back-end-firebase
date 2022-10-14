import {clientBusiness} from "../../business/exportBusiness";
// import {Client} from "../../interfaces/exportinterfaces";

class ClientController {
  getClientById = (idClient: string) => {
    return clientBusiness.getClientById(idClient);
  };

  getClients = () => {
    return clientBusiness.getClients();
  };

  postClients = () => {
    return clientBusiness.postClients();
  };

  putClients = () => {
    return clientBusiness.putClients();
  };

  deleteClients = () => {
    return clientBusiness.deleteClients();
  };
}

export const clientController = new ClientController();
