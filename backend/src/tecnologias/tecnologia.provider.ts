import { Get, Injectable } from '@nestjs/common'
import { PrismaProvider } from 'src/db/prisma.provider'
import { Tecnologia } from '@core'

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    async obterTodas(): Promise<Tecnologia[]> {
        return this.prisma.tecnologias.findMany()
    }

    async obterDestaques(): Promise<Tecnologia[]> {
        // Obter tecnologias em destaque (destaque: true)
        return this.prisma.tecnologias.findMany({
            where: {
                destaque: true,
            },
        })
    }
}

/* Este trecho de código define a classe TecnologiaProvider, que é um provedor no contexto de uma aplicação NestJS. O objetivo principal dessa classe é encapsular a lógica de acesso ao banco de dados relacionada ao recurso "tecnologias". Abaixo está uma explicação detalhada:

Importações:

O decorador Injectable é importado de @nestjs/common. Ele marca a classe como um provedor, permitindo que ela seja injetada em outras partes da aplicação por meio do sistema de injeção de dependências do NestJS.
O PrismaProvider é importado de src/db/prisma.provider. Ele é uma classe que gerencia a interação com o banco de dados utilizando o Prisma ORM.
O tipo ou classe Tecnologia é importado de @core, que provavelmente representa um modelo ou entidade do domínio.
Definição da Classe:

A classe TecnologiaProvider é decorada com @Injectable(), tornando-a um provedor no NestJS. Isso permite que ela seja injetada em outros componentes, como controladores ou serviços.
O construtor da classe recebe uma instância do PrismaProvider como dependência. Essa instância é armazenada na propriedade prisma e é usada para realizar operações no banco de dados.
Método obterTodas:

O método obterTodas é assíncrono e retorna uma Promise contendo um array de objetos do tipo Tecnologia.
Ele utiliza o método findMany do Prisma para buscar todas as entradas na tabela ou coleção tecnologias do banco de dados.
Este método encapsula a lógica de acesso ao banco de dados, garantindo que o controlador ou outros serviços que o utilizem não precisem lidar diretamente com a camada de persistência.
Propósito Geral:

O TecnologiaProvider atua como uma camada intermediária entre o banco de dados e os controladores ou serviços da aplicação. Ele segue o princípio de separação de responsabilidades, isolando a lógica de acesso ao banco de dados em um único lugar.
Isso torna o código mais modular, reutilizável e fácil de manter, além de facilitar a realização de testes unitários. */
