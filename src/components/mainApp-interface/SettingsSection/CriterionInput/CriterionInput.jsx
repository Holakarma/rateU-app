import React, { useEffect } from 'react';
import { Delete } from '../../../../icons/Delete/Delete';
import addCriterion from '../../../../utils/addCriterion';
import { getCriteria } from '../../../../utils/getCriteria';
import deleteCriterion from '../../../../utils/deleteCriterion';
import { updateCriterion } from '../../../../utils/updateCriterion';
import { ErrorContext } from '../../../../utils/errorContext';

/* BX24.callMethod('entity.delete', {ENTITY: "rates"}, res => {
    console.log(res)
}) */

export function CriterionInput({ criterion, refreshHandler, access }) {
    const setError = React.useContext(ErrorContext);
    const [criterionName, setCriterionName] = React.useState(
        criterion ? criterion.NAME : '',
    );
    const [isCriterionActive, setCriterionActive] = React.useState(
        criterion?.ACTIVE === 'Y' ? true : false,
    );
    const [isCorrect, setCorrect] = React.useState(true);
    const [showApprove, setApprove] = React.useState(false);
    async function criterionHandler() {
        if (!criterionName.length) {
            setCorrect(false);
            return;
        }
        if (!criterion) {
            await addCriterion(criterionName).catch((e) => setError(e));
            setCriterionName('');
        } else {
            await updateCriterion(
                criterion.ID,
                criterionName,
                !isCriterionActive,
            );
        }
        const result = await getCriteria(true, true).catch((e) => setError(e));
        refreshHandler(result);
    }
    const [deletePending, setDeletePending] = React.useState(false);
    async function deleteHandler() {
        try {
            if (criterion) {
                setDeletePending(true);
                await deleteCriterion(criterion.ID);
                const result = await getCriteria(true, true);
                refreshHandler(result);
                setDeletePending(false);
            }
        } catch (e) {
            setError(e);
        }
    }

    return (
        <div className="row mb-2 align-items-center justify-content-end">
            <div className="input-group col">
                {criterion ? (
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            disabled={!access}
                            checked={isCriterionActive}
                            onChange={() => {
                                criterionHandler();
                                setCriterionActive(!isCriterionActive);
                            }}
                            id={
                                criterion
                                    ? `check-${criterion.ID}`
                                    : 'check-newCriterion'
                            }
                        />
                    </div>
                ) : null}
                <input
                    type="text"
                    disabled={!access}
                    className={`form-control ${
                        isCorrect ? '' : 'border-danger border-2'
                    }`}
                    placeholder="Новый критерий"
                    aria-describedby="basic-addon1"
                    onInput={(e) => {
                        setCriterionName(e.target.value);
                        setCorrect(true);
                    }}
                    onBlur={() => {
                        setCriterionName(criterionName.trim());
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            criterionHandler();
                        }
                    }}
                    value={criterionName}
                    id={
                        criterion ? `name-${criterion.ID}` : 'name-newCriterion'
                    }
                />
                {criterionName.length && criterionName != criterion?.NAME ? (
                    <button
                        onClick={criterionHandler}
                        type="button"
                        disabled={!access}
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
                    onClick={() => {
                        setApprove(!showApprove);
                    }}
                    type="button"
                    disabled={!access}
                    className="btn btn-danger col-1"
                >
                    <Delete size={24} />
                </button>
            ) : (
                <div className="col-1"></div>
            )}
            {showApprove ? (
                <div className="col-12 py-2 text-end row align-items-center justify-content-end">
                    <p className="col mb-0">
                        Будут утеряны все оценки этого критерия. Вы уверены?
                    </p>
                    <button
                        className="btn btn-secondary col-2"
                        onClick={deleteHandler}
                        disabled={deletePending}
                    >
                        {deletePending ? 'Удаление...' : 'Удалить'}
                    </button>
                </div>
            ) : null}
        </div>
    );
}
