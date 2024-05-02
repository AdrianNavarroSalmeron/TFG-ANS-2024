package com.springboot.service.impl;

import com.springboot.entity.Employe;
import com.springboot.exception.ResourceNotFoundException;
import com.springboot.repository.EmployeRepository;
import com.springboot.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeServiceImpl implements EmployeService {

    private EmployeRepository employeRepository;

    //Hay que poner el constructor cuando tenemos un parametro obligatorio
    public EmployeServiceImpl(EmployeRepository employeRepository) {
        this.employeRepository = employeRepository;
    }

    @Override
    public Employe saveEmploye(Employe employe) {
        return employeRepository.save(employe);
    }

    @Override
    public List<Employe> getAllEmployes() {
        return employeRepository.findAll();
    }

    @Override
    public Employe findById(Long id) {
        Optional<Employe> employe = employeRepository.findById(id);
        if(employe.isPresent()){
            return employe.get();
        }
        else{
            throw new ResourceNotFoundException("Employe", "Id", id.toString());
        }
    }

    @Override
    public Employe updateEmploye(Employe employe, Long id) {
        //Comprobar si el empleado existe en la bd
        Employe existingEmploye = employeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employe", "Id", id.toString()));

        existingEmploye.setFirstName(employe.getFirstName());
        existingEmploye.setLastName(employe.getLastName());
        existingEmploye.setEmail(employe.getEmail());

        employeRepository.save(existingEmploye);
        return existingEmploye;
    }

    @Override
    public void deleteEmploye(Long id) {

        employeRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Employe", "Id", id.toString()));
        employeRepository.deleteById(id);
    }


}
