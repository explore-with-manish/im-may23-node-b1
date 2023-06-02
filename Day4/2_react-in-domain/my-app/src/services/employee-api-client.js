const employeesApiClient = {
    getAllEmployees: function() {
        return new Promise((resolve, reject) => {
            fetch("/api/employees").then(response => {
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