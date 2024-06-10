package com.springboot.repository;

import com.springboot.entity.Employe;
import com.springboot.entity.EstaContiene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstaContieneRepository extends JpaRepository<EstaContiene, Long> {
    EstaContiene findByIdIdBibliotecaAndIdIdLibro(Long idBiblioteca, Long idLibro);

    List<EstaContiene> findByIdIdBiblioteca(Long idBiblioteca);
}
