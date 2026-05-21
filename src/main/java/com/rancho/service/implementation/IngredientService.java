package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Ingredient;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IIngredientRepository;
import com.rancho.service.IIngredientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IngredientService extends GenericService<Ingredient, Integer> implements IIngredientService {
    private final IIngredientRepository repo;

    @Override
    public IGenericRepository<Ingredient, Integer> getRepo() {
        return repo;
    }
}