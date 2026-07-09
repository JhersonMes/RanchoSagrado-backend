package com.rancho.config;

import com.rancho.model.Employee;
import com.rancho.model.Menu;
import com.rancho.model.Product;
import com.rancho.model.ProductCategory;
import com.rancho.model.RestaurantTable;
import com.rancho.model.Role;
import com.rancho.model.Shift;
import com.rancho.model.User;
import com.rancho.repository.IEmployeeRepository;
import com.rancho.repository.IMenuRepository;
import com.rancho.repository.IProductCategoryRepository;
import com.rancho.repository.IProductRepository;
import com.rancho.repository.IRestaurantTableRepository;
import com.rancho.repository.IRoleRepository;
import com.rancho.repository.IShiftRepository;
import com.rancho.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.text.Normalizer;
import java.time.LocalTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final IRoleRepository roleRepository;
    private final IUserRepository userRepository;
    private final IRestaurantTableRepository restaurantTableRepository;
    private final IEmployeeRepository employeeRepository;
    private final IShiftRepository shiftRepository;
    private final IMenuRepository menuRepository;
    private final IProductCategoryRepository productCategoryRepository;
    private final IProductRepository productRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        seedRoles();
        seedBaseUsers();
        seedRestaurantTables();
        seedShifts();
        seedStaff();
        seedMenuAndProducts();
    }

    private void seedRoles() {
        if (roleRepository.count() > 0) return;
        roleRepository.saveAll(List.of(
                buildRole("Administrador", "Acceso total al sistema y a la gestión del restaurante"),
                buildRole("Cajero", "Gestiona cobros, pagos y cierre de caja"),
                buildRole("Chef", "Gestiona cocina, inventario e ingredientes"),
                buildRole("Mesero", "Gestiona pedidos, mesas y atención al cliente"),
                buildRole("Cliente", "Usuario final que realiza reservas y pedidos")
        ));
    }

    private Role buildRole(String name, String description) {
        Role role = new Role();
        role.setName(name);
        role.setDescription(description);
        return role;
    }

    private void seedBaseUsers() {
        if (userRepository.count() > 0) return;

        createUser("admin", "admin@rancho.com", "Admin123*", "Administrador");
        createUser("mesero", "mesero@rancho.com", "Mesero123*", "Mesero");
        createUser("chef", "chef@rancho.com", "Chef123*", "Chef");
        createUser("cajero", "cajero@rancho.com", "Cajero123*", "Cajero");
    }

    private User createUser(String username, String email, String rawPassword, String roleName) {
        Role role = roleRepository.findOneByName(roleName);

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(rawPassword));
        user.setEnabled(true);
        user.setRole(role);
        return userRepository.save(user);
    }

    private void seedRestaurantTables() {
        if (restaurantTableRepository.count() > 0) return;
        for (int i = 1; i <= 12; i++) {
            RestaurantTable table = new RestaurantTable();
            table.setTableNumber(i);
            table.setCapacity(i % 3 == 0 ? 6 : 4);
            table.setLocation(i <= 6 ? "Salón Principal" : "Terraza");
            table.setStatus("DISPONIBLE");
            restaurantTableRepository.save(table);
        }
    }

    private void seedShifts() {
        if (shiftRepository.count() > 0) return;
        shiftRepository.saveAll(List.of(
                buildShift("Mañana", LocalTime.of(7, 0), LocalTime.of(15, 0), "Lun-Sab"),
                buildShift("Tarde", LocalTime.of(15, 0), LocalTime.of(23, 0), "Lun-Sab"),
                buildShift("Noche", LocalTime.of(23, 0), LocalTime.of(7, 0), "Vie-Dom")
        ));
    }

    private Shift buildShift(String name, LocalTime startTime, LocalTime endTime, String daysOfWeek) {
        Shift shift = new Shift();
        shift.setName(name);
        shift.setStartTime(startTime);
        shift.setEndTime(endTime);
        shift.setDaysOfWeek(daysOfWeek);
        return shift;
    }

    private void seedStaff() {
        if (employeeRepository.count() > 0) return;

        String[][] data = {
                {"Carlos", "Ramírez", "Av. Los Pinos 123", "Chef", "987654321", "ACTIVO", "10000001", "Mañana"},
                {"María", "López", "Jr. Las Flores 45", "Mesero", "987654322", "ACTIVO", "10000002", "Mañana"},
                {"Juan", "Pérez", "Calle Sol 78", "Mesero", "987654323", "ACTIVO", "10000003", "Tarde"},
                {"Ana", "Torres", "Av. Central 12", "Cajero", "987654324", "ACTIVO", "10000004", "Tarde"},
                {"Luis", "Fernández", "Jr. Norte 89", "Chef", "987654325", "ACTIVO", "10000005", "Mañana"},
                {"Rosa", "Mendoza", "Av. Sur 34", "Mesero", "987654326", "ACTIVO", "10000006", "Noche"},
                {"Pedro", "Castro", "Calle Luna 56", "Chef", "987654327", "ACTIVO", "10000007", "Tarde"},
                {"Lucía", "Vargas", "Jr. Estrella 67", "Cajero", "987654328", "ACTIVO", "10000008", "Mañana"},
                {"Diego", "Rojas", "Av. Mar 90", "Mesero", "987654329", "INACTIVO", "10000009", "Noche"},
                {"Sofía", "Cruz", "Calle Río 21", "Chef", "987654330", "ACTIVO", "10000010", "Tarde"},
        };

        for (String[] d : data) {
            Shift shift = shiftRepository.findOneByName(d[7]);
            String job = d[3];

            Employee employee = new Employee();
            employee.setName(d[0]);
            employee.setLastName(d[1]);
            employee.setAddress(d[2]);
            employee.setJob(job);
            employee.setPhone(d[4]);
            employee.setStatus(d[5]);
            employee.setDni(d[6]);
            employee.setShifts(List.of(shift));

            String username = slug(d[0]) + "." + slug(d[1]);
            User user = createUser(username, username + "@rancho.com", job + "123*", job);
            employee.setUser(user);

            employeeRepository.save(employee);
        }
    }

    private String slug(String value) {
        String withoutAccents = Normalizer.normalize(value, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "");
        return withoutAccents.toLowerCase().replaceAll("[^a-z0-9]+", "");
    }


    private void seedMenuAndProducts() {
        if (productRepository.count() > 0) return;

        Menu menu = new Menu();
        menu.setName("Carta Principal");
        menu.setDishQuantity(12);
        menu.setDescription("Carta principal del restaurante Rancho Sagrado");
        menu.setPrice(new BigDecimal("0.00"));
        menu = menuRepository.save(menu);

        ProductCategory entradas = buildCategory("Entradas", "Piqueos y entradas para compartir", menu);
        ProductCategory platosFuertes = buildCategory("Platos Fuertes", "Especialidades de la casa", menu);
        ProductCategory bebidas = buildCategory("Bebidas", "Bebidas frías y calientes", menu);
        ProductCategory postres = buildCategory("Postres", "Dulces tradicionales", menu);

        productRepository.saveAll(List.of(
                buildProduct("Tequeños de Queso", "Tequeños crocantes con guacamole", 10f, "15.00", entradas),
                buildProduct("Anticuchos", "Brochetas de corazón a la parrilla", 15f, "22.00", entradas),
                buildProduct("Papa a la Huancaína", "Papas bañadas en crema huancaína", 10f, "14.00", entradas),
                buildProduct("Lomo Saltado", "Lomo fino salteado con papas y arroz", 20f, "35.00", platosFuertes),
                buildProduct("Ají de Gallina", "Pollo deshilachado en crema de ají amarillo", 18f, "28.00", platosFuertes),
                buildProduct("Parrilla Rancho", "Parrilla mixta de la casa para dos", 30f, "65.00", platosFuertes),
                buildProduct("Trucha Frita", "Trucha fresca con ensalada y papas doradas", 20f, "30.00", platosFuertes),
                buildProduct("Chicha Morada 1L", "Jarra de chicha morada natural", 5f, "12.00", bebidas),
                buildProduct("Limonada 1L", "Jarra de limonada fresca", 5f, "10.00", bebidas),
                buildProduct("Gaseosa Personal", "Botella personal 500ml", 2f, "5.00", bebidas),
                buildProduct("Suspiro Limeño", "Clásico postre limeño", 8f, "12.00", postres),
                buildProduct("Picarones", "Porción de picarones con miel de chancaca", 12f, "10.00", postres)
        ));
    }

    private ProductCategory buildCategory(String name, String description, Menu menu) {
        ProductCategory category = new ProductCategory();
        category.setName(name);
        category.setDescription(description);
        category.setMenu(menu);
        return productCategoryRepository.save(category);
    }

    private Product buildProduct(String name, String description, Float preparationTime,
                                 String price, ProductCategory category) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPreparationTime(preparationTime);
        product.setPrice(new BigDecimal(price));
        product.setAvailability(true);
        product.setCategory(category);
        return product;
    }
}
