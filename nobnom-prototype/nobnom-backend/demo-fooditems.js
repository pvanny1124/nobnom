// 'use strict';
// //vendorMenu: "Challah and Hummus; Harissa Falafel; Chicken Tagine Couscous; Tbecha Short Rib Couscous; Date Lime Banana Smoothie",
// //      vendorMenu: "Granola of Your Dreams with Milk or Yogurt; Brioche Donut and Hole; Apple Crumble Pie Slice; Heavenly Cheesecake Slice; Dark Chocolate Explosion Cookie",
//     //      vendorMenu: "Chicken Bone Broth; Chicken Salad Sandwich on Baguette; French Ham Sandwich on Baguette; Veal Schnitzel and Bitter Greens; Pomme Frites avec Sauces",
//   //  vendorMenu: "Polipo Octopus Puttanesca; Vitello Veal and Roasted Mushrooms; Trippa atop Crispy Polenta; Cacio e Pere Ravioli; Tiramizucca",
//       //      vendorMenu: "Grilled Cheese and Onion Marmalade Sandwich; Chargrilled Burger with Roquefort Cheese; Cubano and Arugula Sandwich; Apple Salad with Candied Walnuts; Banoffee Pie",
// const uuidv1 = require('uuid/v1');
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('FoodItems',[{ 
//       menuId: uuidv1("c3d17100-0379-11e9-ae78-59efd8ba9c66"),
//       itemName: "Challah and Hummus",
//       description: "a very nice hummus",
//       price: 6,
//       category: "Falafel",
//       createdAt: "2018-10-01 03:03:03",
//       updatedAt: "2018-10-01 03:03:03",
//     },
//     { 

//         menuId: uuidv1("c3d17100-0379-11e9-ae78-59efd8ba9c66"),
//         itemName: "Harissa Falafel",
//         description: "a very nice..falafel",
//         price: 7,
//         category: "Falafel",
//         createdAt: "2018-10-01 03:03:03",
//         updatedAt: "2018-10-01 03:03:03",
//     },
// { 
//     menuId: uuidv1("c3d17100-0379-11e9-ae78-59efd8ba9c66"),
//     itemName: "Chicken Tagine Couscous",
//     description: "some fiine couscous though",
//     price: 6,
//     category: "Chicken",
//     createdAt: "2018-10-01 03:03:03",
//     updatedAt: "2018-10-01 03:03:03",
//   },
// { 
//     id: uuidv1(),
//     menuId: uuidv1("c3d17100-0379-11e9-ae78-59efd8ba9c66"),
//     itemName: "Date Lime Banana Smoothie",
//     description: "hmmmm...bananatastic",
//     price: 8,
//     category: "Smoothies",
//     createdAt: "2018-10-01 03:03:03",
//     updatedAt: "2018-10-01 03:03:03",

//     },


//     ], {});
//   },

//   down: (queryInterface, Sequelize) => {
  
//     return queryInterface.bulkDelete('FoodItems', null, {});

//   }
// };