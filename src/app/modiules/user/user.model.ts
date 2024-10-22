import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create and export the model
const User = model<TUser>('User', UserSchema);

export default User;
