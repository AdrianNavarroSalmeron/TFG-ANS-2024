package com.springboot.service;

import com.springboot.entity.EstaContiene;

public interface EstaContieneService {
    EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro);
}
