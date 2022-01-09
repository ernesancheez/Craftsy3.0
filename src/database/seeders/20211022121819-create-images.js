'use strict';

const imagenes = ['img-phone-01.png','img-phone-02.png','img-phone-03.png','img-phone-04.png','img-phone-05.png','img-phone-06.png'];

const images = [];

for (let i = 0; i < 360; i++) {
  for (let index = 0; index < 3; index++) {
    var image = {
      file : imagenes[Math.floor(Math.random() * (5 - 0)) + 0],
      productId : i + 1,
      createdAt : new Date,
      updatedAt : new Date
    }
    images.push(image)
    
  }
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Images',images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
