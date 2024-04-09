export const getSectionId = (function createEntity(
    savedSectionsId = { criteriaSection: undefined, ratesSection: undefined },
) {
    return function () {
        return new Promise((resolve) => {
            if (
                savedSectionsId.criteriaSection &&
                savedSectionsId.ratesSection
            ) {
                resolve(savedSectionsId);
                return;
            }
            BX24.callMethod('entity.get', {}, (res) => {
                const createdEntities = res.data();
                const entity = createdEntities.find(
                    (createdEntity) => createdEntity.ENTITY == 'rates',
                );
                if (entity) {
                    BX24.callMethod(
                        'entity.section.get',
                        {
                            ENTITY: 'rates',
                            FILTER: {
                                NAME: 'creteria',
                            },
                        },
                        (res) => {
                            savedSectionsId.criteriaSection = res.data()[0]?.ID;
                            BX24.callMethod(
                                'entity.section.get',
                                {
                                    ENTITY: 'rates',
                                    FILTER: {
                                        NAME: 'userRates',
                                    },
                                },
                                (res) => {
                                    savedSectionsId.ratesSection =
                                        res.data()[0]?.ID;
                                    resolve(savedSectionsId); // sections id
                                },
                            );
                        },
                    );
                } else {
                    BX24.callMethod(
                        'entity.add',
                        { ENTITY: 'rates', NAME: 'rateU-app' },
                        (res) => {
                            BX24.callMethod(
                                'entity.section.add',
                                {
                                    ENTITY: 'rates',
                                    NAME: 'creteria',
                                    DESCRIPTION:
                                        'Критерии для оценки сотрудников',
                                },
                                (resCriteriaSection) => {
                                    savedSectionsId.criteriaSection =
                                        resCriteriaSection.data();
                                    BX24.callMethod(
                                        'entity.section.add',
                                        {
                                            ENTITY: 'rates',
                                            NAME: 'userRates',
                                            DESCRIPTION: 'Оценки сотрудников',
                                        },
                                        (resRatesSection) => {
                                            BX24.callBatch(
                                                [
                                                    [
                                                        'entity.item.property.add',
                                                        {
                                                            ENTITY: 'rates',
                                                            PROPERTY: 'TASK_ID',
                                                            NAME: 'task id in rate',
                                                            TYPE: 'N',
                                                        },
                                                    ],
                                                    [
                                                        'entity.item.property.add',
                                                        {
                                                            ENTITY: 'rates',
                                                            PROPERTY: 'USER_ID',
                                                            NAME: 'user id in rate',
                                                            TYPE: 'N',
                                                        },
                                                    ],
                                                    [
                                                        'entity.item.property.add',
                                                        {
                                                            ENTITY: 'rates',
                                                            PROPERTY:
                                                                'CRITERION_ID',
                                                            NAME: 'criterion id in rate',
                                                            TYPE: 'N',
                                                        },
                                                    ],
                                                    [
                                                        'entity.item.property.add',
                                                        {
                                                            ENTITY: 'rates',
                                                            PROPERTY: 'COMMENT',
                                                            NAME: 'comment in rate',
                                                            TYPE: 'S',
                                                        },
                                                    ],
                                                    [
                                                        'entity.item.property.add',
                                                        {
                                                            ENTITY: 'rates',
                                                            PROPERTY: 'RATE',
                                                            NAME: 'rate value in rate',
                                                            TYPE: 'N',
                                                        },
                                                    ],
                                                ],
                                                (res) => {
                                                    savedSectionsId.ratesSection =
                                                        resRatesSection.data(); // Вот тут ошибка при первом встраивании
                                                    resolve(savedSectionsId); // section id
                                                },
                                            );
                                        },
                                    );
                                },
                            );
                        },
                    );
                }
            });
        });
    };
})();