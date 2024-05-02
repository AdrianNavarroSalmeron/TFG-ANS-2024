package com.springboot.service;

import com.springboot.entity.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UsuarioService {
    Usuario saveUsuario(Usuario usuario);
    List<Usuario>getAllUsuarios();
    Usuario getUsuarioById(Long id);
    Usuario updateUsuario(Usuario usuario, Long id);
    void deleteUsuario(Long id);
}

