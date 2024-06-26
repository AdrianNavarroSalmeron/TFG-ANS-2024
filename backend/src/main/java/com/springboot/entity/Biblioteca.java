package com.springboot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Entity
@Table(name="biblioteca")
@Data
public class Biblioteca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBiblioteca;

    @Column(name = "total_libros", columnDefinition = "int default 0")
    private Integer totalLibros;

    @OneToMany(mappedBy = "biblioteca", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<EstaContiene> estaContiene;

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

    public List<EstaContiene> getEstaContiene() {
        return estaContiene;
    }

    public void setEstaContiene(List<EstaContiene> estaContiene) {
        this.estaContiene = estaContiene;
    }
}
