export function updateCriterion(id, name) {
    if (!id || !name.length) return;
    return new Promise((resolve) => {
        BX24.callMethod('entity.item.update', {
            ENTITY: 'rates',
            ID: id,
            NAME: name
        }, res => {
            resolve(res);
        });
    });
}
