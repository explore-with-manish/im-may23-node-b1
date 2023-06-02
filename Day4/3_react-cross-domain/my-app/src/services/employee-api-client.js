const employeesApiClient = {
    getAllEmployees: function() {
        return new Promise((resolve, reject) => {
            fetch("http://localhost:3000/api/employees").then(response => {
                response.json().then(result => {
                    resolve(result.data);
                }).catch(err => {
                    reject("Parsing Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            })
        }); 
    }
};

export default employeesApiClient;