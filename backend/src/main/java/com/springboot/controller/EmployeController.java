package com.springboot.controller;

import com.springboot.entity.Employe;
import com.springboot.service.EmployeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employes")
public class EmployeController {

    private EmployeService employeService;

    //Constructor inyecccion de dependencias
    public EmployeController(EmployeService employeService) {
        this.employeService = employeService;
    }

    //Para guardar un empleado en la db
    @PostMapping()
    public ResponseEntity<Employe> saveEmploye(@RequestBody Employe employe) {
        return new ResponseEntity<Employe>(employeService.saveEmploye(employe), HttpStatus.CREATED);
    }

    //Traer todos los empleados
    @GetMapping
    public List<Employe> getAllEmployes(){
        return employeService.getAllEmployes();
    }

    //Traer empleado por id
    @GetMapping("{id}")
    public ResponseEntity<Employe> getEmployeById(@PathVariable("id") Long id){
        return new ResponseEntity<Employe>(employeService.findById(id), HttpStatus.OK);
    }

    //Actualizar
    @PutMapping("{id}")
    public ResponseEntity<Employe> updateEmploye(
            @PathVariable("id") Long id,
            @RequestBody Employe employe){
        return new ResponseEntity<Employe>(employeService.updateEmploye(employe, id), HttpStatus.OK);
    }

    //Delete

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmploye(@PathVariable("id") Long id){
        employeService.deleteEmploye(id);
        return new ResponseEntity<String>("Employe deleted", HttpStatus.OK);
    }

}
