package com.springboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name="esta_contiene")
public class EstaContiene {
    @EmbeddedId
    PkEstaContiene id;

    @ManyToOne
    @MapsId("id_biblioteca")
    @JoinColumn(name = "id_biblioteca")
    private Biblioteca biblioteca;

    @ManyToOne
    @MapsId("id_libro")
    @JoinColumn(name = "id_libro")
    private Libro libro;

    private String estadoLibro;

    public PkEstaContiene getId() {
        return id;
    }

    public void setId(PkEstaContiene id) {
        this.id = id;
    }

    public String getEstadoLibro() {
        return estadoLibro;
    }

    public void setEstadoLibro(String estadoLibro) {
        this.estadoLibro = estadoLibro;
    }


}
