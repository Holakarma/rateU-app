export const getSectionId = (function createEntity(savedCategoryId) {
    return function () {
        return new Promise((resolve) => {
            if (savedCategoryId) {
                resolve(savedCategoryId[0]);
                return ;
            }
            BX24.callMethod('entity.get', {}, (res) => {
                const createdEntities = res.data();
                const entity = createdEntities.find(
                    (createdEntity) => createdEntity.ENTITY == 'rates',
                );
                // console.log(entity)
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
                            savedCategoryId = res.data();
                            resolve(savedCategoryId); // section id
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
                                (res) => {
                                    savedCategoryId = res.data();
                                    resolve(savedCategoryId); // section id
                                },
                            );
                        },
                    );
                }
            });
        });
    };
})();

/* BX24.callMethod('entity.add', {ENTITY: "rates", NAME:"rateU-app"}, res => {
    console.log(res)
}) */
/* BX24.callMethod('entity.get', {}, res => {
    console.log(res)
}) */



/* BX24.callMethod('entity.delete', {ENTITY: "rates"}, res => {
    console.log(res)
}) */

/* 
BX24.callMethod('entity.section.add', {ENTITY: "rates", NAME:"creteria", DESCRIPTION: "Созданные критерии для оценки сотрудников"}, res => {
    console.log(res)
})
*/

/* BX24.callMethod('entity.section.get', {ENTITY: "rates"}, res => {
    console.log(res)
}) */

/* BX24.callMethod('entity.item.property.add', {ENTITY: "rates", PROPERTY: "CRITERION_NAME", NAME:"name of criterion", TYPE: "S"}, res => {
    console.log(res)
}) */
/* BX24.callMethod('entity.item.property.delete', {ENTITY: "rates", PROPERTY: "CRITERION_NAME"}, res => {
    console.log(res)
}) */

/* BX24.callMethod('entity.item.add', {
	ENTITY: 'rates',
	NAME: 'Пунктуальность',
	SECTION: 134
}, res => {
    console.log(res)
}); */
// BX24.callMethod('entity.item.get', {
// 	ENTITY: 'rates', SECTION:134}, res => {
//     console.log(res)
// });
