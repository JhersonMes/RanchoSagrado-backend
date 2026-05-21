package com.rancho.repository;

import com.rancho.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

//public interface IClientRepository extends JpaRepository<Client, Integer> {
public interface IClientRepository extends IGenericRepository<Client, Integer> {

}
