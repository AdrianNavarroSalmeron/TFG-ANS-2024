package com.springboot.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PkEstaContiene implements Serializable {

    @Column(name="id_biblioteca", updatable = false, insertable = false)
    private Long idBiblioteca;

    @Column(name="id_libro", updatable = false, insertable = false)
    private Long idLibro;

    public PkEstaContiene(){

    }

    public PkEstaContiene(Long id_biblioteca, Long id_libro) {
        this.idBiblioteca = id_biblioteca;
        this.idBiblioteca = id_libro;
    }

    public Long getIdBiblioteca() {
        return idBiblioteca;
    }

    public void setIdBiblioteca(Long idBiblioteca) {
        this.idBiblioteca = idBiblioteca;
    }

    public Long getIdLibro() {
        return idLibro;
    }

    public void setIdLibro(Long idLibro) {
        this.idLibro = idLibro;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PkEstaContiene that = (PkEstaContiene) o;
        return Objects.equals(idBiblioteca, that.idBiblioteca) && Objects.equals(idLibro, that.idLibro);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBiblioteca, idLibro);
    }
}
