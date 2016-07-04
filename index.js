var express = require('express'),
    app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.get('/customers/:id', function (request, response) {
  var customerId = parseInt(request.params.id),
      data = {};

  customers.forEach(function (customer) {
    if (customer.id === customerId) {
      data = customer;
    }
  });

  response.json(data);
});

app.get('/customers', function (request, response) {
  response.json(customers);
});

app.delete('/customers/:id', function (request, response) {
  var customerId = parseInt(request.params.id),
      data = {};

  customers.forEach(function (customer, id) {
    if (customer.id === customerId) {
      customers.splice(id, 1);
      data = { status: true };
    }
  });

  response.json(data);
});

app.get('/orders', function (request, response) {
  var orders = [];

  for (var i = 0, len = customers.length; i < len; i++) {
    if (customers[i].orders) {
      for (var j = 0, ordersLen = customers[i].orders.length; j < ordersLen; j++) {
        orders.push(customers[i].orders[j]);
      }
    }
  }

  response.json(orders);
});

app.listen(3000);

console.log('Express listening on port 3000');

var customers = [
  {
    id: 1,
    joined: '2000-12-02',
    name: 'John',
    city: 'Chandler',
    orderTotal: 9.9956,
    orders: [
      { id: 1, product: 'Shoes', total: 9.9956 }
    ]
  },
  {
    id: 3,
    joined: '2021-12-12',
    name: 'Tom',
    city: 'Los Angeles',
    orderTotal: 4.9956,
    orders: [
      { id: 3, product: 'Red Shoes', total: 4.9956 }
    ]
  },
  {
    id: 4,
    joined: '2012-02-12',
    name: 'Jay',
    city: 'Bakersfiled',
    orderTotal: 2.1156,
    orders: [
      { id: 4, product: 'Red Shoes', total: 2.1156 }
    ]
  },
  {
    id: 2,
    joined: '1965-01-25',
    name: 'Zed',
    city: 'Las Vegas',
    orderTotal: 19.99,
    orders: [
      { id: 2, product: 'Book', total: 19.99 }
    ]
  }  
];

 