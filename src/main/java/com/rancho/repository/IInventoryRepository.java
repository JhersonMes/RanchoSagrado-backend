package com.rancho.repository;

import com.rancho.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IInventoryRepository extends JpaRepository<Inventory, Integer> {
}
