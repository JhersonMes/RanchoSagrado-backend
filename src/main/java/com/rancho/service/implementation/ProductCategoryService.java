package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.ProductCategory;
import com.rancho.repository.IProductCategoryRepository;
import com.rancho.service.IProductCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductCategoryService implements IProductCategoryService {

    private final IProductCategoryRepository repo;

    @Override
    public ProductCategory save(ProductCategory category) throws Exception {
        return repo.save(category);
    }

    @Override
    public List<ProductCategory> saveAll(List<ProductCategory> categories) throws Exception {
        return repo.saveAll(categories);
    }

    @Override
    public ProductCategory update(ProductCategory category, Integer id) throws Exception {
        category.setIdProductCategory(id);
        return repo.save(category);
    }

    @Override
    public List<ProductCategory> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public ProductCategory findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new ProductCategory());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}