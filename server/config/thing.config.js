const mongoose = require('mongoose');
const db_name = "pet_db"


mongoose.connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('We have a  connection to the database'))
    .catch(err => console.log('Failed to connect to the database ', err));