import React, { useEffect } from 'react';
import { ShowCriterionRate } from '../ShowCriterionRate/ShowCriterionRate';
import { RatesHistoryButton } from '../RatesHistoryButton/RatesHistoryButton';
import { getUserInfo } from '../../../../utils/getUserInfo';
import cls from '../userSection.module.css';
import { User } from '../../../../icons/User/User';
import { getUsers } from '../../../../utils/createSavedUsers';
import { MatrixButton } from '../MatrixButton/MatrixButton';

export function ShowEmployee({
    employee,
    selectedCriteria,
    fetchedRates,
    rights,
}) {
    const [countRates, setCountRates] = React.useState(0);
    const sum = React.useRef(0);
    const count = React.useRef(0);

    const [employeeRates, setEmployeeRates] = React.useState([]);

    const [access, setAccess] = React.useState(false);

    const [img, setImg] = React.useState(null);

    useEffect(async () => {
        const userInfo = await getUsers([employee.id]);
        setImg(userInfo[0]?.PERSONAL_PHOTO);
        switch (rights) {
            case 'isAdmin':
                setAccess(true);
                break;
            case 'haveSub':
                const subordinates = (await getUserInfo()).SUBORDINATES.map(
                    (sub) => sub.ID,
                );
                if (subordinates.includes(employee.id)) setAccess(true);
                break;
        }
    }, []);

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

    const isImg = employee.photo ? true : false;

    const personalUrl = `https://${BX24.getDomain()}/company/personal/user/${employee.id
        }/`;

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
                                        access={access}
                                        getRate={(rate) => {
                                            count.current++;
                                            sum.current += rate;
                                            setCountRates(countRates + 1);
                                        }}
                                    />
                                ))}
                                {!access && (
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
                            {employeeRates.length === 0 || !access ? null : (
                                <RatesHistoryButton
                                    criteria={selectedCriteria}
                                    employee={employee}
                                    employeeRates={employeeRates}
                                />
                            )}
                        </div>
                        <div className="mt-2">
                            {employeeRates.length === 0 || !access ? null : (
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
