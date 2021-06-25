// fix this
const {Schema, model} = require('mongoose');
const ThoughtSchema = require('./Thought');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/]
        },
        // fix this maybe
        thoughts: [ThoughtSchema],
        friends: [UserSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

const User = model('User', UserSchema);

module.exports = User;