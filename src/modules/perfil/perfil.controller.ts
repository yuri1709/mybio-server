import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PessoaInfo } from 'src/core/models/pessoa.interface';
import { PerfilService } from './perfil.service';

@Controller('perfil')
export class PerfilController {

    constructor(private perfilService: PerfilService){}

    @Post('/add')
    async addPerfil(@Body() body: PessoaInfo) {
        return this.perfilService.arrayUnion(body);
    }

    @Get('/get')
    async getAllPerfil() {
        return this.perfilService.getAllDocuments();
    }
}
