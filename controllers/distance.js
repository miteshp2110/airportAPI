
const mongoose=require('mongoose')
async function getDistance(source,destination) {
    const cln=await mongoose.connection.collection('indianairports')
    srcCoordinates= ((await cln.findOne({municipality:`${source}`})).coordinates).split(',')
    destCoordinates= ((await cln.findOne({municipality:`${destination}`})).coordinates).split(',')
    var res=Math.round((Math.sqrt((Math.pow((srcCoordinates[0]-destCoordinates[0]),2))+(Math.pow((srcCoordinates[1]-destCoordinates[1]),2))))*100+100)
    return  res
    
}

module.exports={getDistance}