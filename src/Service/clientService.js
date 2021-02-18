import axios from "axios";
import urlAddress from "../Configuration/urlAddress";

import { ValidatorAdd } from "../Validator/ValidatorAdd";

const headers = {
  "Content-Type": "application/json",
};

const clientService = {
  add,
  edit,
};

function add(client) {
  axios
    .post(
      urlAddress.addClient,
      {
        name: client.name,
        surname: client.surname,
        email: client.email,
      },
      { headers: headers }
    )
    .then((res) => ValidatorAdd(res.data))
    .catch((er) => console.log(er));
}

function edit(client) {
  let numer_position_id = window.location.href.lastIndexOf("/edit/") + 6;
  let id = window.location.href.substring(numer_position_id);
  console.log(urlAddress.editClient + id);

  axios
    .post(
      urlAddress.editClient + id,
      {
        name: client.name,
        surname: client.surname,
        email: client.email,
      },
      { headers: headers }
    )
    .then((res) => ValidatorAdd(res.data))
    .catch((er) => console.log(er));
}

export default clientService;
