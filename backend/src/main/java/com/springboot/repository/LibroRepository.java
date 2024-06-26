package com.springboot.repository;

import com.springboot.entity.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Long> {
    Libro findByTitulo(String titulo);
}
