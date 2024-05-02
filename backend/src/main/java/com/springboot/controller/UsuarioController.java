package com.springboot.controller;

import com.springboot.entity.Usuario;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    //Añadir usuario
    @PostMapping
    public ResponseEntity<?> saveUsuario(@RequestBody Usuario usuario) {
        try{
            return new ResponseEntity<Usuario>(usuarioService.saveUsuario(usuario), HttpStatus.CREATED);
        }
        catch (DataIntegrityViolationException e){
            String errorMessage = "El usuario: " + usuario.getNombreUsuario() + " ya esta en uso" ;
            return new ResponseEntity<String>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    //Traerse todos los usuarios
    @GetMapping
    public List<Usuario> getAllUsuarios(){
        return usuarioService.getAllUsuarios();
    }

    //Traerse usuario por Id
    @GetMapping("{id}")
    public ResponseEntity<?> getUsuarioById(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<Usuario>(usuarioService.getUsuarioById(id), HttpStatus.OK);
        }
        catch (ResourceNotFoundException e){
            String errorMessage = "No se ha encontrado el usuario";
            return new ResponseEntity<String>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateUsuario(@PathVariable("id") Long id ,@RequestBody Usuario usuario){
        try{
            return  new ResponseEntity<Usuario>(usuarioService.updateUsuario(usuario, id), HttpStatus.OK);
        }
        catch (ResourceNotFoundException e){
            return new ResponseEntity<String>("El usuario no ha podido ser actualizado", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String>deleteUsuarioByiD(@PathVariable("id") Long id){
        try{
            usuarioService.deleteUsuario(id);
            return new ResponseEntity<String>("Usuario borrado", HttpStatus.OK);
        }
        catch(ResourceNotFoundException e){
            return new ResponseEntity<String>("No se ha podido borrar el usuario", HttpStatus.BAD_REQUEST);
        }

    }

    @PutMapping("/login")
    public ResponseEntity<?>comprobarSiUsuarioEnBd(@RequestBody Usuario usuario){
        List<Usuario> usuariosBd = usuarioService.getAllUsuarios();
        for(Usuario usuario1 : usuariosBd){
            if(usuario.getLogin()
                    .equals(usuario1.getLogin())
                    && usuario.getContrasenia().equals(usuario1.getContrasenia())){
                Usuario usuarioConInformacionBasica = new Usuario();
                usuarioConInformacionBasica.setNombreUsuario(usuario1.getNombreUsuario());
                usuarioConInformacionBasica.setLogin(usuario1.getLogin());
                return new ResponseEntity<Usuario>(usuarioConInformacionBasica, HttpStatus.OK);

            }
            else{
                return new ResponseEntity<String>("Ta mal", HttpStatus.BAD_REQUEST);
            }
        }
        return null;
    }
}
