package com.springboot.service;

import com.springboot.entity.EstaContiene;
import org.springframework.http.ResponseEntity;

public interface EstaContieneService {
    EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro, String idLibroApi);
    ResponseEntity<EstaContiene> updateEstadoLibroEnBiblioteca(Long idUsuario, String idLibro, String estado);
    ResponseEntity<?> deleteLibroFromBiblioteca(Long idBiblioteca, Long idLibro);
    ResponseEntity<?> deleteLibroFromBibliotecaLibroApi(Long idUsuario, String idLibroApi);
}
