import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private userService: UserService,
  ) {}

  async getEmployeeByUserLogIn(user) {
    const data = await this.userService.getEmployeesByUser(user);
    let employees = [];
    data[0].producters.forEach((producter) => {
      producter.unites.forEach((unite) => {
        employees.push(...unite.employees);
      });
    });
    return employees;
  }
}
