import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { DbModule } from './db/db.module'
import { ProjetoModule } from './projeto/projeto.module'
import { TecnologiasModule } from './tecnologias/tecnologias.module'

@Module({
    imports: [DbModule, ProjetoModule, TecnologiasModule],
    controllers: [AppController],
})
export class AppModule {}
