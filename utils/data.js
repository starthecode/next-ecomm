import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'Jane',
      email: 'user@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },

    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Puma',
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 80,
      brand: 'Addidas',
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Slim Pants',
      slug: 'slim-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 80,
      brand: 'Hardy',
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pant',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 80,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pant',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 80,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular pant',
    },
  ],
};

export default data;
