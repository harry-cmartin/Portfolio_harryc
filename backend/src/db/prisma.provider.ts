import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

//Classe que vai prover o prisma para toda a aplicação e permitir o acesso ao banco de dados

@Injectable()
export class PrismaProvider extends PrismaClient {}


// Este trecho de código define a classe PrismaProvider 
// em um arquivo TypeScript que faz parte de uma aplicação construída com o framework NestJS. 
// O objetivo principal dessa classe é fornecer uma instância do Prisma Client para toda a
//  aplicação, permitindo o acesso ao banco de dados de forma centralizada e eficiente.


//O decorador Injectable é importado de @nestjs/common.
//  Ele é uma funcionalidade essencial do NestJS que marca a classe como um provedor,
//  permitindo que ela seja injetada em outras partes da aplicação por meio do sistema de 
// injeção de dependências.
//O PrismaClient é importado de @prisma/client.
//  Este é o cliente gerado automaticamente pelo Prisma,
//  que contém métodos para realizar operações no banco de dados, 
// como consultas, inserções, atualizações e exclusões.