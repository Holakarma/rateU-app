import { getSectionId } from './createEntity';

export default function addCriterion(name) {
    if (!name.length) {
        return;
    }
    return new Promise(async (resolve, reject) => {
        const sectionId = (await getSectionId().catch((e) => reject(e)))
            .criteriaSection;
        BX24.callMethod(
            'entity.item.add',
            {
                ENTITY: 'rates',
                NAME: name,
                SECTION: sectionId,
                ACCESS: { AU: 'R' },
            },
            (res) => {
                if (res.error()) {
                    reject(new Error(res.error().ex.error_description));
                    return;
                }
                resolve(res);
            },
        );
    });
}
