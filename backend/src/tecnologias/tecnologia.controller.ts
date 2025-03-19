import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';
import { TecnologiaProvider } from './tecnologia.provider';


@Controller('tecnologias')
export class TecnologiaController {

    constructor(private readonly repo: TecnologiaProvider ) {}

    @Get()
    async obterTodas(): Promise<Tecnologia[]> {
        return this.repo.obterTodas();
    }
    @Get('destaques')
        
    async obterDestaques(): Promise<Tecnologia[]> {
            return this.repo.obterDestaques();
    }
    

}


//Este trecho de código define a classe TecnologiaController, que faz parte de uma aplicação construída com o framework NestJS. O objetivo principal dessa classe é atuar como um controlador responsável por gerenciar as requisições HTTP relacionadas ao recurso "tecnologias". Abaixo está uma explicação detalhada:

/* Importações:

O decorador Controller e o método Get são importados de @nestjs/common. O decorador Controller é usado para definir a classe como um controlador no NestJS, enquanto o decorador Get mapeia um método para lidar com requisições HTTP do tipo GET.
A classe ou tipo Tecnologia é importada de @core, que provavelmente é um módulo compartilhado contendo modelos ou entidades do domínio.
O TecnologiaProvider é importado de um arquivo local (./tecnologia.provider). Este provedor é responsável por realizar operações relacionadas ao recurso "tecnologias", como buscar dados no banco de dados ou executar lógica de negócios.

Definição do Controlador:

O decorador @Controller('tecnologias') define que este controlador será responsável por gerenciar as requisições enviadas para a rota /tecnologias.
A classe TecnologiaController possui um construtor que recebe uma instância do TecnologiaProvider como dependência. Essa instância é injetada automaticamente pelo sistema de injeção de dependências do NestJS e armazenada na propriedade repo. O provedor será usado para delegar as operações relacionadas ao recurso "tecnologias".

Método obterTodas:

O método obterTodas é decorado com @Get(), o que significa que ele será chamado quando uma requisição HTTP GET for enviada para a rota /tecnologias.
Este método é assíncrono e retorna uma Promise contendo um array de objetos do tipo Tecnologia. Ele delega a lógica de recuperação de dados ao método obterTodas do TecnologiaProvider.

Propósito Geral:

O TecnologiaController atua como um ponto de entrada para as requisições relacionadas ao recurso "tecnologias". Ele segue o princípio de separação de responsabilidades, delegando a lógica de negócios e acesso a dados ao TecnologiaProvider. Isso torna o código mais modular, testável e fácil de manter.

Em resumo, o TecnologiaController é um controlador simples e eficiente que expõe um endpoint GET para listar todas as tecnologias. Ele utiliza o sistema de injeção de dependências do NestJS para integrar o TecnologiaProvider, garantindo uma arquitetura limpa e organizada. */