package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.IngredientCategory;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IIngredientCategoryRepository;
import com.rancho.service.IIngredientCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IngredientCategoryService extends GenericService<IngredientCategory, Integer>
        implements IIngredientCategoryService {
    private final IIngredientCategoryRepository repo;

    @Override
    public IGenericRepository<IngredientCategory, Integer> getRepo() {
        return repo;
    }
}