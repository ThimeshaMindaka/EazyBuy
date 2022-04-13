import mongoose from 'mongoose';

const userSchema = new mongoose.Schema (
    {
    UserName: { type: String, required: true},
    FirstName: { type: String, required: true},
    LastName: { type: String, required: true},
    Email:{ type: String, required: true, unique:true},
    ContactNumber:{ type: Number, required: true, unique:true},
    Password:{ type: String, required: true, unique:true},
    isAdmin: { type: Boolean, default: false, required: true},
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
export default User;

