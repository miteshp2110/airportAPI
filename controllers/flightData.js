const { getDistance } = require("./distance");

const companyData=["IndiGo","AirIndia","IndiGo","IndiGo","AirIndia"]
const companyLogo=["https://static.goindigo.in/content/dam/indigov2/6e-website/homepage/header-logo/icIndigoLogoBlueR-new.svg","https://upload.wikimedia.org/wikipedia/commons/5/54/Air_India_Logo_2023.svg","https://static.goindigo.in/content/dam/indigov2/6e-website/homepage/header-logo/icIndigoLogoBlueR-new.svg","https://static.goindigo.in/content/dam/indigov2/6e-website/homepage/header-logo/icIndigoLogoBlueR-new.svg","https://upload.wikimedia.org/wikipedia/commons/5/54/Air_India_Logo_2023.svg"]

const fetchFlightData=((req,res)=>{
    reqData=req.body
    srcStation=reqData.from
    srcDestination=reqData.destination
    journeyDate=reqData.fromDate
    seatingType=reqData.seating
   
    getDistance(srcStation,srcDestination).then(distance=>{
        
        var time=distance/800
        var hour=Math.floor(time)
        var minute=Math.round((((time%1)*100)/100)*60)
        
        var baseFare=Math.round(3870*time)
        var fare
        if(seatingType=="Economy")
        {
            fare=baseFare
        }
        if(seatingType=="BussinessClass"){
            fare=baseFare*5
        }
        if(seatingType=="FirstClass"){
            fare=baseFare*2.5
        }
        
        var resArray=[]
        var tm=6
        var xFactor=200
        for(var i=0;i<5;i++){

            var jObj={
                "date":journeyDate,
                "source":srcStation,
                "destination":srcDestination,
                "company":companyData[i],
                "companyLogo":companyLogo[i],
                "hour":hour,
                "minutes":minute,
                "seating":seatingType,
                "fare":(fare+xFactor),
                "time":tm
            }
            resArray.push(jObj)
            tm=tm+4
            xFactor=xFactor-(Math.floor(Math.random() * 150) + 1)
        }
        



        res.status(200).json({"flightData":resArray})
    })


    
    
    
})
module.exports={fetchFlightData}