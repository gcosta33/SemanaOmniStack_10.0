const mongoose = require('mongoose');

module.exports = (IsValidId) =>{
    return mongoose.Types.ObjectId.isValid(IsValidId)
}