const faker=require('faker');

faker.local='es';

const get = ()=>({
      nombre:faker.name.firstName(),
      descripcion:faker.commerce.productDescription(),
      codigo:faker.datatype.number(),
      url:faker.image.imageUrl(),
      price:faker.commerce.price(),
      stock:faker.datatype.number(),

})

module.exports={get}