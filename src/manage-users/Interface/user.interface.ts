import { Document } from 'mongoose';
import { Schema } from 'mongoose';

export interface ManageUserInterface extends Document {
    firstName: String,
    lastName: String,
    profilePhoto: Schema.Types.ObjectId,
    email: String,
    mobile: String,
    insertedBy: String,
    insertDate: String,
    updatedBy: Schema.Types.ObjectId,
    updateDate: String,
    isDeleteAble: Boolean,
    isDeleted: Boolean,
    deletedBy: Schema.Types.ObjectId,
    deleteDate: String,
}