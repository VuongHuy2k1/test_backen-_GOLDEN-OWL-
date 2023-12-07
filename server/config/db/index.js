const mongoose = require('mongoose')
require('dotenv').config()

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://huydiepdeveloper:Huy123@dataprodduct.zuvpnma.mongodb.net/?retryWrites=true&w=majority',
    )
    console.log('Connect successfully !')
  } catch (error) {
    console.error('Error:', error)

    console.log('Connect failure !')
  }
}

module.exports = { connect }
