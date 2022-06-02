import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ManageUserModel } from './models/manage-user.model';
import { manangeUserException } from './exceptions/mangeUser.exceptions';
@Injectable()
export class ManageUserRepository {
    constructor(
        @InjectModel('user')
        private readonly manageUserModel?: ManageUserModel,
    ) { }

    async createUser(data) {
        return await this.manageUserModel
            .create(data)
            .catch((error) => {
                throw new manangeUserException(422, 'An error occurred while saving the user.', error)
            })
    }

    async findByIdAndUpdate(id, data) {
        return await this.manageUserModel
            .findByIdAndUpdate(id, data)
            .catch((error) => {
                throw new manangeUserException(422, 'An error occurred while update the user.', error)
            })
    }

    async findById(id) {
        return await this.manageUserModel
            .findById(id)
            .catch((error) => {
                throw new manangeUserException(422, 'An error occurred while find the user.', error)
            })
    }

    async deletById(id) {
        return await this.manageUserModel
            .deleteOne(id)
            .catch((error) => {
                throw new manangeUserException(422, 'An error occurred while delet the user.', error)
            })
    }
}