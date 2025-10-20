# Profile API with Cat Facts

A RESTful API that returns profile information with dynamic cat facts.

## Requirements

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/JewelChidinma/HNG_STAGE_0.git
   cd profile-api
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env` file in the root directory:
```
   PORT=3000
   EMAIL=your.email@example.com
   NAME=Your Full Name
   STACK=Node.js/Express
```

## Running Locally

Start the server:
```bash
npm start
```

For development (auto-restart on changes):
```bash
npm run dev
```

The API will be available at: http://localhost:3000/me

## Testing

Visit http://localhost:3000/me in your browser or use curl:
```bash
curl http://localhost:3000/me
```

Expected response:
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-20T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}
```

## API Endpoints

### GET /me
Returns profile information with a random cat fact.

- **URL**: `/me`
- **Method**: `GET`
- **Success Response**: 200 OK

## Dependencies

- express - Web framework
- axios - HTTP client for API calls
- cors - Enable CORS
- dotenv - Environment variable management

## Deployment

This API is deployed at: hngstage0-production-002a.up.railway.app

## Author

Chidinma Osonwa-Paul - jewelchidinma@gmail.com
