export default function deleteCriterion(id) {
    if (!id) return;
    return new Promise(resolve => {
        BX24.callMethod('entity.item.delete', {
            ENTITY: 'rates',
            ID: id
        }, res => {
            resolve(res);
        });
    })
}