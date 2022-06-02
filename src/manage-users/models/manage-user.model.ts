import { Model } from 'mongoose';
import { ManageUserInterface } from '../Interface/user.interface';

export interface ManageUserModel extends Model<ManageUserInterface> {
    [x: string]: any;
}