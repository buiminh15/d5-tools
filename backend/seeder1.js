import fs from 'fs'
import mongoose from 'mongoose'
// const fs =require('fs')
// const mongoose = require( 'mongoose')


let url =
  'mongodb+srv://minhbb:12345678a@cluster0.grd6k.mongodb.net/d5-test?retryWrites=true&w=majority';

// Load models
// const Testcase = require( './models/Testcase.model')
// import WebTestcase from './models/web_testcase.model'
import WebTest from './models/webtest.model'

// Connect to DB
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
// const testcases = JSON.parse(
//   fs.readFileSync(`${__dirname}/demo.json`, 'utf-8')
// );
const testcases = JSON.parse(
  fs.readFileSync(`${__dirname}/demo2.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
  try {
    // await WebTestcase.create(testcases);
    await WebTest.insertMany(testcases);
    console.log('Data imported...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// Delete data

const deleteData = async () => {
  try {
    await WebTestcase.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
};


if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
