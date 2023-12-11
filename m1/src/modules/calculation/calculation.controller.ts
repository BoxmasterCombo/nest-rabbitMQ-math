import {Body, Controller, Post} from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";
import {CalculationService} from "./calculation.service";

@Controller('calculation')
export class CalculationController {
    constructor(private readonly calculationService: CalculationService) {}

    @Post()
    calculate(@Body() body:CalculateDto): number {
        return this.calculationService.calculate(body);
    }
}
