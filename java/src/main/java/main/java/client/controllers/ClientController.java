package main.java.client.controllers;

import main.java.client.classes.Client;
import main.java.client.services.client.ClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ClientController {
    private final ClientService clientServiceInt;

    public ClientController(ClientService clientServiceInt) {
        this.clientServiceInt = clientServiceInt;
    }


    @GetMapping("/getAllClients")
    public List<Client> selectAllClients() {
        return clientServiceInt.selectAllClients();
    }

    @GetMapping("/getClient/{id}")
    public Client getClient(@PathVariable Long id){
        return clientServiceInt.getClient(id);
    }

    @DeleteMapping("/deleteClient/{id}")
    public ResponseEntity<String> deleteClient(@PathVariable Long id) {
        clientServiceInt.deleteClient(id);
        return ResponseEntity.ok("Client is removed");
    }

    @PostMapping("/createClient")
    public List<String> addClient(@Valid @RequestBody Client client) {
        return clientServiceInt.addClient(client);
    }

    @PostMapping ("/updateClient/{id}")
    public List<String> updateClient(@PathVariable Long id, @RequestBody Client client) {
        return clientServiceInt.updateClient(id, client);
    }



}
