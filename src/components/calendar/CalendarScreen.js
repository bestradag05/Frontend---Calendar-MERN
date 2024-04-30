import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { messages } from '../../helpers/calendar-message-es';
import Navbar from '../ui/Navbar';
import AddNewFab from '../ui/AddNewFab';

import '../../styles/styles.scss';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import DeleteEventFab from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const onDoubleClick = (e) => {
    console.log(e);

    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    console.log(e);

    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: '0.8',
      display: 'block',
      color: 'white'
    };

    return {
      style
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />

      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;