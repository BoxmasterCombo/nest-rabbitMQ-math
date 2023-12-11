import { Injectable } from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";

@Injectable()
export class CalculationService {
    calculate(body: CalculateDto): number {
        // TODO: Call service from M2
        return body.number;
    }
}
