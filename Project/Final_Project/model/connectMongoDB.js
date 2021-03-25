const mongoose = require('mongoose')

module.exports = () =>{
    const connect = function(){
        mongoose.connect('mongodb+srv://test:test@cluster0.svq2v.mongodb.net/', {dbName: 'Mongo'},
            (error) => {
                if(error){
                    console.error("MongoDB Error", error)
                }else{
                    console.log('MongoDB Connected')
                }
            }
        )
    }

    connect()
    //if there is connetion error
    mongoose.connection.on('error', (error) => {
        console.error('MongoDB Error', error)
    })

    //reconnect if disconnected
    mongoose.connection.on('disconnected', () =>{
        console.error('Disconnected MongDB, Try re-connect.')
        connect()
    })



}

