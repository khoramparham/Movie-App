import { Schema } from 'mongoose';

const schema = new Schema({
    firstName: { type: String, default: '', required: true },
    lastName: { type: String, default: '', required: true },
    profilePhoto: {type: Schema.Types.ObjectId, ref: 'File',required:false},
    email: { type: String, default: '', required: false },
    mobile: { type: String, default: '', required: false },
    insertedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    insertDate: { type: Date, default: new Date().toISOString(), required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    updateDate: { type: Date, default: new Date().toISOString(), required: true },
    isDeleted: { type: Boolean, default: false, required: true },
    deletedBy: { type: Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    deleteDate: { type: Date, default: null, required: false },
});

// schema.plugin(require('mongoose-aggregate-paginate-v2'));
// schema.plugin(require('mongoose-paginate-v2'));
schema.index({ '$**': 'text' });

export const UserSchema = schema;