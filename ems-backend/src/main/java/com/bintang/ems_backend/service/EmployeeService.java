package com.bintang.ems_backend.service;

import com.bintang.ems_backend.dto.EmployeeDto;
import com.bintang.ems_backend.entity.Employee;
import com.bintang.ems_backend.exception.ResourceNotFoundException;
import com.bintang.ems_backend.mapper.EmployeeMapper;
import com.bintang.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public EmployeeDto getEmployeeById(Long employeeId){
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not found with id "+employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    public List<EmployeeDto> getAllEmployees(){
        List<Employee> employees = employeeRepository.findAll();

        if(!employees.isEmpty() || employees != null){
            List<EmployeeDto> listEmployees = employees
                    .stream()
                    .map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                    .collect(Collectors.toList());

            return listEmployees;
        }

        return null;
    }

    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto employeeDto){
        Employee existingEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not found with id : "+employeeId));

        existingEmployee.setFirstName(employeeDto.getFirstName());
        existingEmployee.setLastName(employeeDto.getLastName());
        existingEmployee.setEmail(employeeDto.getEmail());

        Employee updatedEmployee = employeeRepository.save(existingEmployee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }
}
