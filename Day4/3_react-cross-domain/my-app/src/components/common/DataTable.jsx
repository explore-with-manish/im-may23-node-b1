import React from 'react';

const Ths = ({ item }) => {
    var allHeads = Object.keys(item).concat(["", ""]);

    var ths = allHeads.map((item, index) => {
        return <th key={index}>{item.toUpperCase()}</th>
    });

    return (
        <tr>
            {ths}
        </tr>
    )
}

const Tds = ({ item, onDelete, onSelect }) => {
    var allValues = Object.values(item).concat([
        <a href="/#" className="text-warning" onClick={
            (e) => {
                e.preventDefault();
                if (onSelect)
                    onSelect(item);
            }
        }>Edit</a>,
        <a href="/#" className="text-danger" onClick={
            (e) => {
                e.preventDefault();
                if (onDelete) {
                    if (window.confirm('Are you sure, you want to delete the record?')) {
                        onDelete(item.id, e);
                    }
                }
            }
        }>Delete</a>
    ]);

    var tds = allValues.map((item, index) => {
        return <td key={index}>{item}</td>
    });

    return (
        <tr>
            {tds}
        </tr>
    )
}

const DataTable = ({ items, children, onDelete, onSelect }) => {
    if (items && items.length) {
        var item = items[0];
        var ths = <Ths item={item} />
        var tds = items.map((item, index) => {
            return <Tds key={index} item={item} onDelete={onDelete} onSelect={onSelect} />
        });
    }

    return (
        <div className="mt-2">
            {children ? children : null}
            <table className="table table-hover">
                <thead>
                    {ths}
                </thead>
                <tbody>
                    {tds}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;