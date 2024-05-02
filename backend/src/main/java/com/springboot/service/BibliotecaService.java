package com.springboot.service;

import com.springboot.entity.Biblioteca;
import com.springboot.entity.Libro;

import java.util.List;

public interface BibliotecaService {
    public Biblioteca findBibliotecaById(Long id);
    public List<Biblioteca> findAllBibliotecas();
    public Biblioteca addLibroaBiblioteca(Long idBiblioteca, Long idLibro);
    public void deleteLibroFromBiblioteca(Long idBiblioteca, Long idLibro);
    public Libro updateLibroFromBiblioteca(Long idBiblioteca, Long idLibro, Libro libro);
}

