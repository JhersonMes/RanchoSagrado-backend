package com.rancho.service.implementation;

import java.util.List;

import com.rancho.model.Client;
import com.rancho.repository.IClientRepository;
import com.rancho.repository.IGenericRepository;
import com.rancho.service.IClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientService extends GenericService<Client, Integer> implements IClientService {
    private final IClientRepository repo;

    @Override
    public IGenericRepository<Client, Integer>

    getRepo() {
        return repo;
    }
}
