package com.springboot.service.impl;

import com.springboot.entity.Libro;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.LibroRepository;
import com.springboot.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class LibroServiceImpl implements LibroService {

    @Autowired
    LibroRepository libroRepository;

    @Override
    public Libro saveLibro(Libro libro) throws DataIntegrityViolationException {
        return libroRepository.save(libro);
    }

    @Override
    public List<Libro> getAllLibros() {
        return libroRepository.findAll();
    }

    @Override
    public Libro getLibroById(Long id) {
        Optional<Libro> libroOptional = libroRepository.findById(id);
        if(libroOptional.isPresent()){
            return libroOptional.get();
        }
        else{
            throw new ResourceNotFoundException("Libro", "Id", id.toString());
        }
    }

    @Override
    public Libro updateLibro(Libro libro, Long id) {
        Libro libroExistente = libroRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Libro", "Id", id.toString()));
        libroExistente.setTitulo(libro.getTitulo());
        libroExistente.setAutor(libro.getAutor());
        libroRepository.save(libroExistente);
        return libroExistente;
    }

    @Override
    public void deleteLibro(Long id) {
        Libro libroExistente = libroRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Libro", "Id", id.toString()));
        libroRepository.delete(libroExistente);
    }

    @Override
    public Libro findLibroByTitulo(String titulo) {
        return libroRepository.findByTitulo(titulo);
    }
}
