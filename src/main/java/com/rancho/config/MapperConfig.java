package com.rancho.config;

import com.rancho.dto.*;
import com.rancho.model.*;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class MapperConfig {

    @Bean
    @Primary
    public ModelMapper defaultMapper() {
        return new ModelMapper();
    }

    @Bean public ModelMapper clientMapper() { return new ModelMapper(); }
    @Bean public ModelMapper contractMapper() { return new ModelMapper(); }
    @Bean public ModelMapper employeeMapper() { return new ModelMapper(); }
    @Bean public ModelMapper ingredientCategoryMapper() { return new ModelMapper(); }
    @Bean public ModelMapper ingredientMapper() { return new ModelMapper(); }
    @Bean public ModelMapper inventoryMapper() { return new ModelMapper(); }
    @Bean public ModelMapper menuMapper() { return new ModelMapper(); }
    @Bean public ModelMapper orderMapper() { return new ModelMapper(); }
    @Bean public ModelMapper orderDetailMapper() { return new ModelMapper(); }
    @Bean public ModelMapper paymentMapper() { return new ModelMapper(); }
    @Bean public ModelMapper paymentReceiptMapper() { return new ModelMapper(); }
    @Bean public ModelMapper productCategoryMapper() { return new ModelMapper(); }
    @Bean public ModelMapper productMapper() { return new ModelMapper(); }
    @Bean public ModelMapper productIngredientMapper() { return new ModelMapper(); }
    @Bean public ModelMapper promotionMapper() { return new ModelMapper(); }
    @Bean public ModelMapper reservationMapper() { return new ModelMapper(); }
    @Bean public ModelMapper restaurantTableMapper() { return new ModelMapper(); }
    @Bean public ModelMapper roleMapper() { return new ModelMapper(); }
    @Bean public ModelMapper shiftMapper() { return new ModelMapper(); }
    @Bean public ModelMapper supplierMapper() { return new ModelMapper(); }
    @Bean public ModelMapper userMapper() { return new ModelMapper(); }
}