package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Promotion;
import com.rancho.repository.IPromotionRepository;
import com.rancho.service.IPromotionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PromotionService implements IPromotionService {

    private final IPromotionRepository repo;

    @Override
    public Promotion save(Promotion promotion) throws Exception {
        return repo.save(promotion);
    }

    @Override
    public List<Promotion> saveAll(List<Promotion> promotions) throws Exception {
        return repo.saveAll(promotions);
    }

    @Override
    public Promotion update(Promotion promotion, Integer id) throws Exception {
        promotion.setIdPromotion(id);
        return repo.save(promotion);
    }

    @Override
    public List<Promotion> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public Promotion findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new Promotion());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}