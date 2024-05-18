package com.springboot.service.impl;
import com.springboot.entity.Biblioteca;
import com.springboot.entity.EstaContiene;
import com.springboot.entity.Libro;
import com.springboot.entity.PkEstaContiene;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.BibliotecaRepository;
import com.springboot.repository.EstaContieneRepository;
import com.springboot.repository.LibroRepository;
import com.springboot.service.EstaContieneService;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaDelete;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.CriteriaUpdate;
import jakarta.persistence.metamodel.Metamodel;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Map;


@Service
public class EstaContieneServiceImpl implements EstaContieneService {

    @Autowired
    private EstaContieneRepository estaContieneRepository; // Necesitas crear esta clase para manejar la entidad EstaContiene
    @Autowired
    private BibliotecaRepository bibliotecaRepository;
    @Autowired
    private LibroRepository libroRepository;
    @Autowired
    EntityManager entityManager;

    public boolean existeFilaParaIds(Long idBiblioteca, Long idLibro) {

        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT COUNT(ec) FROM EstaContiene ec WHERE ec.id.id_biblioteca = :idBiblioteca AND ec.id.id_libro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);
        return query.getSingleResult() > 0;
    }

    public Long obtenerIdInstancia(Long idBiblioteca, Long idLibro) {
        TypedQuery<Long> query = entityManager.createQuery(
                "SELECT ec.id FROM EstaContiene ec WHERE ec.id.id_biblioteca = :idBiblioteca AND ec.id.id_libro = :idLibro",
                Long.class);
        query.setParameter("idBiblioteca", idBiblioteca);
        query.setParameter("idLibro", idLibro);

        List<Long> resultados = query.getResultList();
        return resultados.isEmpty() ? null : resultados.get(0);
    }


    @Override
    @Transactional // Add this annotation to enable transaction management
    public EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro) {
        if (!existeFilaParaIds(idBiblioteca, idLibro)) {
            Libro libro = libroRepository.findById(idLibro)
                    .orElseThrow(() -> new ResourceNotFoundException("Libro", "Id", idLibro.toString()));

            Biblioteca biblioteca = bibliotecaRepository.findById(idBiblioteca)
                    .orElseThrow(() -> new ResourceNotFoundException("Biblioteca", "Id", idBiblioteca.toString()));

            // Create and save the new EstaContiene entity
            EstaContiene nuevaFila = new EstaContiene(biblioteca, libro);
            return estaContieneRepository.save(nuevaFila);
        } else {
            throw new ResourceNotFoundException("EstaContiene", "Id", idBiblioteca.toString());
        }
    }

    @Override
    public ResponseEntity<EstaContiene> updateEstadoLibroEnBiblioteca(Long idBiblioteca, Long idLibro, String estado) {

        EstaContiene estaContiene = estaContieneRepository.findByIdIdBibliotecaAndIdIdLibro(idBiblioteca, idLibro);
        estaContiene.setEstadoLibro(estado);
        estaContieneRepository.save(estaContiene);
        return ResponseEntity.status(HttpStatus.OK).body(estaContiene);
    }
}
