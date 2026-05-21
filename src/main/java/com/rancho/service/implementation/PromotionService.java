package com.rancho.service.implementation;

import com.rancho.model.Promotion;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IPromotionRepository;
import com.rancho.service.IPromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PromotionService extends GenericService<Promotion, Integer> implements IPromotionService {

    private final IPromotionRepository repo;

    @Override
    public IGenericRepository<Promotion, Integer> getRepo() {
        return repo;
    }
}