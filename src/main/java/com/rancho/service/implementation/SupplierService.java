package com.rancho.service.implementation;

import com.rancho.model.Supplier;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.ISupplierRepository;
import com.rancho.service.ISupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SupplierService extends GenericService<Supplier, Integer> implements ISupplierService {

    private final ISupplierRepository repo;

    @Override
    public IGenericRepository<Supplier, Integer> getRepo() {
        return repo;
    }
}
