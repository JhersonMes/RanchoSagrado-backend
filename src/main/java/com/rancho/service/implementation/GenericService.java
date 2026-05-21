package com.rancho.service.implementation;

import com.rancho.model.Client;
import com.rancho.repository.IClientRepository;
import com.rancho.service.IGenericService;
import com.rancho.repository.IGenericRepository;
import java.util.List;

public abstract class GenericService<T, ID> implements IGenericService<T, ID> {

    protected abstract IGenericRepository<T, ID> getRepo();

    @Override
    public T save(T t) throws Exception {
        return getRepo().save(t);
    }

    @Override
    public List<T> saveAll(List<T> t) throws Exception {
        return getRepo().saveAll(t);
    }

    @Override
    public T update(T t, ID id) throws Exception {
        // t.setId(id);
        return getRepo().save(t);
    }

    @Override
    public List<T> findAll() throws Exception {
        return getRepo().findAll();
    }

    @Override
    public T findById(ID id) throws Exception {
        return getRepo().findById(id).orElse(null);
    }

    @Override
    public void delete(ID id) throws Exception {
        getRepo().deleteById(id);
    }
}
