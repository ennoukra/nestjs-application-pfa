import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getEmployeesByUserLogedIn(@Body() req) {
    return this.employeeService.getEmployeeByUserLogIn(req.user);
  }

  //   @UseGuards(JwtAuthGuard)
  @Post('/create')
  createEmployee(@Body() data) {
    console.log(data);
    this.employeeService.createEmployee(data.employee);
  }
}
