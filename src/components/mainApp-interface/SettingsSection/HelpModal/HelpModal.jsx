import React from 'react';
import { Modal } from 'react-bootstrap';
import { HiddenImage } from './HiddenImage';

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
                <p>
                    <strong>
                        Спасибо за установку приложения «Оценка сотрудников»!
                    </strong>
                </p>
                <article>
                    <h5>Краткий экскурс</h5>
                    <p>
                        «Оценка сотрудников» — это приложение, которое поможет
                        вам собирать и анализировать информацию о работе
                        сотрудников. Вы сможете оценивать их по критериям,
                        которые сами определите. После установки приложения в
                        интерфейс задач добавится новая вкладка — «Оценка
                        сотрудников».
                        <HiddenImage
                            src={'./assets/img/tutorial-1.png'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <p>
                        Оценка ответственного и соисполнителей в задаче
                        происоходит по настроенным заранее критериям.
                        Сотрудников можно оценить по каждому критерию по шкале
                        от 0 до 10, а также есть возможность оставить
                        комментарий к конкретной оценке.
                    </p>
                    <p>
                        После выставления баллов и написания комментариев к
                        оценкам не забудьте <b>сохранить</b> оценки и дождаться
                        окончания загрузки.
                        <HiddenImage
                            src={'./assets/img/tutorial-3.png'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <p>
                        Чтобы перейти к основному интерфейсу приложения, нажмите
                        на кнопку «перейти к приложению» в верхней части экрана
                        в разделе оценок или воспользуйтесь меню слева на вашем
                        портале.
                    </p>
                    <p>
                        Перейдя к основному приложению, вы увидете настройку
                        фильтров для статистики:
                    </p>
                    <ul>
                        <li>
                            выбор сотрудников, карточки которых отобразятся на
                            экране;
                        </li>
                        <li>
                            выбор критериев, по которым будут производиться
                            анализ и подсчёты;{' '}
                            <i className=" text-danger">
                                для применения выбранных критериев не забывайте
                                сохранять изменения
                            </i>
                        </li>
                        <li>
                            выбор промежутка дат, за который будет производиться
                            статистика.{' '}
                            <i className=" text-danger">
                                здесь также потребуется сохранение
                            </i>
                        </li>
                    </ul>
                    <p>
                        После настройки фильтров отобразятся карточки
                        сотрудников, их средние баллы по каждому из выбранных
                        критериев и общий средний балл, который рассчитывается
                        из выведенных на экран критериев.
                    </p>
                    <p>
                        В правой верхней части интерфейса находится значок{' '}
                        <b>настроек</b> приложения.
                        <HiddenImage
                            src={'./assets/img/tutorial-2.png'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <p>
                        В этом разделе (при соответсвии прав) вы можете изменять
                        и настраивать созданные критерии. Для вашего удобства мы
                        предустановили некоторые критерии.
                    </p>
                </article>
                <article>
                    <h5>Права доступа</h5>
                    <p>Оценить сотрудника можно, если:</p>
                    <ul>
                        <li>
                            Вы обладаете правами администратора (не
                            распространяется на оценку себя);
                        </li>
                        <li>
                            Вы являетесь постановщиком задачи, в которой
                            происходит оценка;
                        </li>
                        <li>
                            Сотрудник является вашим прямым или косвенным
                            подчинённым (согласно структуре компании на вашем
                            портале).
                        </li>
                    </ul>
                    <p>
                        Просмотр подробной статистики сотрудника доступен
                        согласно следующим условиям:
                    </p>
                    <ul>
                        <li>
                            Администраторы портала имеют доступ к просмотру всех
                            оценок;
                        </li>
                        <li>
                            Руководители отделов имеют доступ к просмотру всех
                            оценок своих прямых и непрямых подчинённых.
                        </li>
                    </ul>
                </article>
            </Modal.Body>
        </Modal>
    );
}
