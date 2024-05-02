package com.springboot.configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@org.springframework.context.annotation.Configuration
public class Configuration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173") // Permite conexiones desde este origen
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Permite que se usen estos metodos
                .allowedHeaders("*"); // Permite todos los Headers
    }
}