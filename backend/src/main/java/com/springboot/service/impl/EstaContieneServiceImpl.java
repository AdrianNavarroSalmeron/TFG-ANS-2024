package com.springboot.service.impl;
import com.springboot.entity.EstaContiene;
import com.springboot.entity.PkEstaContiene;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.EstaContieneRepository;
import com.springboot.service.EstaContieneService;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaDelete;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.CriteriaUpdate;
import jakarta.persistence.metamodel.Metamodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Map;


@Service
public class EstaContieneServiceImpl implements EstaContieneService {

    @Autowired
    private EstaContieneRepository estaContieneRepository; // Necesitas crear esta clase para manejar la entidad EstaContiene
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

    public EstaContiene aniadirLibroaBiblioteca(Long idBiblioteca, Long idLibro) {
        if (!existeFilaParaIds(idBiblioteca, idLibro)) {
            // Crea y guarda la nueva fila en caso de que no exista
            EstaContiene nuevaFila = new EstaContiene(idBiblioteca, idLibro);
            return estaContieneRepository.save(nuevaFila);
        } else {
            throw new ResourceNotFoundException("EstaContiene", "Id", idBiblioteca.toString());
        }
    }
}
