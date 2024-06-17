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

    //Buscamos la biblioteca por id
    @GetMapping("{id}")
    public ResponseEntity<?> findBibliotecaById(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<Biblioteca>(bibliotecaService.findBibliotecaById(id), HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return new ResponseEntity<String>("No se ha encontrado la biblioteca", HttpStatus.BAD_REQUEST);
        }
    }

    //Nos devuelve todas las bibliotecas
    @GetMapping
    public List<Biblioteca> getAllBibliotecas(){
        return bibliotecaService.findAllBibliotecas();
    }

    //Añade un libro a una biblioteca
    @PostMapping("{id_biblioteca}/{id_libro}/{id_libro_api}")
    public ResponseEntity<?> addLibroABiblioteca(@PathVariable("id_biblioteca") Long idBiblioteca,
                                                 @PathVariable("id_libro") Long idLibro, @PathVariable("id_libro_api") String idLibroApi) {
        try {
            return  new ResponseEntity<EstaContiene>(estaContieneService.aniadirLibroaBiblioteca(idBiblioteca, idLibro, idLibroApi),
                    HttpStatus.OK);
        } catch (EntityNotFoundException | EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al insertar el libro");
        }
    }

    //Borra un libro de la biblioteca
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

    /**
     * Borra el libro de la relacion EstaContiene
     * @param idUsuario id del usuario que tiene registrado el libr
     * @param idLibroApi id del libro que tiene en la api de googleBooks
     * @return ResponseEntity
     */
    @DeleteMapping("/libroapi/{id_usuario}/{id_libro_api}")
    public ResponseEntity<?> deleteLibroFromEstaContiene(@PathVariable("id_usuario") Long idUsuario,
    @PathVariable("id_libro_api") String idLibroApi){
        try {
            return estaContieneService.deleteLibroFromBibliotecaLibroApi(idUsuario, idLibroApi);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al insertar el libro");
        }
    }

    /**
     * Actualiza el libro en una biblioteca
     * @param idUsuario id del usuario al que pertecene la biblioteca
     * @param idLibro id del libro de la api de google
     * @param estado estado que deseamos establecer para el libro en la relacionEstaContiene
     * @return ResponseEntity
     */
    @PutMapping("{id_usuario}/{id_libro}")
    public ResponseEntity<?> updateLibroFormBiblioteca(@PathVariable("id_usuario") Long idUsuario,
                                                       @PathVariable("id_libro") String idLibro,
                                                       @RequestBody EstaContiene estado){
        try {
            return estaContieneService.updateEstadoLibroEnBiblioteca(idUsuario, idLibro, estado.getEstadoLibro());
        }
        catch (ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Biblioteca or Libro not found");
        }
    }

    /**
     * Busca una fila de la tabla EstaContiene a traves de la id del usuario
     * @param idUsuario id del usuario
     * @param idLibro id del libro en la Api
     * @return ResponseEntity con la fila
     */
    @GetMapping("{id_usuario}/{id_libro}")
    public ResponseEntity<?> findEstaContieneById(@PathVariable("id_usuario")  Long idUsuario,
    @PathVariable("id_libro") String idLibro){
        try{
            return  new ResponseEntity<>(bibliotecaService.findEstaContieneById(idUsuario, idLibro),
                    HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se ha encontrado");
        }
    }

    /**
     * Nos devuelve la fila de EstaContiene a traves de la id api libro
     * @param idUsuario
     * @param idLibro
     * @return ResponseEntity con la fila de EstaContiene
     */
    @GetMapping("/libroapi/{id_usuario}/{id_libro}")
    public ResponseEntity<?> findEstaContieneByIdApiLibro(@PathVariable("id_usuario")  Long idUsuario,
                                                  @PathVariable("id_libro") String idLibro){
        try{
            if(bibliotecaService.findByIdLibroApi(idUsuario, idLibro) != null) {
                return new ResponseEntity<>(bibliotecaService.findByIdLibroApi(idUsuario, idLibro),
                        HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        catch(ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se ha encontrado");
        }
    }


    /**
     * Nos devuelve todas las filas de EstaContiene de ese usuario
     * @param idUsuario
     * @return ResponseEntity con la lista de filas de EstaContiene
     */
    @GetMapping("/biblioteca/{id_usuario}")
    public ResponseEntity<?> getBibliotecaEstaContieneUsuario(@PathVariable("id_usuario") Long idUsuario){
        try{
            return new ResponseEntity<>(bibliotecaService.getListEstaContieneEnBibliotecaUsuario(idUsuario),
                    HttpStatus.OK);
        }
        catch (ResourceNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se ha encontrado");
        }
    }
}
