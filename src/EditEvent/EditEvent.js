import React from 'react';
import { NavLink } from 'react-router-dom';

const EditButton = (props) => {

	if(props.eventName.length<4){
		return (<div class="hidden-wrapper">
			
			<button disabled onClick={()=>{}}>Редактировать</button>
			<p class="hidden">Заполните Название</p></div>)
	}

	switch (props.eventType) {
		case "Праздник":
			if (props.budget.length<1){
				return (<div class="hidden-wrapper">
				<button disabled onClick={()=>{}}>Редактировать</button>
				<p class="hidden">Заполните бюджет</p></div>)
			}
			break;
		case "Мероприятие":
			if (props.where.length<4){
				return (<div>
				
				<button disabled onClick={()=>{}}>Редактировать</button>
				<p class="hidden">Заполните место</p></div>)
			} else if (props.time.length<4){
				return (<div class="hidden-wrapper">
					
					<button disabled onClick={()=>{}}>Редактировать</button>
					<p class="hidden">Заполните время</p></div>)
			}
			break;
		case "Заметка":
			if (props.note.length<4){
				return (<div class="hidden-wrapper">
				
				<button disabled onClick={()=>{}}>Редактировать</button>
				<p class="hidden">Введите текст заметки</p></div>)
			}
			break;
		default:
			return (<div class="hidden-wrapper">
				
			<button disabled onClick={()=>{}}>Редактировать</button>
			<p class="hidden">выберете тип события</p></div>)
		}
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
								required
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
										minlength="4"
										required
										value={props.where}
										onChange={e => props.onChangeWhere(e.target.value)}/>
									</div>
									<div>
										<h3>Во сколько?</h3>
										<input
										type="time"
										required
										value={props.time}
										onChange={e => props.onChangeTime(e.target.value)}/>
									</div>
								</div>;
			break;
		case "Заметка":
			result = <div><div>
								<h3>Заметка</h3>
								<input
								minlength="4"
								required
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
		<form>
			
			<h2>Редактировать событие</h2>
			<div>
				<h3>Название события</h3>
				<label>
					<input title="Не заполнено название" minlength="4" required value={props.eventName} onChange={e => props.onChangeEventName(e.target.value)}/>
				</label>
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
			<div className="event-body__buttons">
				<button onClick={()=>{}}><NavLink to="/">Отмена</NavLink></button>
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
		</form>
	)
};

export default EditEvent;