package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Role;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IRoleRepository;
import com.rancho.service.IRoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoleService extends GenericService<Role, Integer> implements IRoleService {

    private final IRoleRepository repo;

    @Override
    public IGenericRepository<Role, Integer> getRepo() {
        return repo;
    }
}