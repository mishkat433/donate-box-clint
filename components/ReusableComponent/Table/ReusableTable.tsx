


import { useState } from "react";

// type Colum = {
//     header: string;
//     orgName: string
// }

type TableProps = {
    columns: string[];
    data: any[];
    tableRow: (item: any, index: number) => React.ReactNode;
    actions?: {
        icon?: React.ElementType | any;
        label: string;
        showMOdal?: {
            name: string;
            status: boolean;
        };
        onClick: (item: any) => void;
    }[];
    emptyMessage?: string;
};

const ReusableTable = ({ columns, data, tableRow, actions = [], emptyMessage = "No data available" }: TableProps) => {

    const handleActionClick = (action: { onClick: (item: any) => void }, item: any) => {
        action.onClick(item);
    };

    return (
        <div className="table-container">
            {data?.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr className="bg-primary-red text-white-text rounded-md text-center">
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                            {actions.length > 0 && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={index} className="text-center">
                                {tableRow(item, index)}
                                {actions.length > 0 && (
                                    <td className="flex justify-center items-center gap-1">
                                        {actions.map((action, actionIndex) => {
                                            return (
                                                action?.showMOdal?.status ?
                                                    <label htmlFor={action.showMOdal.name} key={actionIndex} onClick={() => handleActionClick(action, item)} className=" cursor-pointer ">
                                                        {action.icon && (action.icon)}
                                                        {!action.icon && action.label}
                                                    </label>
                                                    :
                                                    <button key={actionIndex} onClick={() => handleActionClick(action, item)} className=" cursor-pointer ">
                                                        {action.icon && (action.icon)}
                                                        {!action.icon && action.label}
                                                    </button>
                                            );
                                        })}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-primary-red py-2">{emptyMessage}</p>
            )}

        </div>
    );
};

export default ReusableTable;
