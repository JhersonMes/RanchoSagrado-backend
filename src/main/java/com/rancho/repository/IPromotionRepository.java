package com.rancho.repository;

import com.rancho.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPromotionRepository extends IGenericRepository<Promotion, Integer> {
}