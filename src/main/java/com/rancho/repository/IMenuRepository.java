package com.rancho.repository;

import com.rancho.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMenuRepository extends JpaRepository<Menu, Integer> {
}
