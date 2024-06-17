package com.springboot.service.impl;

import com.springboot.entity.Usuario;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.UsuarioRepository;
import com.springboot.service.UsuarioService;
import com.springboot.utils.Encriptador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    /**
     * Guardamos el usuario y encriptamos su contraseña
     * @param usuario
     * @return
     * @throws DataIntegrityViolationException
     */
    @Override
    public Usuario saveUsuario(Usuario usuario) throws DataIntegrityViolationException{
        String contraseniaEncriptada = Encriptador.encryptSHA256(usuario.getContrasenia());
        usuario.setContrasenia(contraseniaEncriptada);
        return usuarioRepository.save(usuario);
    }

    /**
     * Recuperamos la lista de usuarios
     * @return
     */
    @Override
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario getUsuarioById(Long id) {
        Optional<Usuario> usuarioEsperado = usuarioRepository.findById(id);
        if(usuarioEsperado.isPresent()){
            return usuarioEsperado.get();
        }
        else{
            throw new ResourceNotFoundException("Usuario", "id", id.toString());
        }
    }

    /**
     * Actualizamos los datos del usuario y encriptamos su contraseña
     * @param usuario
     * @param id
     * @return
     */
    @Override
    public Usuario updateUsuario(Usuario usuario, Long id) {
        Usuario usuarioEsperado = usuarioRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employe", "Id", id.toString()));
        if(usuario.getNombreUsuario() != null && !usuario.getNombreUsuario().isBlank() && !usuario.getNombreUsuario().isEmpty()){
            usuarioEsperado.setNombreUsuario(usuario.getNombreUsuario());
        }
        if(usuario.getContrasenia()!= null && !usuario.getContrasenia().isEmpty() && !usuario.getContrasenia().isBlank()){
            String contraseniaEncriptada =  Encriptador.encryptSHA256(usuario.getContrasenia());
            usuarioEsperado.setContrasenia(contraseniaEncriptada);
        }
        //usuarioEsperado.setLogin(usuario.getLogin());

        usuarioRepository.save(usuarioEsperado);
        return usuarioEsperado;
    }

    /**
     * Borramos el usuario
     * @param id
     */
    @Override
    public void deleteUsuario(Long id){
        usuarioRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Usuario", "Id", id.toString()));

        usuarioRepository.deleteById(id);
    }
}
