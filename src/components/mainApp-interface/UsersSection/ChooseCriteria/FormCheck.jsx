import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import cls from './renderCriteria.module.css'


export function FormCheck({ criterion }) {

    const [checkedCriterion, setCheckedCriterion] = React.useState(true);
    function handleChangeCriterion() {
        setCheckedCriterion(!checkedCriterion)
    };

    // console.log(checkedCriterion)

    return (
        <div className={`${cls.criteriaDropdown} dropdown-item p-0`}>
            <FormGroup>
                <FormLabel className="w-100 px-3 py-1 cursor-pointer">
                    <Form.Check
                        type="checkbox"
                        id={`default-${criterion.ID}`}
                        className="me-2 cursor-pointer"
                        label={criterion.NAME}
                        checked={checkedCriterion}
                        onChange={handleChangeCriterion}
                    />
                </FormLabel>
            </FormGroup>
        </div>
    )
}