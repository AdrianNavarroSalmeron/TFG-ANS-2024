package com.springboot.entity;

import com.springboot.repository.BibliotecaRepository;
import com.springboot.repository.LibroRepository;
import com.springboot.service.BibliotecaService;
import com.springboot.service.LibroService;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name="esta_contiene")
@Data
public class EstaContiene {

    @EmbeddedId
    PkEstaContiene id;

    //TODO: revisar si se ha roto la muchos a muchos, y ver si se puede volver a implementar con el oneToMany
    @Column(name="estado_libro")
    private String estadoLibro;

    @ManyToOne
    @MapsId("idBiblioteca")
    @JoinColumn(name = "id_biblioteca")
    private Biblioteca biblioteca;

    @ManyToOne
    @MapsId("idLibro")
    @JoinColumn(name = "id_libro")
    private Libro libro;


    public EstaContiene() {
        this.libro = new Libro();
        this.biblioteca = new Biblioteca();
    }

    public EstaContiene(Biblioteca biblioteca, Libro libro){
        this.id = new PkEstaContiene(biblioteca.getIdBiblioteca(), libro.getIdLibro());
        this.estadoLibro = "Marcado para leer";
        this.libro = libro;
        this.biblioteca = biblioteca;
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
