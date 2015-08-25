// Geocoding service code

/** 

3 Stages

Stage 1: Geocoding + reverse geocoding
  Coordinates-to-address/venue
  Address/venue-to-coordinates
  No database

Stage 2: 
  Persistent database for caching
  The first time we actual compute the coordinates or address
  The second and onwards time we have saved that data into our db so we just fetch

Stage 3: 
  Redis caching
  Stores in memory

*/