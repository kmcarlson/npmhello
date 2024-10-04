const FriggApi = require('./friggApi');
const add = require('./index');

// Skriv ut resultatet av add-funksjonen
console.log(add(6, 10));

// Opprett en IIFE (Immediately Invoked Function Expression) for å håndtere async/await
(async () => {
  try {
    // Initialiser friggApi
    const friggApi = new FriggApi();
    
    // Hent alle produkter med await
    let products = await friggApi.productController.getAll();
    
    // Skriv ut produktene
    console.log(products);
  } catch (error) {
    console.error("Feil:", error);
  }
})();
