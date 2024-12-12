const getSectionId = (function createEntity(
	savedSectionsId = {
		criteriaSection: undefined,
		ratesSection: undefined
	}
) {
	return function() {
		return new Promise(( resolve, reject ) => {
			if (
				savedSectionsId.criteriaSection &&
				savedSectionsId.ratesSection
			) {
				resolve(savedSectionsId);
				return;
			}
			BX24.callMethod('entity.get', {}, ( res ) => {
				if (res.error()) {
					reject(new Error(res.error().ex.error_description));
					return;
				}
				const createdEntities = res.data();
				const entity = createdEntities.find(
					( createdEntity ) => createdEntity.ENTITY == 'rates'
				);
				if (entity) {
					BX24.callMethod(
						'entity.section.get',
						{
							ENTITY: 'rates',
							FILTER: {
								NAME: 'creteria'
							}
						},
						( res ) => {
							if (res.error()) {
								reject(
									new Error(res.error().ex.error_description)
								);
								return;
							}
							savedSectionsId.criteriaSection = res.data()[0]?.ID;
							BX24.callMethod(
								'entity.section.get',
								{
									ENTITY: 'rates',
									FILTER: {
										NAME: 'userRates'
									}
								},
								( res ) => {
									if (res.error()) {
										reject(
											new Error(
												res.error().ex.error_description
											)
										);
										return;
									}
									savedSectionsId.ratesSection =
										res.data()[0]?.ID;
									resolve(savedSectionsId); // sections id
								}
							);
						}
					);
				} else {
					BX24.callMethod(
						'entity.add',
						{
							ENTITY: 'rates',
							NAME: 'rateU-app',
							ACCESS: { AU: 'X' }
						},
						( res ) => {
							if (res.error()) {
								reject(
									new Error(res.error().ex.error_description)
								);
								return;
							}
							BX24.callMethod(
								'entity.section.add',
								{
									ENTITY: 'rates',
									NAME: 'creteria',
									DESCRIPTION:
										'Критерии для оценки сотрудников',
									ACCESS: { AU: 'X' }
								},
								( resCriteriaSection ) => {
									if (resCriteriaSection.error()) {
										reject(
											new Error(
												resCriteriaSection.error().ex.error_description
											)
										);
										return;
									}
									savedSectionsId.criteriaSection =
										resCriteriaSection.data();

									BX24.callBatch(
										[
											[
												'entity.item.add',
												{
													ENTITY: 'rates',
													NAME: 'Пунктуальность',
													SECTION:
													savedSectionsId.criteriaSection,
													ACCESS: { AU: 'X' }
												}
											],
											[
												'entity.item.add',
												{
													ENTITY: 'rates',
													NAME: 'Ответственность',
													SECTION:
													savedSectionsId.criteriaSection,
													ACCESS: { AU: 'X' }
												}
											],
											[
												'entity.item.add',
												{
													ENTITY: 'rates',
													NAME: 'Отзывчивость',
													SECTION:
													savedSectionsId.criteriaSection,
													ACCESS: { AU: 'X' }
												}
											],
											[
												'entity.item.add',
												{
													ENTITY: 'rates',
													NAME: 'Результативность',
													SECTION:
													savedSectionsId.criteriaSection,
													ACCESS: { AU: 'X' }
												}
											],
											[
												'entity.item.add',
												{
													ENTITY: 'rates',
													NAME: 'Командная работа',
													SECTION:
													savedSectionsId.criteriaSection,
													ACCESS: { AU: 'X' }
												}
											]
										],
										( res ) => {
											res.forEach(( r ) => {
												if (r.error()) {
													reject(
														new Error(
															res.error().ex.error_description
														)
													);
													return;
												}
											});
										}
									);

									BX24.callMethod(
										'entity.section.add',
										{
											ENTITY: 'rates',
											NAME: 'userRates',
											DESCRIPTION: 'Оценки сотрудников',
											ACCESS: { AU: 'X' }
										},
										( resRatesSection ) => {
											if (resRatesSection.error()) {
												reject(
													new Error(
														resRatesSection.error().ex.error_description
													)
												);
												return;
											}
											savedSectionsId.ratesSection =
												resRatesSection.data();
											BX24.callBatch(
												[
													[
														'entity.item.property.add',
														{
															ENTITY: 'rates',
															PROPERTY: 'TASK_ID',
															NAME: 'task id in rate',
															TYPE: 'N'
														}
													],
													[
														'entity.item.property.add',
														{
															ENTITY: 'rates',
															PROPERTY: 'USER_ID',
															NAME: 'user id in rate',
															TYPE: 'N'
														}
													],
													[
														'entity.item.property.add',
														{
															ENTITY: 'rates',
															PROPERTY:
																'CRITERION_ID',
															NAME: 'criterion id in rate',
															TYPE: 'N'
														}
													],
													[
														'entity.item.property.add',
														{
															ENTITY: 'rates',
															PROPERTY: 'COMMENT',
															NAME: 'comment in rate',
															TYPE: 'S'
														}
													],
													[
														'entity.item.property.add',
														{
															ENTITY: 'rates',
															PROPERTY: 'RATE',
															NAME: 'rate value in rate',
															TYPE: 'N'
														}
													]
												],
												( res ) => {
													res.forEach(( r ) => {
														if (r.error()) {
															reject(
																new Error(
																	r.error().ex.error_description
																)
															);
															return;
														}
													});

													resolve(savedSectionsId);
												}
											);
										}
									);
								}
							);
						}
					);
				}
			});
		});
	};
})();

export default getSectionId;
