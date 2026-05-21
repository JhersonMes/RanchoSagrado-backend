package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Product;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IProductRepository;
import com.rancho.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService extends GenericService<Product, Integer> implements IProductService {

    private final IProductRepository repo;

    @Override
    public IGenericRepository<Product, Integer> getRepo() {
        return repo;
    }
}