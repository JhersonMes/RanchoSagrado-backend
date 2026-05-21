package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.User;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IUserRepository;
import com.rancho.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService extends GenericService<User, Integer> implements IUserService {

    private final IUserRepository repo;

    @Override
    public IGenericRepository<User, Integer> getRepo() {
        return repo;
    }
}