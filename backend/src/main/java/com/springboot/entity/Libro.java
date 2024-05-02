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
    @ManyToMany(mappedBy = "librosList", fetch = FetchType.EAGER, cascade=CascadeType.MERGE)
    private List<Biblioteca> bibliotecaList;

    @Column(name="estado", columnDefinition = "VARCHAR(255) DEFAULT 'Marcado para leer'")
    private String estado;


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

    public List<Biblioteca> getBibliotecaList() {
        return bibliotecaList;
    }

    public void setBibliotecaList(List<Biblioteca> bibliotecaList) {
        this.bibliotecaList = bibliotecaList;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
