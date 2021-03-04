const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Name is required']
    },
    email: {
        type: String,
        required: [ true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, 'Password is required']
    }
},
    {
        timestamps: true,
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    }
)


const User = mongoose.model('user', userSchema)

userSchema.pre('save', async(next)=> {
    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = User