const mongoose = require("mongoose");
const Campo = require('../models/Course')

const dbName = 'api-js'
mongoose.connect("mongodb://admin:ADMIN12345@ds127644.mlab.com:27644/api-js")


const Campos = [
  {
    'name' : "Club de golf Chapultepec",
    'ventajas': [17,7,11,3,5,1,9,15,13,8,10,14,6,2,16,4,18,12],
    'par': [4,4,3,4,4,5,3,5,4,4,5,4,3,4,5,4,3,4],
  },
  {
    'name' : "Club de golf Avandaro",
    'ventajas': [6,15,4,10,14,5,11,9,7,13,18,2,1,16,8,17,3,12],
    'par': [4,3,5,3,5,4,4,3,4,4,4,4,5,3,5,3,5,4],
  },
  {
    'name' : "Club de golf Izar",
    'ventajas' : [16,7,9,3,10,13,2,14,5,8,11,17,1,15,4,6,18,12],
    'par' : [5,3,4,5,3,4,5,3,5,4,3,4,4,4,3,5,3,5],
  },
  {
    'name' : "Vail Golf Club",
    'ventajas' : [7,5,13,11,9,1,15,17,3,16,4,14,8,6,18,2,10,12],
    'par' : [4,4,3,4,4,5,3,5,4,4,4,5,4,4,3,4,3,5],
  },
  {
    'name' : "Jaguar Country Club",
    'ventajas' : [5,9,1,11,15,13,7,17,3,10,18,2,14,12,8,16,4,6],
    'par' : [4,3,4,5,4,4,3,5,4,4,5,3,5,4,3,5,3,4],
  },
  {
    'name' : "Pebble Beach",
    'ventajas' : [8,10,12,16,14,2,18,6,4,7,5,17,9,1,13,11,15,3],
    'par' : [4,5,4,4,3,5,3,4,4,4,4,3,4,5,4,4,3,5],
  }]


  Campo.create(Campos)
  .then(campo =>{
    console.log('campos created')
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log('something went wrong')
  })