exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(() => {
      return knex('products').del()
    })
    .then(() => {
      // Inserts seed entries
      return knex('articles').insert([{
          title: 'Hello World',
          body: 'say hi to the world',
          author: 'Albert Einstein'
        },
        {
          title: 'Da Kine',
          body: 'all about da kine',
          author: 'Unko Kimo'
        }
      ]);
    })
    .then(() => {
      return knex('products').insert([{
          name: "Shake-Weight",
          price: 20,
          inventory: 600
        },
        {
          name: "NOT--a-FLAMETHROWER",
          price: 100,
          inventory: 1000
        }
      ])
    });

};