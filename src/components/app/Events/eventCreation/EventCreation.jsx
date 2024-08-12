

import React, { useState, useEffect } from 'react';

import EventCreationFirstStep from './EventCreation1';
import EventCreationSecondStep from './EventCreation2';
import EventCreationThirdStep from './EventCreation3';
import EventCreationFourthStep from './EventCreation4';

const EventCreation = (props) => {
	const { getCategories, getEventTypes } = props;
	
	useEffect(() => {
		getCategories();
		getEventTypes();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	
	const [selectedStep, setSelectedStep] = useState(1);
	const [selectedEventInformation, setSelectedEventInformation] = useState({});
	const [inEditMode, setEditMode] = useState(false);
	
	return (
		<div className="event-cre-wrap">
			{
				selectedStep === 1 ?
					<EventCreationFirstStep
						{...props}
						inEditMode={inEditMode}
						setEditMode={setEditMode}
						selectedStep={selectedStep}
						setSelectedStep={setSelectedStep}
						selectedEventInformation={selectedEventInformation}
						setSelectedEventInformation={setSelectedEventInformation}
						//setSelectedType
					/> :
					selectedStep === 2 ?
						<EventCreationSecondStep
							inEditMode={inEditMode}
							setEditMode={setEditMode}
							selectedStep={selectedStep}
							setSelectedStep={setSelectedStep}
							selectedEventInformation={selectedEventInformation}
							setSelectedEventInformation={setSelectedEventInformation}
						/>
						:
						selectedStep === 3 ?
							<EventCreationThirdStep
								inEditMode={inEditMode}
								setEditMode={setEditMode}
								selectedStep={selectedStep}
								setSelectedStep={setSelectedStep}
								selectedEventInformation={selectedEventInformation}
								setSelectedEventInformation={setSelectedEventInformation}
							/> :
							<EventCreationFourthStep
								{...props}
								inEditMode={inEditMode}
								setEditMode={setEditMode}
								selectedStep={selectedStep}
								setSelectedStep={setSelectedStep}
								selectedEventInformation={selectedEventInformation}
								setSelectedEventInformation={setSelectedEventInformation}
							/>
			}
		</div>
	);
};

export default EventCreation;
