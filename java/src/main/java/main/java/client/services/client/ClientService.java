package main.java.client.services.client;

import main.java.client.classes.Client;

import java.util.List;

public interface ClientService {
    List<Client> selectAllClients();

    void deleteClient(Long id);

    List<String> addClient(Client client);

    List<String> updateClient(Long id, Client client);

    Client getClient(Long id);

}
