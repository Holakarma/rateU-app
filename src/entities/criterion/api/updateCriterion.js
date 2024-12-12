export function updateCriterion(id, name, isActive = true) {
    if (!id || !name.length) return;
    return new Promise((resolve) => {
        BX24.callMethod('entity.item.update', {
            ENTITY: 'rates',
            ID: id,
            NAME: name,
            ACTIVE: `${isActive ? 'Y' : 'N'}`
        }, res => {
            resolve(res);
        });
    });
}
