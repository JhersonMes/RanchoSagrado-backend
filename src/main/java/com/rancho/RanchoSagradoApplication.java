package com.rancho;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
// Extendemos SpringBootServletInitializer para que Tomcat externo
// pueda arrancar la aplicación (en lugar del Tomcat embebido)
public class RanchoSagradoApplication extends SpringBootServletInitializer {

    // Le indica a Tomcat cuál es la clase principal de la aplicación
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(RanchoSagradoApplication.class);
    }

    public static void main(String[] args) {
        // Este main sigue funcionando para correr la app localmente desde IntelliJ
        SpringApplication.run(RanchoSagradoApplication.class, args);
    }

}