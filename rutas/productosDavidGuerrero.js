const express = require('express');
const router = express.Router();

const data = [
  {id: 1, nombre: 'Zapatos A', valor: 19.3, enStock: true, createdOn: new Date()},
  {id: 2, nombre: 'Zapatos B', valor: 206.3, enStock: false, createdOn: new Date()},
  {id: 3, nombre: 'Zapatos C', valor: 56.0, enStock: true, createdOn: new Date()},
  {id: 4, nombre: 'Zapatos D', valor: 63.8, enStock: true, createdOn: new Date()},
  {id: 5, nombre: 'Zapatos E', valor: 39.4, enStock: false, createdOn: new Date()},
];

router.get('/', function (req, res) {
  res.status(200).json(data);
});

router.get('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    //TODO: Retornar los valores de la variable found
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', function (req, res) {
  let itemIds = data.map(item => item.id);

  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let newItem ={id: newId, nombre: req.body.nombre, valor: req.body.valor, enStock: false, createdOn: new Date()}

  data.push(newItem);

  res.status(201).json(newItem);
});


router.put('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    // TODO: Actualizar los valores (similar a como se hizo en post)
    
  let updated ={
    id: found.id,
    nombre: req.body.nombre, 
    valor: req.body.valor,
    enStock: req.body.enStock, 
    createdOn: new Date()}

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updated);

    res.status(200).json(data);
    
  } else {
    res.sendStatus(500);
  }
});

router.delete('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);
    res.status(200).json(data);
  }else{
    res.sendStatus(500);
  }

  
});

/*
router.<<todo_post>>('/', function (req, res) {
  let itemIds = data.map(item => item.id);
  let orderNums = data.map(item => item.order);

  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

  let newItem = //TODO: Completar con nuevo producto 

  data.push(newItem);

  res.status(201).json(newItem);
});

router.<<todo_put>>('/:id', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    // TODO: Actualizar los valores (similar a como se hizo en post)

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updated);

    //TODO: Retornar status 204
  } else {
      //TODO: Retornar status 204
  }
});

router.<<todo_delete>>('<<todo_delete>>', function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);
  }

  //TODO: Retornar status 204
});
*/
module.exports = router;