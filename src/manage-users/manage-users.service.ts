import { Injectable } from '@nestjs/common';
import { manangeUserException } from './exceptions/mangeUser.exceptions';
import { ManageUserRepository } from './manage-users.repository';

@Injectable()
export class ManageUsersService {
    private User;
    constructor(
        private readonly repository?: ManageUserRepository,
    ) { }
    async InsertUser(user, data) {
        this.User = await this.repository.findById(user);
        if (this.User) {
            throw new manangeUserException(422, 'this user avalible.', {})
        } else {}
        let newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            profilePhoto: data.profilePhoto,
            email: data.email,
            mobile: data.mobile,
            insertedBy: user,
            insertDate: new Date().toISOString(),
            updatedBy: user,
            updateDate: new Date().toISOString(),
        }
        this.User =await this.repository.createUser(newUser);

        this.User = await this.repository.findById(this.User._id)
        return {
            _id: this.User._id,
            firstName: this.User.firstName,
            lastName: this.User.lastName,
            profilePhoto: this.User.profilePhoto,
            email: this.User.email,
            mobile: this.User.mobile,
        }
    }
}
