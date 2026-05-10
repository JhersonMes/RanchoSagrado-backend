package com.rancho.service;

import com.rancho.model.Promotion;
import java.util.List;

public interface IPromotionService {
    Promotion save(Promotion promotion) throws Exception;
    List<Promotion> saveAll(List<Promotion> promotions) throws Exception;
    Promotion update(Promotion promotion, Integer id) throws Exception;
    List<Promotion> findAll() throws Exception;
    Promotion findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}