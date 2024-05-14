package com.springboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name="esta_contiene")
public class EstaContiene {
    @EmbeddedId
    PkEstaContiene id;

    @Column(name="estado_libro")
    private String estadoLibro;

    public EstaContiene() {
    }

    public EstaContiene(Long idBiblioteca, Long idLibro){
        id = new PkEstaContiene();
        //Seteamos los valores
        id.setId_biblioteca(idBiblioteca);
        id.setId_libro(idLibro);
        this.setEstadoLibro("Marcado para leer");
    }

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
