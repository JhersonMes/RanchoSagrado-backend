package com.rancho.controller;

import com.rancho.dto.MenuDTO;
import com.rancho.model.Menu;
import com.rancho.service.IMenuService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/menus")
public class MenuController {

    private final IMenuService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<MenuDTO>> findAll() throws Exception {
        List<MenuDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, MenuDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuDTO> findById(@PathVariable Integer id) throws Exception {
        Menu obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, MenuDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody MenuDTO dto) throws Exception {
        Menu obj = service.save(modelMapper.map(dto, Menu.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdMenu()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<MenuDTO>> saveAll(@RequestBody List<MenuDTO> dtos) throws Exception {
        List<Menu> menus = dtos.stream().map(dto -> modelMapper.map(dto, Menu.class)).toList();
        List<Menu> savedMenus = service.saveAll(menus);
        List<MenuDTO> savedDtos = savedMenus.stream().map(item -> modelMapper.map(item, MenuDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuDTO> update(@PathVariable Integer id, @RequestBody MenuDTO dto) throws Exception {
        Menu obj = service.update(modelMapper.map(dto, Menu.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, MenuDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<MenuDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Menu obj = service.findById(id);
        EntityModel<MenuDTO> entityModel = EntityModel.of(modelMapper.map(obj, MenuDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MenuController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(MenuController.class).findAll());

        entityModel.add(link1.withRel("menu-self-info"));
        entityModel.add(link2.withRel("menu-all-info"));

        return entityModel;
    }
}
