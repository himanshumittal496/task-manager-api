const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Task = mongoose.model('Task', taskSchema)
// const task = new Task({
//     description: 'clean home'
    
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

module.exports = Task