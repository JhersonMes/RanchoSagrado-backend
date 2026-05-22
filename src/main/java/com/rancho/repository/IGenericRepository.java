package com.rancho.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean // no se genera el bin de la clase generica dad

public interface s<T, ID> extends JpaRepository<T, ID> {

}
