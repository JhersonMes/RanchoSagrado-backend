package com.rancho.service;

import com.rancho.model.ProductCategory;
import java.util.List;

public interface IProductCategoryService {
    ProductCategory save(ProductCategory category) throws Exception;
    List<ProductCategory> saveAll(List<ProductCategory> categories) throws Exception;
    ProductCategory update(ProductCategory category, Integer id) throws Exception;
    List<ProductCategory> findAll() throws Exception;
    ProductCategory findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}