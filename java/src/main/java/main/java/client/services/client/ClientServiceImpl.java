package main.java.client.services.client;

import main.java.client.classes.Client;
import main.java.client.repositories.ClientRepository;
import main.java.client.validator.attibutes.client.ClientAttributesValidate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;
    private final ClientAttributesValidate clientAttibutesValidate;

    public ClientServiceImpl(ClientRepository clientRepository, ClientAttributesValidate clientAttibutesValidate) {
        this.clientRepository = clientRepository;
        this.clientAttibutesValidate = clientAttibutesValidate;
    }


    @Override
    public List<Client> selectAllClients() {
        List<Client> clients = new ArrayList<>();
        clientRepository.findAll().forEach(clients::add);
        return clients;
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }

    @Override
    public List<String> addClient(Client client) {
        List<String> message = clientAttibutesValidate.validate(client);
        if (message.isEmpty()) {
            clientRepository.save(client
                    .toBuilder()
                    .name(client.getName())
                    .surname(client.getSurname())
                    .email(client.getEmail())
                    .build());
            message.add("create Client");
        }
        return message;
    }

    @Override
    public List<String> updateClient(Long id, Client client) {
        List<String> message = clientAttibutesValidate.validate(client);
        if (message.isEmpty()) {
            clientRepository.save(clientRepository.findClientById(id)
                    .toBuilder()
                    .name(client.getName())
                    .surname(client.getSurname())
                    .email(client.getEmail())
                    .build());
            message.add("update Client");
        }
        return message;
    }

    @Override
    public Client getClient(Long id) {
        Client client = clientRepository.findClientById(id);
        return client;
    }
}
