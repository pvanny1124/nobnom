'use strict';
//vendorMenu: "Challah and Hummus; Harissa Falafel; Chicken Tagine Couscous; Tbecha Short Rib Couscous; Date Lime Banana Smoothie",
//      vendorMenu: "Granola of Your Dreams with Milk or Yogurt; Brioche Donut and Hole; Apple Crumble Pie Slice; Heavenly Cheesecake Slice; Dark Chocolate Explosion Cookie",
    //      vendorMenu: "Chicken Bone Broth; Chicken Salad Sandwich on Baguette; French Ham Sandwich on Baguette; Veal Schnitzel and Bitter Greens; Pomme Frites avec Sauces",
  //  vendorMenu: "Polipo Octopus Puttanesca; Vitello Veal and Roasted Mushrooms; Trippa atop Crispy Polenta; Cacio e Pere Ravioli; Tiramizucca",
      //      vendorMenu: "Grilled Cheese and Onion Marmalade Sandwich; Chargrilled Burger with Roquefort Cheese; Cubano and Arugula Sandwich; Apple Salad with Candied Walnuts; Banoffee Pie",
    const uuidv1 = require('uuid/v1');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vendors',[{ 
      id: uuidv1(),
      menuId: uuidv1(),
      firstName: "Einat",
      lastName: "Admony", 
      vendorName: "Little Egypt",
      email: 'eadmony@gmail.com',
      username: 'eadmony',
      password_hash: 'iamironman',
      country: 'USA',
      latitude: 40.821796, 
      longitude: -73.948323,
      createdAt: "2018-10-01 03:03:03",
      updatedAt: "2018-10-01 03:03:03",
    },
{ 
      id: uuidv1(),
      menuId: uuidv1(),
      firstName: "Umber",
      lastName: "Ahmad", 
      vendorName: "Yummy",
      email: 'uahmad@gmail.com',
      username: 'uahmad',
      password_hash: 'iamironman',
      country: 'USA',
      latitude: 40.820220, 
      longitude: -73.951240,
      createdAt: "2018-10-01 03:03:03",
      updatedAt: "2018-10-01 03:03:03",
    },
{ 
      id: uuidv1(),
      menuId: uuidv1(),
      firstName: "Alex",
      lastName: "Baker", 
      vendorName: "Cafe",
      email: 'abaker@gmail.com',
      username: 'abaker',
      password_hash: 'iamironman',
      country: 'USA',
      latitude: 40.821731, 
      longitude: -73.952955, 
      createdAt: "2018-10-01 03:03:03",
      updatedAt: "2018-10-01 03:03:03",
    },
{ 
      id: uuidv1(),
      menuId: uuidv1(),
      firstName: "Lidia",
      lastName: "Bastianich", 
      vendorName: "Mangia",
      email: 'lbastianich@gmail.com',
      username: 'lbastianich',
      password_hash: 'iamironman',
      country: 'USA',
      latitude: 40.821305, 
      longitude: -73.950452, 
      createdAt: "2018-10-01 03:03:03",
      updatedAt: "2018-10-01 03:03:03",

    },
{ 
      id: uuidv1(),
      menuId: uuidv1(),
      firstName: "’April",
      lastName: "Bloomfield", 
      vendorName: "Piglet",
      email: 'abloomfield@gmail.com',
      username: 'abloomfield',
      password_hash: 'iamironman',
      country: 'USA',
      latitude: 40.824143,
      longitude: -73.945084,
      createdAt: "2018-10-01 03:03:03",
      updatedAt: "2018-10-01 03:03:03",
    }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('Vendors', null, {});

  }
};