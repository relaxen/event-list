import React from 'react';
import { NavLink } from 'react-router-dom';

const EventItem = (props) => {
	let post;
	switch (props.eventItem.eventType){
		case "Праздник":
				post = <div>
					<p>
					Бюджет: {props.eventItem.budget}
					</p>
				</div>
			break;
		case "Мероприятие":
			post = <div>
					<p>
						Адрес: {props.eventItem.where}
					</p>
					<p>
						Время: {props.eventItem.time}
					</p>
				</div>
			break;
		case "Заметка":
			post = <div>
					<p>
					{props.eventItem.note}
					</p>
				</div>
			break;
		default:
			post = <div >
					<p>
					{props.eventItem.note}
					</p>
				</div>
			break;
	} 

	return (
		<div className="event-body__item">
			<div className="top-side">			
				<h3>
				{props.eventItem.eventName}
				</h3>
				<div className="event-body__buttons">
					<button onClick={()=>{
								props.setId(props.eventItem.id);
								props.onChangeBudget(props.eventItem.budget);
								props.onChangeTime(props.eventItem.time);
								props.onChangeWhere(props.eventItem.where);
								props.onChangeEventType(props.eventItem.eventType);
								props.onChangeEventName(props.eventItem.eventName);
					}} className="edit-btn"><NavLink to="/edit">Редактировать</NavLink></button>
					<button onClick={()=>{props.onDelete(props.eventItem.id)}} className="delete-btn">Удалить</button>
				</div>
			</div>
			{post}
		</div>
	)}; 

const EventBody = (props) => {
	let events = props.eventsData.map(
		eventItem => {
			if (eventItem.date == props.date){
				return<EventItem setId={props.setId} onChangeEventName={props.onChangeEventName} onChangeEventType={props.onChangeEventType} onChangeWhere={props.onChangeWhere} onChangeBudget={props.onChangeBudget} onChangeTime={props.onChangeTime} onDelete={props.onDelete} eventItem={eventItem} key={eventItem.id}/>
			}
		});

	return(
		<div className="event-body">
			{events}
		</div>
	)
};

export default EventBody;