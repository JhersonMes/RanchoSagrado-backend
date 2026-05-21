package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Menu;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IMenuRepository;
import com.rancho.service.IMenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class MenuService extends GenericService<Menu, Integer> implements IMenuService {
    private final IMenuRepository repo;

    @Override
    public IGenericRepository<Menu, Integer> getRepo() {
        return repo;
    }
}
