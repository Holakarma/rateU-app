import { getSectionId } from './createEntity';

export default function addCriterion(name) {
    if (!name.length) {
        return;
    }
    return new Promise(async (resolve) => {
        const sectionId = await getSectionId();
        BX24.callMethod(
            'entity.item.add',
            {
                ENTITY: 'rates',
                NAME: name,
                SECTION: sectionId,
            },
            (res) => {
                resolve(res);
            },
        );
    });
} 
