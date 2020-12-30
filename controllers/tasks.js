import fs from 'fs';
import { v4 as uuid } from 'uuid';

const dataPath = './data/tasks.json';

export const getTasks = (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(data));
    }
  });
};

export const createTask = (req, res) => {
  const newTask = { ...req.body, id: uuid() };

  fs.readFile(dataPath, function (err, data) {
    var json = JSON.parse(data);
    json.push(newTask);

    fs.writeFile(dataPath, JSON.stringify(json), (err) => {
      if (err) {
        throw err;
      } else {
        res.send(`Task successfully added`);
      }
    });
  });
};

export const deleteTask = (req, res) => {
  fs.readFile(dataPath, function (err, data) {
    var json = JSON.parse(data).filter((task) => task.id !== req.params.id);

    fs.writeFile(dataPath, JSON.stringify(json), (err) => {
      if (err) {
        throw err;
      } else {
        res.send(`Task successfully deleted`);
      }
    });
  });
};
