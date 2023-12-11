import { Injectable } from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";

@Injectable()
export class CalculationService {
    async calculate(body: CalculateDto): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    return resolve(body.number * 2)
                }, 5000)
            } catch (e) {
                return reject(e)
            }
        });
    }
}
