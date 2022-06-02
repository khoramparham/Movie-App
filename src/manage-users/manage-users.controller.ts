import { Controller, HttpCode, UseGuards, Post, Req, Body, Get, Query, Param, Put, Patch, Delete, Request } from '@nestjs/common';
import { InsertUserDto } from './DataTransferObject/InsertNewUser.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ManageUsersService } from './manage-users.service';
@ApiTags('ManageUsers')
@Controller()
export class ManageUsers {
    constructor(
        private readonly Servie ?: ManageUsersService,
    ) { }

    @Post('V1/InsertUser')
    @HttpCode(201)
    @ApiOperation({ summary: 'insert new user.' })
    async InsertUser(
        @Req() Request,
        @Body() Data: InsertUserDto
    ) {
        return this.Servie.InsertUser(Request.user, Data)
    }


}
