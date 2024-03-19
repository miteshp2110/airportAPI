const mongoose=require('mongoose')

async function dbConnectivity(){
    try{
        await mongoose.connect('yourDatabaseURI')

        // const dbInstance=mongoose.connection
        // console.log("insttance: ",dbInstance)
        

          
        
        console.log("Db Connected")
    }
    catch{
        console.log("An error occured")
    }
}

module.exports={dbConnectivity}

