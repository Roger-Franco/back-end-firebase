class ClientBusiness {
  getClientById = (idClient: string) => {
    return {name: `Roger get -  id: ${idClient}`};
  };

  getClients = () => {
    return {name: "Roger get"};
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

export const clientBusiness = new ClientBusiness();
