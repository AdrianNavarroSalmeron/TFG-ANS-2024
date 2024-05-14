package com.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="libro")
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLibro;

    @Column(name="titulo", nullable = false, unique = true)
    private String titulo;

    @Column(name="autor")
    private String autor;

    @JsonIgnore
    @OneToMany(mappedBy = "libro")
    private List<EstaContiene> estaContieneList;


    public Long getIdLibro() {
        return idLibro;
    }

    public void setIdLibro(Long idLibro) {
        this.idLibro = idLibro;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public List<EstaContiene> getEstaContieneList() {
        return estaContieneList;
    }

    public void setEstaContieneList(List<EstaContiene> estaContieneList) {
        this.estaContieneList = estaContieneList;
    }
}
