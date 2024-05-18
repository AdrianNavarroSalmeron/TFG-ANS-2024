package com.springboot.repository;

import com.springboot.entity.Employe;
import com.springboot.entity.EstaContiene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstaContieneRepository extends JpaRepository<EstaContiene, Long> {
    EstaContiene findByIdIdBibliotecaAndIdIdLibro(Long idBiblioteca, Long idLibro);
}
