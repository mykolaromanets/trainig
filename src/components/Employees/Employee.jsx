import React from "react";
import { EmployeeFilter } from "./EmployeeFilter";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => { 
    return (
        <div>
            <EmployeeFilter />
            <EmployeeList />
    )
}