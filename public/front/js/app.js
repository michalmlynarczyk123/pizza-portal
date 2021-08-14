import {settings, select, classNames} from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';
import Home from './components/Home.js';

export const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');
    
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id*/
        thisApp.activatePage(id);

        /*change url hash*/
        window.location.hash = '#/' + id;
      });
    }
  },  

  activatePage: function(pageId){
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initMenu: function(){
    const thisApp = this;

    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
    // Zastąpione powyższym 
    /*const testProduct = new Product();
      console.log('testProduct:', testProduct);*/
  },

  initHome: function(){
    const thisApp = this;

    const homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeContainer);
  },

  initBooking: function(){
    const thisApp = this;

    /*const element = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(element);*/
    
    const bookingContainer = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(bookingContainer);
  },

  initData: function(){
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url) //Połącz się z adresem url przy użyciu metody fetch
      .then(function(rawResponse){ 
        return rawResponse.json(); // Jeśli połączenie się zakończy, to wtedy (pierwsze .then) skonwertuj dane do obiektu JS-owego.
      })
      .then(function(parsedResponse){ // Kiedy i ta operacja się zakończy, to wtedy (drugie .then) pokaż w konsoli te skonwertowane dane.

        //save parsedResponse as thisApp.data.products
        thisApp.data.products = parsedResponse;
        //execute initMenu method
        thisApp.initMenu();
      });
  },

  init: function(){
    const thisApp = this;
 
    thisApp.initHome();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.initBooking();
    thisApp.initPages();
  },

  initCart: function(){
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);
    thisApp.productList.addEventListener('add-to-cart', function(event){
      app.cart.add(event.detail.product);
    });
  },
  
};

//app.initMenu();
app.init();
app.initCart();