import React from 'react';
import { NavLink } from 'react-router-dom';

const EditButton = (props) => {

return <button onClick={()=>{
	let item={date:props.date,eventType:props.eventType,eventName:props.eventName,budget:props.budget,where:props.where,time:props.time,note:props.note,id:props.id};
	props.onEdit(props.id,item);}}><NavLink to="/">Редактировать</NavLink></button>

};

const FieldSet = (props) => {
	let result;

	switch (props.eventType) {
		case "Праздник":
			result = <div><div>
								<h3>Бюджет</h3>
								<input
								placeholder="0"
								type="number"
								value={props.budget}
								onChange={e => props.onChangeBudget(e.target.value)}/>
							</div></div>;
			break;
		case "Мероприятие":
			result = 	<div>
									<div>
										<h3>Куда идти?</h3>
										<input
										value={props.where}
										onChange={e => props.onChangeWhere(e.target.value)}/>
									</div>
									<div>
										<h3>Во сколько?</h3>
										<input
										value={props.time}
										onChange={e => props.onChangeTime(e.target.value)}/>
									</div>
								</div>;
			break;
		case "Заметка":
			result = <div><div>
								<h3>Заметка</h3>
								<input
								value={props.note}
								onChange={e => props.onChangeNote(e.target.value)}/>
							</div></div>;
			break;
		default:
			result = <div>
				выберете тип мероприятия
			</div>;
	}
	
	return (
		result
	)
};

const EditEvent = (props) => {

	return(
		<div>
			
			<h2>Редактировать событие</h2>
			<div>
				<h3>Название события</h3>
				<input value={props.eventName} onChange={e => props.onChangeEventName(e.target.value)}/>
			</div>
			<div>
				<h3>Тип События</h3>
				<select
					value={props.eventType}
					onChange={e => props.onChangeEventType(e.target.value)}>
					<option>
					</option>
					<option>
						Праздник
					</option>
					<option>
						Мероприятие
					</option>
					<option>
						Заметка
					</option>
				</select>
			</div>
			<FieldSet eventType={props.eventType}
								onChangeBudget={props.onChangeBudget}
								onChangeNote={props.onChangeNote}
								onChangeWhere={props.onChangeWhere}
								onChangeTime={props.onChangeTime}
								budget={props.budget}
								time={props.time}
								note={props.note}
								where={props.where}/>
			<EditButton eventType={props.eventType}
								onChangeEventType={props.onChangeEventType}
								onChangeEventName={props.onChangeEventName}
								onChangeBudget={props.onChangeBudget}
								onChangeNote={props.onChangeNote}
								onChangeWhere={props.onChangeWhere}
								onChangeTime={props.onChangeTime}
								eventName={props.eventName}
								budget={props.budget}
								time={props.time}
								note={props.note}
								where={props.where}
								date={props.date}
								eventsData={props.eventsData}
								createEvent={props.createEvent}
								onEdit={props.onEdit}
								id={props.currentId}/>
		</div>
	)
};

export default EditEvent;