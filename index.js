const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const members = require('./JSON/members');
const PORT = process.env.port || 5000;


app.use(express.json());
app.get('/api', (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.query.id)));
})

// Get all members
app.get('/', (req,res) => {
    res.json(members);
})

// get specific member
app.get('/:id', (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
})

// update a member
app.put('/:id', (req, res) => {
  console.log(req.body);
  res.json(members.map(member => {
    if(member.id === parseInt(req.params.id)){
      return {
        ...member,
        email: req.body.email,
      }
    } else return member;
  }))
})
// post a member
app.post('/', (req, res) => {
  members.push({
    "name" : req.body.name,
    "email" : req.body.email
  })

  res.json(members);
})

// delete a member
app.delete('/:id', (req, res) => {
  res.json(members.filter(member => member.id !== parseInt(req.params.id)));
})

app.listen(PORT, () => {
     console.log(`listening to port ${PORT}`);
})