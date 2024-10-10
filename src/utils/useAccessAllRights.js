import React, { useEffect } from "react";
import { getUserInfo } from "./getUserInfo";

export default function useAccessAllRights(rights, employees) {
    const [allHaveAccess, setAllHaveAccess] = React.useState([]);

    const isHaveAccess = async (rights, employee) => {
        switch (rights) {
            case 'isAdmin':
                return true;
            case 'haveSub':
                const subordinates = (await getUserInfo()).SUBORDINATES.map(
                    (sub) => sub.ID,
                );
                return !!subordinates.includes(employee.id);
            default:
                return false;
        }
    }

    useEffect(() => {
        (async () => {
            const checkAccess = async () => {
                const accessResults = await Promise.all(
                    employees.map(async (employee) => {
                        return await isHaveAccess(rights, employee);
                    })
                );
    
                const employeesWithAccess = employees.filter((_, index) => accessResults[index]);
                setAllHaveAccess(employeesWithAccess);
            };
    
            checkAccess();
        })();
    }, [rights, employees]);
    
    return allHaveAccess;
}