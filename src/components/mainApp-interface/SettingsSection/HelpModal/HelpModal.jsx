import React from 'react';
import { Modal } from 'react-bootstrap';

export function HelpModal({ showHelp, setShowHelp }) {
    return (
        <Modal
            show={showHelp}
            fullscreen
            onHide={() => setShowHelp(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Помощь</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Спасибо за установку приложения «Оценка сотрудников»!</h5>
                <article>
                    <h5>Краткий экскурс</h5>
                    <p>«Оценка сотрудников» – приложение, позволяющее вам вести статистику среди сотрудников по созданным вами критериям. После устновки приложения, в интерфейс задач, наряду с вкладками «комментарии» и «история», встроится новая – «Оценка сотрудников».</p>
                    
                </article>
            </Modal.Body>
        </Modal>
    );
}
