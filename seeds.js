const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb+srv://bigbankreal:bigbankreal2021@bigbankreal.evctf.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const seedUsers = [
    {
        name: 'SHYAM PANDIT',
        email: 'shyampandit@gmail.com',
        credits: 10000
    },
    {
        name: 'RITIK KUMAR',
        email: 'ritikkumar@gmail.com',
        credits: 5000
    },
    {
        name: 'ANNANYA TANDON',
        email: 'annanyatandon.com',
        credits: 130000
    },
    {
        name: 'SHRUTI KAPOOR',
        email: 'shrutikapoor34@yahoo.com',
        credits: 450000
    },
    {
        name: 'JASMEET DAHIYA',
        email: 'jasmitdahiya23@gmail.com',
        credits: 6969
    },
    {
        name: 'ELVIN JOSHEP',
        email: 'joshep444@yahoo.com',
        credits: 99000
    },
    {
        name: 'HARIKESH PANDEY',
        email: 'harikesh1000@gmail.com',
        credits: 40000
    },
    {
        name: 'VIJAY DIXIT',
        email: 'vijaydixit3@yahoo.com',
        credits: 23000
    },
    {
        name: 'SNEHA SINGH',
        email: 'snehasingh69@gmail.com',
        credits: 120000
	},
    {
        name: 'ABHAY KUMAR',
        email: 'abhaykumar89@gmail.com',
        credits: 120000
	}
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
