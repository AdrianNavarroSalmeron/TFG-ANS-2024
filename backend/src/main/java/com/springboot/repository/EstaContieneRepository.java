package com.springboot.repository;

import com.springboot.entity.Employe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstaContieneRepository extends JpaRepository<Employe, Long> {
}
