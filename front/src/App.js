import React, { useState } from 'react';
import './App.css';

function App() {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const today = new Date();
  const tMonth = today.getMonth();
  const [month, setMonth] = useState(tMonth);
  const year = today.getFullYear();
  
  const daysInMonthMap = {
    0: 31,
    1: (year%4 === 0) ? 29 :28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
  };

  const monthName = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };


  const weeksInMonth = Math.floor(daysInMonthMap[month]/7);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const weeks = [];
    let count = 1;
    for (let i=0; i<=weeksInMonth; i++) {
      const w = new Array(7).fill('');
      for (let j=0; j<7; j++) {
        if (i===0 && j<firstDayOfMonth) {
          continue;
        }
        if (count <= daysInMonthMap[month]) {
          w[j] = count++;
        }
      }
      weeks.push(w);
    }

  const displayWeek = (wk) => {
    return (wk.map((d,i) => <div className="week-day">{d}</div>));
  }

  const handleLeft = (e) => {
    setMonth(month - 1);
  }

  const handleRight = (e) => {
    setMonth(month + 1);
  }

  return (
    <div className="App">
      <div className="actions">
        <div 
          className={month===0 ? "action-btn left disabled": "action-btn left"}
          onClick={handleLeft}
        >
          {'<'}
        </div>
        <div className="action-btn month">{monthName[month]}</div>
        <div 
          className={month===11 ? "action-btn right disabled": "action-btn right"}
          onClick={handleRight}
        >
          {'>'}
        </div>
      </div>
      <div className="week-header">
        { weekDays.map((w, i) => (<div className="week-day">{w}</div>)) }
      </div>
      <div className="days">
        {
          weeks.map((week) => displayWeek(week))      
        }
      </div>
        
    </div>
  );
}

export default App;
