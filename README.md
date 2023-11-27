### Art & Artist Management System

This is Project 2 for the Database Management System course.


### Task 1

#### Requirements document

[Requirements document](./requirements.pdf)

#### UML

![UML Diagram](./uml.png)

### Task 2

#### Hierarchical tables

![Hierarchical tables](./erd.png)

### Task 3

#### Main collections

1. Artwork Collection

This collection contains documents for each artwork. The `artist` field embeds the artist's basic details for quick reference, and the `exhibitions` filed is an array of embedded exhibition details.

JSON example:

```json
{
  "_id": "artwork123",
  "title": "Sunset Bliss",
  "medium": "Oil on Canvas",
  "dimension": "24x36 inches",
  "creationDate": "2021-05-15",
  "price": 5000,
  "availabilityStatus": "Available",
  "artist": {
    "_id": "artist456",
    "name": "Jane Doe",
    "biography": "Contemporary artist known for vibrant landscapes.",
    "style": "Impressionism",
    "totalExhibitions": 99
  },
  "collector": {
    "_id": "collector789",
    "collectorName": "Alex Smith",
    "preferences": "Impressionist Paintings"
  },
  "exhibitions": [
    {
      "_id": "exhibition101",
      "exhibitionName": "Modern Landscapes",
      "startDate": "2021-06-01",
      "endDate": "2021-06-30",
      "venue": "Art House Gallery",
      "gallery": {
        "_id": "gallery202",
        "galleryName": "Art House",
        "location": "Downtown City",
        "contactDetails": "info@arthouse.com"
      }
    }
    // ... other exhibitions
  ]
}
```

2. Artist Collection

Documents in this collection represent artists.

JSON example:

```json
{
  "_id": "artist456",
  "name": "Jane Doe",
  "biography": "Contemporary artist known for vibrant landscapes.",
  "style": "Impressionism",
  "totalExhibitions": 99,
  "artworks": [
    "artwork123", // reference to Artwork ID
    "artwork456" // other artworks
  ]
}
```

3. Collector Collection

This collection stores details about art collectors.

JSON example:

```json
{
  "_id": "collector789",
  "collectorName": "Alex Smith",
  "preferences": "Impressionist Paintings",
  "collectedArtworks": [
    "artwork123", // reference to Artwork ID
    "artwork456"  // other artworks
  ]
}
```

4. Exhibition Collection

This collection includes details about exhibitions.

JSON example:

```json
{
  "_id": "exhibition101",
  "exhibitionName": "Modern Landscapes",
  "startDate": "2021-06-01",
  "endDate": "2021-06-30",
  "venue": "Art House Gallery",
  "gallery": {
    "_id": "gallery202",
    "galleryName": "Art House",
    "location": "Downtown City",
    "contactDetails": "info@arthouse.com"
  }
  "displayedArtworks": [
    "artwork123", // reference to Artwork ID
    "artwork234"  // other artworks
  ]
}
```

5. Gallery Collection

This collection contains details about galleries

JSON example:

```json
{
  "_id": "gallery202",
  "galleryName": "Art House",
  "location": "Downtown City",
  "contactDetails": "info@arthouse.com",
  "hostedExhibitions": [
    "exhibition101", // reference to Exhibition ID
    "exhibition303"  // other exhibitions
  ]
}
```

### Task 4

#### Populate the tables with test data
