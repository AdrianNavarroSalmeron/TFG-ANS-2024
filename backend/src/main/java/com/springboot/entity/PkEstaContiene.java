package com.springboot.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PkEstaContiene implements Serializable {

    @Column(name="id_biblioteca", updatable = false, insertable = false)
    private Long id_biblioteca;

    @Column(name="id_libro", updatable = false, insertable = false)
    private Long id_libro;

    public Long getId_biblioteca() {
        return id_biblioteca;
    }

    public void setId_biblioteca(Long id_biblioteca) {
        this.id_biblioteca = id_biblioteca;
    }

    public Long getId_libro() {
        return id_libro;
    }

    public void setId_libro(Long id_libro) {
        this.id_libro = id_libro;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PkEstaContiene that = (PkEstaContiene) o;
        return Objects.equals(id_biblioteca, that.id_biblioteca) && Objects.equals(id_libro, that.id_libro);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_biblioteca, id_libro);
    }
}
