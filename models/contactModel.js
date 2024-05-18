import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    workProfile:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
        // unique:true,
    },
    email: {
        type: String,
        required:true,
        unique:true,

    },
  
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;