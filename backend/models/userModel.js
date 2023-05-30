import { Schema, model } from 'mongoose';

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // no two users can have the same email
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // not all users are admins
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

export default User;
