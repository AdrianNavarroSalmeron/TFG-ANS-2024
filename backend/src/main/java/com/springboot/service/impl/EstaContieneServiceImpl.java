package com.springboot.service.impl;

import com.springboot.entity.Biblioteca;
import com.springboot.entity.Libro;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.BibliotecaRepository;
import com.springboot.repository.LibroRepository;
import com.springboot.service.EstaContieneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstaContieneServiceImpl implements EstaContieneService {

    @Autowired
    BibliotecaRepository bibliotecaRepository;

    @Autowired
    LibroRepository libroRepository;


}
