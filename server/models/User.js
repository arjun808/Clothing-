// Import the Mongoose library
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
  {
    // Define the name field with type String, required, and trimmed
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
    },

   
    password: {
      type: String,
      required: true,
    },


   
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  
  

    // Add timestamps for when the document is created and last modified
  },
  { timestamps: true }
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
