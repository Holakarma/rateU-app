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
                <p className='fw-light'>
                    Спасибо за&nbsp;установку приложения &laquo;Оценка сотрудников&raquo;!
                </p>
                <article>
                    <h5 className='mt-4'>Краткий экскурс</h5>
                    <p>
                        &laquo;Оценка сотрудников&raquo;&nbsp;&mdash; это приложение, которое поможет
                        Вам собирать и&nbsp;анализировать информацию о&nbsp;работе
                        сотрудников. Вы&nbsp;сможете оценивать их&nbsp;по&nbsp;критериям,
                        которые сами определите. После установки приложения и
                        входа в&nbsp;него администратора
                        добавится <b>новая вкладка</b> &laquo;Оценка сотрудников&raquo; в
                        интерфейс задач.
                        <HiddenImage
                            src={'./assets/img/tutorial-1.webp'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <h5 className='mt-4'>Вкладка &laquo;Оценка сотрудников&raquo;</h5>
                    <p>
                        Оценка ответственного и&nbsp;соисполнителей в&nbsp;задаче
                        происходит по&nbsp;настроенным заранее критериям.
                        Сотрудников можно оценить по&nbsp;каждому критерию по&nbsp;шкале
                        от&nbsp;0&nbsp;до&nbsp;10, а&nbsp;также есть возможность оставить
                        комментарий к&nbsp;конкретной оценке.
                    </p>
                    <p>
                        После выставления баллов и&nbsp;написания комментариев не
                        забудьте <b>сохранить оценки</b> и&nbsp;дождаться
                        окончания загрузки.
                        <HiddenImage
                            src={'./assets/img/tutorial-3.webp'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <h5 className='mt-4'>Основной интерфейс приложения</h5>
                    <p>
                        Чтобы перейти к&nbsp;основному интерфейсу приложения, нажмите
                        на&nbsp;ссылку &laquo;Перейти к&nbsp;приложению&raquo; в&nbsp;верхней части экрана
                        в&nbsp;разделе оценок или воспользуйтесь меню слева на&nbsp;вашем
                        портале.
                    </p>
                    <p>
                        Перейдя к&nbsp;основному приложению, Вы&nbsp;увидите настройку
                        фильтров для статистики:
                    </p>
                    <ul>
                        <li>
                            выбор сотрудников, карточки которых отобразятся на
                            экране;
                        </li>
                        <li>
                            выбор критериев, по&nbsp;которым будут производиться
                            анализ и&nbsp;подсчёты{' '}
                            <b>
                                (для применения выбранных критериев не&nbsp;забывайте
                                сохранять изменения)
                            </b>
                            ;
                        </li>
                        <li>
                            выбор промежутка дат, по&nbsp;которому будет отображаться
                            статистика{' '}
                            <b>
                                (здесь также потребуется сохранение)
                            </b>
                            .
                        </li>
                    </ul>
                    <p>
                        После настройки фильтров отобразятся карточки
                        сотрудников, их&nbsp;средние баллы по&nbsp;каждому из&nbsp;выбранных
                        критериев и&nbsp;общий средний балл, который рассчитывается
                        из&nbsp;выведенных на&nbsp;экран критериев.
                    </p>
                    <p>
                        В&nbsp;правой верхней части интерфейса находится
                        значок <b>настроек приложения</b>.
                        <HiddenImage
                            src={'./assets/img/tutorial-2.webp'}
                            alt={'Место встройки'}
                        />
                    </p>
                    <p>
                        В&nbsp;этом разделе (при соответствии прав) Вы&nbsp;можете изменять
                        и&nbsp;настраивать созданные критерии. Для Вашего удобства мы
                        предустановили некоторые критерии.
                    </p>
                </article>
                <article>
                    <h5 className='mt-4'>Права доступа</h5>
                    <p>Оценить сотрудника можно, если:</p>
                    <ul>
                        <li>
                            Вы&nbsp;обладаете правами администратора (не
                            распространяется на&nbsp;оценку себя);
                        </li>
                        <li>
                            Вы&nbsp;являетесь постановщиком задачи, в&nbsp;которой
                            происходит оценка;
                        </li>
                        <li>
                            сотрудник является вашим прямым или косвенным
                            подчинённым (согласно структуре компании на&nbsp;вашем
                            портале).
                        </li>
                    </ul>
                    <p>
                        Просмотр подробной статистики сотрудника доступен
                        согласно следующим условиям:
                    </p>
                    <ul>
                        <li>
                            администраторы портала имеют доступ к&nbsp;просмотру всех
                            оценок;
                        </li>
                        <li>
                            руководители отделов имеют доступ к&nbsp;просмотру всех
                            оценок своих прямых и&nbsp;непрямых подчинённых.
                        </li>
                    </ul>
                </article>
            </Modal.Body>
        </Modal>
    );
}
