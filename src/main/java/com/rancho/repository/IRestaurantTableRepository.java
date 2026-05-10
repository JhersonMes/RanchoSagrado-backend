package com.rancho.repository;

import com.rancho.model.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRestaurantTableRepository extends JpaRepository<RestaurantTable, Integer> {
}