package com.rancho.config;

import com.rancho.dto.ClientDTO;
import com.rancho.model.Client;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {

    @Bean
    public ModelMapper defaultMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper clientMapper() {
        ModelMapper mapper = new ModelMapper();

        // LECTURA: GET
        mapper.createTypeMap(Client.class, ClientDTO.class)
                .addMapping(Client::getIdClient, ClientDTO::setIdClient)
                .addMapping(Client::getDni, ClientDTO::setDni)
                .addMapping(Client::getName, ClientDTO::setName)
                .addMapping(Client::getLastName, ClientDTO::setLastName)
                .addMapping(Client::getPhone, ClientDTO::setPhone)
                .addMapping(Client::getEmail, ClientDTO::setEmail)
                .addMapping(Client::getBirthDate, ClientDTO::setBirthDate)
                .addMapping(Client::getAddress, ClientDTO::setAddress)
                .addMapping(Client::getRuc, ClientDTO::setRuc);

        // ESCRITURA:PUT, POST
        mapper.createTypeMap(ClientDTO.class, Client.class)
                .addMapping(ClientDTO::getIdClient, Client::setIdClient)
                .addMapping(ClientDTO::getDni, Client::setDni)
                .addMapping(ClientDTO::getName, Client::setName)
                .addMapping(ClientDTO::getLastName, Client::setLastName)
                .addMapping(ClientDTO::getPhone, Client::setPhone)
                .addMapping(ClientDTO::getEmail, Client::setEmail)
                .addMapping(ClientDTO::getBirthDate, Client::setBirthDate)
                .addMapping(ClientDTO::getAddress, Client::setAddress)
                .addMapping(ClientDTO::getRuc, Client::setRuc);

        return mapper;
    }

    @Bean
    public ModelMapper contractMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper employeeMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper ingredientCategoryMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper ingredientMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper inventoryMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper menuMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper orderMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper orderDetailMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper paymentMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper paymentReceiptMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper productCategoryMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper productMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper promotionMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper reservationMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper restaurantTableMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper roleMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper shiftMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper supplierMapper() {
        return new ModelMapper();
    }

    @Bean
    public ModelMapper userMapper() {
        return new ModelMapper();
    }

}

