declare namespace Cypress {
    interface Chainable {
      register(): Chainable<Element>;
      startServer():Chainable<Element>;
      routePostNewtabl():Chainable<Element>;
      routePostUsertable():Chainable<Element>;
      routeGetNewtable():Chainable<Element>;  
    }
  }
  