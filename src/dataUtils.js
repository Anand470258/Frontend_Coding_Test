// dataUtils.js

import fs from 'fs';
import path from 'path';
const dataFilePath = path.resolve(__dirname, 'db.json');

const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

const writeData = (data) => {
  try {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync(dataFilePath, jsonData, 'utf8');
    console.log('Data successfully written to file.');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};

module.exports = { readData, writeData };
