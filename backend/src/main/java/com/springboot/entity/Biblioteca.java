package com.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="biblioteca")
public class Biblioteca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBiblioteca;

    @Column(name="total_libros" , columnDefinition = "int default 0")
    private Integer totalLibros;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinTable(
            name = "esta_contiene" ,uniqueConstraints = @UniqueConstraint(columnNames = {"id_biblioteca", "id_libro"}),
            joinColumns = @JoinColumn(name = "id_biblioteca"),
            inverseJoinColumns = @JoinColumn(name = "id_libro"))
    private List<Libro> librosList;

    public Long getIdBiblioteca() {
        return idBiblioteca;
    }

    public Biblioteca() {
        this.totalLibros = 0;
    }

    public void setIdBiblioteca(Long idBiblioteca) {
        this.idBiblioteca = idBiblioteca;
    }

    public Integer getTotalLibros() {
        return totalLibros;
    }

    public void setTotalLibros(Integer totalLibros) {
        this.totalLibros = totalLibros;
    }

    public List<Libro> getLibrosList() {
        return librosList;
    }

    public void setLibrosList(List<Libro> librosList) {
        this.librosList = librosList;
    }
}
