import React from 'react';
// import cls from './showEmployee.module.css'

export function ShowEmployee({employee, criteria}) {
    const domain = window.location.hostname;
    console.log(criteria)

    return  (
        <div className='col-6'>
            <div className='card mt-2 position-relative h-100'>
                <div className='card-body row'>
                    <div className='col-2'>
                        <img className='rounded-circle w-100' src={`https://avtorit24.ru${employee.photo}`}/>
                        {/* <img className='rounded-circle w-100' src={`https://${domain}${employee.photo}`}/> RELEASE */}
                    </div>
                    <div className='col-7 ps-0'>
                        <h4>{employee.name}</h4>
                        <span>Средний балл: 0/10</span>
                    </div>
                    <div className='col-3'> 
                        <button className='text-light rounded border border-primary bg-primary px-2 py-1'>История</button>
                    </div>
                    <div className='px-2 m-0 mt-2'>
                        <div className='border rounded border-secondary-subtle'>
                            <ul className="list-group list-group-flush gy-1">
                                {criteria.map(criterion => 
                                    <li key={criterion.ID} className="list-group-item">{criterion.NAME}: 10/10</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}