import { IsEmail, IsNumber, IsNotEmpty, MinLength, IsString, MaxLength, IsBoolean, Matches, ArrayUnique, ArrayMinSize, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { UserStatusesEnum } from '@app/schemas/user/user-statuses.enum';
import { statusEnum } from '../enums/status.enum';

export class InsertUserDto {

    @IsString({ message: 'first name id must be string.' })
    @IsNotEmpty({ message: 'first name id is required and must be entered.' })
    @ApiProperty({ required: true })
    firstName: string;

    @IsString({ message: 'last name id must be string.' })
    @IsNotEmpty({ message: 'last name id is required and must be entered.' })
    @ApiProperty({ required: true })
    lastName: string;

    // @IsString({ message: 'profile photo id must be string.' })
    // @IsNotEmpty({ message: 'profile photo id is required and must be entered.' })
    // @ApiProperty({ required: false })
    // profilePhoto: string;

    @IsEmail({ message: 'email id must be string.' })
    @ApiProperty({ required: false })
    email: string;

    // @IsNumber({ message: 'mobile must be number.' })
    @IsNotEmpty({ message: 'mobile is required and must be entered.' })
    @ApiProperty({ required: true })
    mobile: number;

}