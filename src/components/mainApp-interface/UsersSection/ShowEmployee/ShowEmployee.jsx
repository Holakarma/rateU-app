import React from 'react';
import cls from './showEmployee.module.css'

export function ShowEmployee({employee}) {
    return  (
        <div className='col-6'>
            <div className='card mt-2 position-relative h-100'>
            <div className='card-body row'>
                <div className='col-2'>
                    <img className='rounded-circle w-100' src={`https://avtorit24.ru${employee.photo}`}/>
                </div>
                <div className='col-7'>
                    <h4>{employee.name}</h4>
                    <span fs-6>Средний балл: 0/10</span>
                </div>
                <div className='col-3'>
                    <button className='text-light rounded border border-primary bg-primary'>История</button>
                </div>
                <div className='border rounded border-secondary-subtle m-0 mt-2 row gy-1'>
                    <ul class="list-group list-group-flush col">
                        <li class="list-group-item">Ответственность: 10/10</li>
                        <li class="list-group-item">Проёбывание: 10/10</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    ) 
}