import React, { useContext, useState } from 'react';
import cls
	from 'widgets/userSection/ui/userSection.module.css';
import { DatePicker } from 'shared/ui/datePicker';
import { PeriodContext } from 'shared/context/periodContext/periodContext';

const getTomorrowDate = ( date = new Date() ) => {
	const tomorrow = date || new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow;
};

const PeriodPicker = () => {
	const { period, setPeriod } = useContext(PeriodContext);
	const [ dateBegin, setDateBegin ] = useState(period?.dateBegin ? new Date(period?.dateBegin) : null);
	const [ dateEnd, setDateEnd ] = useState(getTomorrowDate());

	return (
		<div className={`${cls.card} card`}>
			<div className="card-body">
				<div className="row align-items-end">
					<div className="col">
						<DatePicker
							id={'dateBegin'}
							date={dateBegin}
							setDate={setDateBegin}
							maxDate={dateEnd}
						/>
					</div>
					<div className="col">
						<DatePicker
							id={'dateEnd'}
							date={dateEnd}
							setDate={setDateEnd}
							minDate={dateBegin}
						/>
					</div>
					<div className="col-2">
						<button
							className={`btn ${cls.btnSave} text-light w-100`}
							onClick={() => {
								setPeriod({
									dateBegin,
									dateEnd
								});
							}}
						>
							Сохранить
						</button>
					</div>
					<div className="col-2">
						<button
							className={`btn ${cls.btnReset} text-light w-100`}
							onClick={() => {
								setDateBegin(null);
								setDateEnd(null);
								setPeriod({
									dateBegin: dateBegin,
									dateEnd: dateEnd
								});
							}}
						>
							Сбросить
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PeriodPicker;
