package com.springboot.service;

import com.springboot.entity.Employe;

import java.util.List;

public interface EmployeService {
    Employe saveEmploye(Employe employe);
    List<Employe> getAllEmployes();
    Employe findById(Long id);
    Employe updateEmploye(Employe employe, Long id);
    void deleteEmploye(Long id);
}
