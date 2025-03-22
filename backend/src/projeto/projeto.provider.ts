import { Injectable } from '@nestjs/common'
import { Projeto } from '@core'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class ProjetoProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    async obterTodos(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany() as any
    }

    async obterPorId(id: number): Promise<Projeto> {
        return this.prisma.projeto.findUnique({
            where: {
                id,
            },
            include: {
                tecnologias: true,
            },
        }) as any
    }
}
