import { Module } from '@nestjs/common';
import { CalculationModule } from "./modules/calculation/calculation.module";

@Module({
  imports: [CalculationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
