import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed users
    console.log('Seeding users...');
    for (let i = 0; i < 10; i++) {
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.name.firstName(),
          password: faker.internet.password(),
        },
      });
    }

    // Seed products
    console.log('Seeding products...');
    for (let i = 0; i < 20; i++) {
      await prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          price: parseFloat(faker.commerce.price()),
          stock: faker.datatype.number({ min: 1, max: 100 }),
        },
      });
    }

    // Seed services
    console.log('Seeding services...');
    for (let i = 0; i < 10; i++) {
      await prisma.service.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          price: parseFloat(faker.commerce.price()),
        },
      });
    }

    console.log('Seed completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
