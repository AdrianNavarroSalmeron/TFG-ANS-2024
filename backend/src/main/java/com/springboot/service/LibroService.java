package com.springboot.service;

import com.springboot.entity.Libro;
import com.springboot.entity.Usuario;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

public interface LibroService {
    Libro saveLibro(Libro libro);
    List<Libro>getAllLibros();
    Libro getLibroById(Long id);
    Libro updateLibro(Libro libro, Long id);
    void deleteLibro(Long id);
}

