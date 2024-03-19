const mongoose=require('mongoose')

async function dbConnectivity(){
    try{
        await mongoose.connect('mongodb+srv://MiteshPC:Mi12te34@cluster0.ojmszjm.mongodb.net/airportsdata')

        // const dbInstance=mongoose.connection
        // console.log("insttance: ",dbInstance)
        

          
        
        console.log("Db Connected")
    }
    catch{
        console.log("An error occured")
    }
}

module.exports={dbConnectivity}

