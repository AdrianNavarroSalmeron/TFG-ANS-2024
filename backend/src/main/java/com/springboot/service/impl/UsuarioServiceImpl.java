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


    @Override
    public Usuario saveUsuario(Usuario usuario) throws DataIntegrityViolationException{
        String contraseniaEncriptada = Encriptador.encryptSHA256(usuario.getContrasenia());
        usuario.setContrasenia(contraseniaEncriptada);
        return usuarioRepository.save(usuario);
    }

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

    @Override
    public Usuario updateUsuario(Usuario usuario, Long id) {
        Usuario usuarioEsperado = usuarioRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employe", "Id", id.toString()));
        String contraseniaEncriptada =  Encriptador.encryptSHA256(usuario.getContrasenia());
        usuarioEsperado.setNombreUsuario(usuario.getNombreUsuario());
        usuarioEsperado.setLogin(usuario.getLogin());
        usuarioEsperado.setContrasenia(contraseniaEncriptada);

        usuarioRepository.save(usuarioEsperado);
        return usuarioEsperado;
    }

    @Override
    public void deleteUsuario(Long id){
        usuarioRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Usuario", "Id", id.toString()));

        usuarioRepository.deleteById(id);
    }
}
