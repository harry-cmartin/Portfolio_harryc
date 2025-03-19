import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider';

//Modulo de banco de dados

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],//Todos os módulos que importarem o DbModule terão acesso ao PrismaProvider
})
export class DbModule {}
