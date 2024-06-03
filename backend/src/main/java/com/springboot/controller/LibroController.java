package com.springboot.controller;

import com.springboot.entity.Libro;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/libros")
public class LibroController {

    @Autowired
    LibroService libroService;

    //Añadir libro
    @PostMapping
    public ResponseEntity<?> saveLibro(@RequestBody Libro libro){
        try{
            return new ResponseEntity<Libro>(libroService.saveLibro(libro), HttpStatus.OK);
        }
        catch(DataIntegrityViolationException e){
            String errorMessage = "No se ha podido guardar el libro";
            return new ResponseEntity<String>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    //Get todos los libros
    @GetMapping
    public List<Libro> getAllLibros(){
        return libroService.getAllLibros();
    }

    //Get libro por id
    @GetMapping("{id}")
    public ResponseEntity<Libro> getLibroById(@PathVariable("id") Long id){
        return new ResponseEntity<Libro>(libroService.getLibroById(id), HttpStatus.OK);
    }

    @GetMapping("/titulo/{titulo}")
    public ResponseEntity<Libro> getLibroByTitulo(@PathVariable("titulo") String titulo){
        return new ResponseEntity<Libro>(libroService.findLibroByTitulo(titulo), HttpStatus.OK);
    }

    //Actualizar libro
    @PutMapping("{id}")
    public ResponseEntity<?> updateLibro(@PathVariable("id") Long id, @RequestBody Libro libro){
        try{
            return new ResponseEntity<Libro>(libroService.updateLibro(libro, id), HttpStatus.OK);
        }
        catch(DataIntegrityViolationException e){
            return new ResponseEntity<String>("No se ha podido actualizar el libro", HttpStatus.BAD_REQUEST);
        }
    }

    //Borrar libro
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLibro(@PathVariable("id") Long id){
        try{
            libroService.deleteLibro(id);
            return new ResponseEntity<String>("El libro ha sido correctamente eliminado", HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return new ResponseEntity<String>("No se ha podido borrar el libro", HttpStatus.BAD_REQUEST);
        }
    }
}
