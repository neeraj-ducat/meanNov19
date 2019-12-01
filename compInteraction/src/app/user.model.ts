export class User{
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": Address = new Address();
    "phone": string;
    "website": string;
    "company": {
      "name": string;
      "catchPhrase": string;
      "bs": string;
    }
  }

  class Address {
      "street": string;
      "suite": string;
      "city": string;
      "zipcode": string;
      "geo": {
        "lat": string;
        "lng": string;
      }
    
  }