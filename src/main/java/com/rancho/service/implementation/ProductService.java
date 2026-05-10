package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Product;
import com.rancho.repository.IProductRepository;
import com.rancho.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final IProductRepository repo;

    @Override
    public Product save(Product product) throws Exception {
        return repo.save(product);
    }

    @Override
    public List<Product> saveAll(List<Product> products) throws Exception {
        return repo.saveAll(products);
    }

    @Override
    public Product update(Product product, Integer id) throws Exception {
        product.setIdProduct(id);
        return repo.save(product);
    }

    @Override
    public List<Product> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public Product findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new Product());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}