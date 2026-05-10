package com.rancho.service;

import com.rancho.model.Product;
import java.util.List;

public interface IProductService {
    Product save(Product product) throws Exception;
    List<Product> saveAll(List<Product> products) throws Exception;
    Product update(Product product, Integer id) throws Exception;
    List<Product> findAll() throws Exception;
    Product findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}