import {Client} from "../../interfaces/exportinterfaces";

class ClientDatasource {
  getClientById = (idClient: string) => {
    return {name: `Roger get -  id: ${idClient}`};
  };

  getClients = (): Client => {
    const client: Client = {id: "1", name: "Roger", email: "roger@roger.com",
      success: true};
    return client;
  };

  postClients = () => {
    return {name: "Roger post"};
  };

  putClients = () => {
    return {name: "Roger put"};
  };

  deleteClients = () => {
    return {name: "Roger delete"};
  };
}

export const clientDatasource = new ClientDatasource();
