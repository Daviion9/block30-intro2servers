const express = require('express');
const path = require('path');

const app = express()
const PORT = 3000;

const Employees = [
    { 
        name: 'bill',
        id:1 ,
        position: salesman,
    },
    {
        name: 'carson',
        id:2 ,
        position: manager,
    },
    {
        name: 'jordan',
        id:3 ,
        position: intern,
    },
    {
        name: 'mason',
        id:4 ,
        position: maintnance-tech,
    },
    {
        name: 'Mike',
        id:5 ,
        position: security-detail,
    },
    {
        name: 'Ashlii',
        id:6 ,
        position: developer,
    }
];

app.get('/api/hello', (req, res) => {
    res.send('Hello World')
})

app.get('/api/employees', (req, res) => {
    res.send()
})

app.get('/api/employees', (req,res) => {
    res.status(200).json(employees);
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/employees', (req, res) => {
    res.sendFile(path.join(__dirname, '/employees.html'));
})

app.listen(PORT);