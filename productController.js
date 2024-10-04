class ProductController {
    constructor() {
      // API-basert URL for produktene
      this.apiUrl = "https://api.v4.friggcms.no/api/v4/products?QueryType=allProducts";
      // API-nøkkelen som skal brukes i headeren
      this.apiKey = "B91F4537-3B26-4723-A668-0DB68FA1A4E6";
    }
  
    // En metode som returnerer alle produkter ved å hente fra API
    async getAll() {
      try {
        // Gjør et fetch-kall til API-et med riktig URL og headere
        const response = await fetch(this.apiUrl, {
          method: "GET", // GET-metode for å hente data
          headers: {
            "Content-Type": "application/json", // Forteller at vi forventer JSON-data
            "X-API-KEY": this.apiKey, // Autentisering med API-nøkkelen
          },
        });
  
        // Sjekk om responsen er ok
        if (!response.ok) {
          throw new Error(`HTTP-feil! status: ${response.status}`);
        }
  
        // Hent JSON-dataen fra responsen
        const products = await response.json();
  
        // Returner produktene
        return products;
  
      } catch (error) {
        // Hvis det oppstår en feil, logg den og kast videre
        console.error("Feil under henting av produkter:", error);
        throw error;
      }
    }
  }
  
  module.exports = ProductController;
  