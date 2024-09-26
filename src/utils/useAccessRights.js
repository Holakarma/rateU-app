import React, { useEffect } from "react";
import { getUserInfo } from "./getUserInfo";

export default function useAccessRights(rights, employee) {
    
    const [haveAccess, setHaveAccess] = React.useState(null);

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
            setHaveAccess(await isHaveAccess(rights, employee));
        })();
    }, [rights]);


    return haveAccess;
}