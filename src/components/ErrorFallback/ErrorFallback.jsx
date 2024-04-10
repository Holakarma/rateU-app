import React from 'react';

export function ErrorFallBack({ error }) {
    return (
        <div className="card container my-4">
            <h1 className="text-danger">Ошибка!</h1>
            <p>{error.message || 'Что-то пошло не так'}</p>
        </div>
    );
}
