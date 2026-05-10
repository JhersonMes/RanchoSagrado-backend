package com.rancho.repository;

import com.rancho.model.Shift;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IShiftRepository extends JpaRepository<Shift, Integer> {
}