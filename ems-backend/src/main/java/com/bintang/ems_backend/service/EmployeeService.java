package com.bintang.ems_backend.service;

import com.bintang.ems_backend.dto.EmployeeDto;
import com.bintang.ems_backend.entity.Employee;
import com.bintang.ems_backend.mapper.EmployeeMapper;
import com.bintang.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeDto createEmployee(EmployeeDto employeeDto){

        boolean existingEmployee = employeeRepository.existsByEmail(employeeDto.getEmail());
        if(existingEmployee == true){
            throw new RuntimeException("Employee already exists");
        }

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);

    }

    public EmployeeDto getEmployeeById(Long id){
        return null;
    }
}
