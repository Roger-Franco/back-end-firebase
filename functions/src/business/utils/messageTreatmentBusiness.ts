import {MessageTreatment} from "../../interfaces/exportinterfaces";

class MessageTreatmentBusiness {
  successsMsg = (message: string, response?: any): MessageTreatment => {
    const _message: MessageTreatment = {message: `Sucesso: ${message}`,
      status: 200, response: response};
    console.log(_message);
    return _message;
  };

  infoMsg = (message: string, info?: any) => {
    const _message: MessageTreatment = {message: `Info: ${message}`,
      status: 250, response: info};
    console.log(_message);
    return _message;
  };

  errorMsg = (message: string, error?: any) => {
    const _message: MessageTreatment = {message: `Error: ${message}`,
      status: 400, response: error};
    console.log(_message);
    return _message;
  };
}

export const messageTreatmentBusiness = new MessageTreatmentBusiness();
