import {Controller} from '@nestjs/common';
import {CalculationService} from "./calculation.service";
import {MessagePattern} from "@nestjs/microservices";
import {CalculateDto} from "./dto/calculateDto";

@Controller('calculation')
export class CalculationController {
    constructor(private readonly calculationService: CalculationService) {}

    @MessagePattern({ cmd: 'double' })
    async doubleValue(body: CalculateDto): Promise<number> {
        return this.calculationService.calculate(body);
    }
}
