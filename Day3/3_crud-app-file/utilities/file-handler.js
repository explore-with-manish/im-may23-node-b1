const path = require('path');
const fs = require('fs');

const filePath = path.join(process.cwd(), "data", "employees.json");

exports.readData = function () {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err)
                reject(`Error reading file from disk: ${err}`);
            else {
                const employees = JSON.parse(data);
                resolve(employees);
            }
        });
    })
}

exports.writeData = function (data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), 'utf-8', (err)=>{
            if(err) 
                reject(`Error writing file on disk: ${err}`);
            else {
                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err)
                        reject(`Error reading file from disk: ${err}`);
                    else {
                        const employees = JSON.parse(data);
                        resolve(employees);
                    }
                });
            }
        });
    })
}