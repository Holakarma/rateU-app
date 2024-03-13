import React from 'react';
import { Delete } from '../../../../icons/Delete/Delete';
import addCriterion from '../../../../utils/addCriterion';
import { getCriteria } from '../../../../utils/getCriteria';
import deleteCriterion from '../../../../utils/deleteCriterion';
import { updateCriterion } from '../../../../utils/updateCriterion';

/* BX24.callMethod('entity.delete', {ENTITY: "rates"}, res => {
    console.log(res)
}) */

export function CriterionInput({ criterion, refreshHandler }) {
    const [criterionName, setCriterionName] = React.useState(
        criterion ? criterion.NAME : '',
    );
    const [isCorrect, setCorrect] = React.useState(true);
    async function criterionHandler() {
        if (!criterionName.length) {
            setCorrect(false);
            return;
        }
        if (!criterion) {
            await addCriterion(criterionName);
            setCriterionName('');
        } else {
            await updateCriterion(criterion.ID, criterionName);
        }
        const result = await getCriteria(true);
        refreshHandler(result);
    }
    async function deleteHandler() {
        if (criterion) {
            await deleteCriterion(criterion.ID);
            const result = await getCriteria(true);
            refreshHandler(result);
        }
    }

    return (
        <div className="row mb-2">
            <div className="input-group col">
                <input
                    type="text"
                    className={`form-control ${
                        isCorrect ? '' : 'border-danger border-2'
                    }`}
                    placeholder="Новый критерий"
                    aria-describedby="basic-addon1"
                    onInput={(e) => {
                        setCriterionName(e.target.value);
                        setCorrect(true);
                    }}
                    onBlur={() => {setCriterionName(criterionName.trim())}}
                    value={criterionName}
                />
                {criterionName.length && criterionName != criterion?.NAME ? (
                    <button
                        onClick={criterionHandler}
                        type="button"
                        className={`btn btn-${
                            isCorrect ? 'success' : 'danger'
                        }`}
                    >
                        {isCorrect
                            ? criterion
                                ? 'Применить'
                                : 'Добавить'
                            : 'Введите название'}
                    </button>
                ) : null}
            </div>
            {criterion ? (
                <button
                    onClick={deleteHandler}
                    type="button"
                    className="btn btn-danger col-1"
                >
                    <Delete size={24} />
                </button>
            ) : (
                <div className="col"></div>
            )}
        </div>
    );
}
