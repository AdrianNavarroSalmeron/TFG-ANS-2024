package com.springboot.service.impl;

import com.springboot.entity.Biblioteca;
import com.springboot.entity.Employe;
import com.springboot.entity.Libro;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.BibliotecaRepository;
import com.springboot.repository.LibroRepository;
import com.springboot.service.BibliotecaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BibliotecaServiceImpl implements BibliotecaService {

    @Autowired
    BibliotecaRepository bibliotecaRepository;

    @Autowired
    LibroRepository libroRepository;

    @Override
    public Biblioteca findBibliotecaById(Long id) {
        Optional<Biblioteca> biblioteca = bibliotecaRepository.findById(id);
        if(biblioteca.isPresent()){
            return biblioteca.get();
        }
        else{
            throw new ResourceNotFoundException("Biblioteca", "Id", id.toString());
        }
    }

    @Override
    public List<Biblioteca> findAllBibliotecas() {
        return bibliotecaRepository.findAll();
    }

    @Override
    public Biblioteca addLibroaBiblioteca(Long idBiblioteca, Long idLibro) {
        Optional<Biblioteca> bibliotecaOptional = bibliotecaRepository.findById(idBiblioteca);
        Optional<Libro> libroOptional = libroRepository.findById(idLibro);
        if(bibliotecaOptional.isPresent() && libroOptional.isPresent()){
            //Añadimos el libro a la biblioteca
            bibliotecaOptional.get().getLibrosList().add(libroOptional.get());
            //Incrementamos el contador de libros de esta
            bibliotecaOptional.get().setTotalLibros(bibliotecaOptional.get().getTotalLibros()+1);
            return bibliotecaRepository.save(bibliotecaOptional.get());
        }
        else{
            throw new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString());
        }
    }

    @Override
    public void deleteLibroFromBiblioteca(Long idBiblioteca, Long idLibro) {
        Biblioteca biblioteca = bibliotecaRepository.findById(idBiblioteca).orElseThrow(()
        -> new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString()));

        Libro libro = libroRepository.findById(idLibro).orElseThrow(()
                -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));

        if(biblioteca.getLibrosList().contains(libro)){
            biblioteca.getLibrosList().remove(libro);
            bibliotecaRepository.save(biblioteca);
        }
        else{
            throw new ResourceNotFoundException("Libro", "Id", idLibro.toString());
        }
    }

    @Override
    public Libro updateLibroFromBiblioteca(Long idBiblioteca, Long idLibro, Libro libro) {
        Libro libroExistente = libroRepository.findById(idLibro).orElseThrow(()
                -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));
        libroExistente.setTitulo(libro.getTitulo());
        libroExistente.setAutor((libro.getAutor()));
        libroExistente.setEstado(libro.getEstado());
        return libroRepository.save(libroExistente);
    }
}
