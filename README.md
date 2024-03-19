## Airport API

This API provides access to airport data within India and offers a flight fare estimation feature.

## Features

Airport Information Retrieval:
Retrieve details such as name, IATA code, municipality, and coordinates for airports in India.
Use the GET request method to the /airport/ endpoint with a query parameter airportName:
Example: /airport/?airportName=Indore
Response: JSON array containing information for the requested airport, including:
```
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
```

