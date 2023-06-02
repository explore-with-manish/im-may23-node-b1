import React, { Component } from 'react';
import DataTable from '../common/DataTable';
import employeesApiClient from '../../services/employee-api-client';

class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        employeesApiClient.getAllEmployees().then(data => {
            this.setState({ employees: [...data] });
        });
    }

    render() {
        return (
            <div className='container text-center'>
                <h2 className='text-info'>React Application</h2>
                <button onClick={this.loadData} className='btn btn-primary'>Load Data</button>

                <DataTable items={this.state.employees}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Employees Table</h4>
                </DataTable>
            </div>
        );
    }
}

export default RootComponent;