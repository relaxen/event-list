
import './App.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventBody from './EventBody/EventBody';
import CreateEvent from './CreateEvent/CreateEvent';
import EditEvent from './EditEvent/EditEvent';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { filter } from 'async';
import { stringify } from 'json5';

function App() {
	const [date, onChangeDate] = useState(new Date());
	const [budget, onChangeBudget] = useState("");
	const [time, onChangeTime] = useState("");
	const [note, onChangeNote] = useState("");
	const [where, onChangeWhere] = useState("");
	const [eventType, onChangeEventType] = useState("");
	const [eventName, onChangeEventName] = useState("");
	const [eventsData, setData] = useState([]);
	const [currentId, setId] = useState("");
	const [counter, setCounter] = useState(1);
	//let eventsData = [];
	useEffect(() => {
		if (localStorage.getItem("events")){
			setData(JSON.parse(localStorage.getItem("events")));
			setCounter(JSON.parse(localStorage.getItem("count")));
		}
  }, []);

	//setData(JSON.parse(localStorage.getItem("eventsData")))

	let curr_date = date.getDate();
	let curr_month = date.getMonth() + 1;
	let curr_year = date.getFullYear();
	let formDate = `${curr_date}.${curr_month}.${curr_year}`;

	const onSaveStorage = (eventsData) => {
		setTimeout(()=>{
			localStorage.setItem("events",JSON.stringify(eventsData));
			localStorage.setItem("count",JSON.stringify(counter));
		},0);
	};
	useEffect(() => {
		onSaveStorage(eventsData);
	}, [eventsData]);

	const onEdit = (id, newItem) => {
	setData(eventsData.map((item)=>{
		if(item.id === id){
			return newItem
		}
		return item
	}));
	//onSaveStorage(eventsData);
	};

	const onDelete = (id) => {
		setData(eventsData.filter(item => item.id !== id))
		//onSaveStorage(eventsData);
	};

	const createEvent = () => {
		let item={date:formDate,eventType,eventName,budget,where,time,note,id:counter};
		setData([...eventsData,item])
		//eventsData.push(item);
		onChangeBudget("");
		onChangeTime("");
		onChangeWhere("");
		onChangeEventType("");
		onChangeEventName("");
		setId("");
		setCounter(counter + 1);
		//onSaveStorage(eventsData);
	}

  return (
    <div className="App">
			<BrowserRouter>
				<Route exact={true} path="/" render={() => <div className="main-page">
					<Calendar
						onChange={onChangeDate}
						value={date}
					/>
					<EventBody 
						date={formDate}
						eventsData={eventsData}
						onDelete={onDelete}
						onChangeBudget={onChangeBudget}
						onChangeTime={onChangeTime}
						onChangeWhere={onChangeWhere}
						onChangeEventType={onChangeEventType}
						onChangeEventName={onChangeEventName}
						setId={setId}
					/>
				</div>}/>
				<Route path="/new" render={() => <div className="add-page">
					<CreateEvent 
					date={formDate}
					budget={budget}
					onChangeBudget={onChangeBudget}
					time={time}
					onChangeTime={onChangeTime}
					note={note}
					onChangeNote={onChangeNote}
					where={where}
					onChangeWhere={onChangeWhere}
					eventType={eventType}
					onChangeEventType={onChangeEventType}
					eventName={eventName}
					onChangeEventName={onChangeEventName}
					eventsData={eventsData}
					createEvent={createEvent}
					counter={counter}
					setCounter={setCounter}
					/>
				</div>}/>
				<Route path="/edit" render={() => <div className="add-page">
					<EditEvent 
					date={formDate}
					budget={budget}
					onChangeBudget={onChangeBudget}
					time={time}
					onChangeTime={onChangeTime}
					note={note}
					onChangeNote={onChangeNote}
					where={where}
					onChangeWhere={onChangeWhere}
					eventType={eventType}
					onChangeEventType={onChangeEventType}
					eventName={eventName}
					onChangeEventName={onChangeEventName}
					eventsData={eventsData}
					onEdit={onEdit}
					currentId={currentId}
					/>
				</div>}/>
			</BrowserRouter>
    </div>
  );
}

export default App;
