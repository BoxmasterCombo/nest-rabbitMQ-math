import {Inject, Injectable} from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";

@Injectable()
export class CalculationService {
    constructor(@Inject('CALCULATION_SERVICE') private client: ClientProxy) {}


    async calculate(body: CalculateDto): Promise<Observable<number>> {
        console.log({cmd: 'double'}, 'M1 sending')
        return this.client.send(
            { cmd: 'double' },
            body,
        );
    }
}
