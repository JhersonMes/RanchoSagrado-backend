package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.ProductCategory;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IProductCategoryRepository;
import com.rancho.service.IProductCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductCategoryService extends GenericService<ProductCategory, Integer>
        implements IProductCategoryService {

    private final IProductCategoryRepository repo;

    @Override
    public IGenericRepository<ProductCategory, Integer> getRepo() {
        return repo;
    }
}