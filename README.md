# airportAPI
This is api for airport Data within India.

#Use Case
1. To get Airports Information like :Name,Iata Code,Municipality and Coordinates
   /airport/?airportName=CityName

   eg: /airport/?airportName=Indore
   response:
           [
             {
                "_id": "65cb55154fb7fa5aa2def26b",
                 "coordinates": "75.8011016846, 22.7217998505",
                 "iata_code": "IDR",
                 "iso_country": "IN",
                 "iso_region": "IN-MP",
                 "municipality": "Indore",
                 "name": "Devi Ahilyabai Holkar Airport",
                 "type": "medium_airport"
   
             }
           ]

2. To get Dynamically Flight Fare (this fare are not provided by real Companies , they are created by a average factor)

   eg: /flightData
   body:{
      "fromDate" :"19-03-2024",
      "from":"Delhi",
      "destination":"Mumbai",
      "seating":"Economy"
      }

   Response will be a Array to different flight providers with their fares:
     eg:
       {
      "date": "19-03-2024",
      "source": "Delhi",
      "destination": "Mumbai",
      "company": "IndiGo",
      "companyLogo": 'fetch logo from internet',
      "hour": 1,
      "minutes": 25,
      "seating": "Economy",
      "fare": 5705,
      "time": 6
    }
  
