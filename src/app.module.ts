import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilModule } from './modules/perfil/perfil.module';
import { CoreModule } from './core/core.module';


@Module({
  imports: [PerfilModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
