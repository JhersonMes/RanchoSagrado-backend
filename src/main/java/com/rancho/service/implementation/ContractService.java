package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Contract;
import com.rancho.repository.IContractRepository;
import com.rancho.repository.IGenericRepository;
import com.rancho.service.IContractService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContractService extends GenericService<Contract, Integer> implements IContractService {

    private final IContractRepository repo;

    @Override
    public IGenericRepository<Contract, Integer> getRepo() {
        return repo;
    }
}
