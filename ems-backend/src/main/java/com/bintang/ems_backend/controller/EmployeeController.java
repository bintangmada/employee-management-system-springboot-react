package com.bintang.ems_backend.controller;

import com.bintang.ems_backend.dto.EmployeeDto;
import com.bintang.ems_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeDto employeeDto){
        return ResponseEntity.ok(employeeService.updateEmployee(id, employeeDto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<EmployeeDto> deleteEmployee(@PathVariable("id") Long employeeId){
        return ResponseEntity.ok(employeeService.deleteEmployee(employeeId));
    }
}
