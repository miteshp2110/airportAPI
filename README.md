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
Flight Fare Estimation (Disclaimer):
Estimate potential flight fares between airports in India.
Important Note: These fares are not real-time data from airlines; they are generated based on an average factor for informational purposes only.
Use the POST request method to the /flightData endpoint with a JSON request body containing the following fields:

```
{
  "fromDate": "YYYY-MM-DD", // Departure date in ISO 8601 format (e.g., 2024-03-19)
  "from": "Airport name (origin)",
  "destination": "Airport name (destination)",
  "seating": "Economy" // Currently supports Economy class only
}
```
Example request body:

```
{
  "fromDate": "2024-03-19",
  "from": "Delhi",
  "destination": "Mumbai",
  "seating": "Economy"
}
```
Response: JSON array containing estimated fares from various airlines (company is a placeholder, logo needs to be fetched):

```
[
  {
    "date": "2024-03-19",
    "source": "Delhi",
    "destination": "Mumbai",
    "company": "IndiGo (Placeholder)", // Placeholder for actual company name
    "companyLogo": "URL to fetch company logo", // Placeholder, requires implementation
    "hour": 1,
    "minutes": 25,
    "seating": "Economy",
    "fare": 5705, // Estimated fare (not real-time data)
    "time": 6 // Estimated flight duration in hours
  },
  // ... additional estimated fares from other (placeholder) airlines
]
```
