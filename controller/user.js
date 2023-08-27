// ! Importing
const http = require("http");
const fs = require("fs");

// ! Data
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

// ! Controllers
exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllUsers = (req, res) => {
  res.status(201).json(users);
};

exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.putUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  products.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.patchUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  products.splice(userIndex, 1, { ...user, ...req.body, id: id });
  res.status(201).json();
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};
