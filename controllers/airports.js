const { default: mongoose } = require("mongoose")


const fetchAirport=((req,res)=>{
    var airportName=req.query.airportName
    //console.log("query:",airportName)
    async function getData(){
        try{
            
            const cln=await mongoose.connection.collection('indianairports')
            const dbRes=await cln.find({municipality:{$regex: new RegExp(searchText=airportName)}}).toArray()
            if(dbRes!=null)
            {
                
                res.status(200).json(dbRes)
            }
            else{
                res.status(404).json({"message":"Not Found"})
            }
            
            

            
        }
        catch(error){
            res.status(404).json({"Message":"Some error Occured"})

        }
    }
    getData()

    
})

module.exports={fetchAirport}