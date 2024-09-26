import React, { useEffect } from 'react';
import { ShowCriterionRate } from '../ShowCriterionRate/ShowCriterionRate';
import { RatesHistoryButton } from '../RatesHistoryButton/RatesHistoryButton';
import { getUserInfo } from '../../../../utils/getUserInfo';
import cls from '../userSection.module.css';
import { User } from '../../../../icons/User/User';
import { getUsers } from '../../../../utils/createSavedUsers';
import { MatrixButton } from '../MatrixButton/MatrixButton';
import deepCopy from "../../../../utils/deepCopy";
import useAccessRights from '../../../../utils/useAccessRights';

export function ShowEmployee({
    employee,
    setUserRates,
    selectedCriteria,
    fetchedRates,
    rights,
}) {
    const [countRates, setCountRates] = React.useState(0);
    const sum = React.useRef(0);
    const count = React.useRef(0);

    const [employeeRates, setEmployeeRates] = React.useState([]);

    const [img, setImg] = React.useState(null);

    useEffect(async () => {
        const userInfo = await getUsers([employee.id]);
        setImg(userInfo[0]?.PERSONAL_PHOTO);
    }, []);

    const haveAccess = useAccessRights(rights, employee);

    // switch (rights) {
    //     case 'isAdmin':
    //         setAccess(true);
    //         break;
    //     case 'haveSub':
    //         const subordinates = (await getUserInfo()).SUBORDINATES.map(
    //             (sub) => sub.ID,
    //         );
    //         if (subordinates.includes(employee.id)) setAccess(true);
    //         break;
    // }

    useEffect(() => {
        sum.current = 0;
        count.current = 0;
        setCountRates(0);
        setEmployeeRates(
            fetchedRates.filter(
                (fetchedRate) =>
                    fetchedRate.PROPERTY_VALUES.USER_ID === employee.id,
            ),
        );
    }, [fetchedRates, selectedCriteria]);

    const personalUrl = `https://${BX24.getDomain()}/company/personal/user/${employee.id}/`;

    // console.log(selectedCriteria) // выбранные критерии
    // console.log(employeeRates) // rate - оценка в конкретном критерии, есть таск и юзер
    // console.log(employee) // id, имя фамилия

    return (
        <div className="col-6">
            <div className={`${cls.card} card position-relative h-100`}>
                <div className="card-body row">
                    <div className="col-2">
                        {img && img?.length ? (
                            <img
                                className="rounded-circle w-100"
                                /* src={`${
                                    window.location.protocol
                                }//${BX24.getDomain()}${employee.photo}`} */
                                src={img}
                                alt={employee.name}
                            />
                        ) : (
                            <User className="rounded-circle w-100" />
                        )}
                    </div>
                    <div className="col-7 ps-0">
                        <h4>
                            <a
                                className={cls.EmployeeName}
                                href={personalUrl}
                                target="_blank"
                            >
                                {employee.name}
                            </a>
                        </h4>
                        <span>
                            Средний балл:
                            {countRates ? (
                                <span className="ms-1">
                                    {Math.round(
                                        (sum.current * 100) / count.current,
                                    ) / 100}
                                    <span className="opacity-50">/10</span>
                                </span>
                            ) : (
                                <i className="opacity-50 ms-1">Нет оценок</i>
                            )}
                        </span>
                    </div>
                    <div className="px-2 m-0 mt-2">
                        <div className="border rounded border-secondary-subtle">
                            <ul className="list-group list-group-flush gy-1">
                                {selectedCriteria.map((selectedCriterion) => (
                                    <ShowCriterionRate
                                        key={selectedCriterion.ID}
                                        employeeRates={employeeRates}
                                        criterion={selectedCriterion}
                                        access={haveAccess}
                                        getRate={(rate) => {
                                            count.current++;
                                            sum.current += rate;
                                            setCountRates(countRates + 1);
                                            setUserRates(userRates => {
                                                const newRates = deepCopy(userRates);

                                                return Object.assign(
                                                    newRates,
                                                    {
                                                        [employee.id]: {
                                                            ...userRates[employee.id],
                                                            [selectedCriterion.ID]: rate
                                                        }
                                                    }
                                                )
                                            }
                                            )
                                        }}
                                    />
                                ))}
                                {!haveAccess && (
                                    <li className="list-group-item opacity-75">
                                        <i>
                                            Недостаточно прав для просмотра
                                            оценок
                                        </i>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex gap-2 justify-content-end'>
                        <div className="mt-2">
                            {employeeRates.length === 0 || !haveAccess ? null : (
                                <RatesHistoryButton
                                    criteria={selectedCriteria}
                                    employee={employee}
                                    employeeRates={employeeRates}
                                />
                            )}
                        </div>
                        <div className="mt-2">
                            {employeeRates.length === 0 ? null : (
                                <MatrixButton
                                    criteria={selectedCriteria}
                                    employee={employee}
                                    employeeRates={employeeRates}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
