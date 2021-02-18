package main.java.client.repositories;

import main.java.client.classes.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
    Client findClientById(Long id);
}
