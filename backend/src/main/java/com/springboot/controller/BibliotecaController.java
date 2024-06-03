package com.springboot.controller;

import com.springboot.entity.Biblioteca;
import com.springboot.entity.EstaContiene;
import com.springboot.entity.Libro;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.service.BibliotecaService;
import com.springboot.service.EstaContieneService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bibliotecas")
public class BibliotecaController {

    @Autowired
    private BibliotecaService bibliotecaService;

    @Autowired
    EstaContieneService estaContieneService;

    @GetMapping("{id}")
    public ResponseEntity<?> findBibliotecaById(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<Biblioteca>(bibliotecaService.findBibliotecaById(id), HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return new ResponseEntity<String>("No se ha encontrado la biblioteca", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public List<Biblioteca> getAllBibliotecas(){
        return bibliotecaService.findAllBibliotecas();
    }

    @PostMapping("{id_biblioteca}/{id_libro}")
    public ResponseEntity<?> addLibroABiblioteca(@PathVariable("id_biblioteca") Long idBiblioteca,
                                                 @PathVariable("id_libro") Long idLibro) {
        try {
            return  new ResponseEntity<EstaContiene>(estaContieneService.aniadirLibroaBiblioteca(idBiblioteca, idLibro),
                    HttpStatus.OK);
        } catch (EntityNotFoundException | EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al insertar el libro");
        }
    }


    @DeleteMapping("{id_biblioteca}/{id_libro}")
    public ResponseEntity<?> deleteLibroFromBiblioteca(@PathVariable("id_biblioteca") Long idBiblioteca,
                                                 @PathVariable("id_libro") Long idLibro) {
        try {
           return estaContieneService.deleteLibroFromBiblioteca(idBiblioteca, idLibro);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al insertar el libro");
        }
    }

    @PutMapping("{id_usuario}/{id_libro}")
    public ResponseEntity<?> updateLibroFormBiblioteca(@PathVariable("id_usuario") Long idUsuario,
                                                       @PathVariable("id_libro") Long idLibro,
                                                       @RequestBody String estado){
        try {
            return estaContieneService.updateEstadoLibroEnBiblioteca(idUsuario, idLibro, estado);
        }
        catch (ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        }
    }

    @GetMapping("{id_usuario}/{id_libro}")
    public ResponseEntity<?> findEstaContieneById(@PathVariable("id_usuario")  Long idUsuario,
    @PathVariable("id_libro") Long idLibro){
        try{
            return  new ResponseEntity<>(bibliotecaService.findEstaContieneById(idUsuario, idLibro),
                    HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se ha encontrado");
        }
    }
}
