package com.rancho.service.implementation;

import java.util.List;

import com.rancho.model.Employee;
import com.rancho.repository.IEmployeeRepository;
import com.rancho.repository.IGenericRepository;
import com.rancho.service.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService extends GenericService<Employee, Integer> implements IEmployeeService {
    private final IEmployeeRepository repo;

    @Override
    public IGenericRepository<Employee, Integer> getRepo() {
        return repo;
    }
}
