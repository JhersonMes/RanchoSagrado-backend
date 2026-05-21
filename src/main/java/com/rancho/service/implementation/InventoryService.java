package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Inventory;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IInventoryRepository;
import com.rancho.service.IInventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InventoryService extends GenericService<Inventory, Integer> implements IInventoryService {
    private final IInventoryRepository repo;

    @Override
    public IGenericRepository<Inventory, Integer> getRepo() {
        return repo;
    }
}
