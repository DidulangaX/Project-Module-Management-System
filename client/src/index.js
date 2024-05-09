import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import HomePage from './Pages(Didulanga)/HomePage';
import MarksEnter from './Pages(Didulanga)/MarksEnter';
import Proposal from './Pages(Didulanga)/Proposal';
import Progress1 from './Pages(Didulanga)/Progress1';
import Progress2 from './Pages(Didulanga)/Progress2';
import Final from './Pages(Didulanga)/Final';
import DisplayMarks from './Pages(Didulanga)/DisplayMarks';
import Document from './Pages(Didulanga)/Document';
import StudentRegistrationForm from './LoginRegister/StudentRegistrationForm';
import RoleSelection from './LoginRegister/RoleSelection';
import Login from '../src/LoginRegister/Login';
import StatusReport1 from './Marks/StatusReport1';
import StatusReport2 from './Marks/StatusReport2';
import LogBook from './Marks/LogBook'
import Website from './Marks/Website';
import FinalThesis from './Marks/FinalThesis'
import EnterMarks from './Marks/EnterMarks';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    

    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/Pages(Didulanga)/HomePage" element={<HomePage/>} />
        <Route path="/Pages(Didulanga)/MarksEnter" element={<MarksEnter/>} />
        <Route path="/enter-marks/proposal" element={<Proposal/>} />
        <Route path="/enter-marks/progress1" element={<Progress1/>} />
        <Route path="/enter-marks/progress2" element={<Progress2/>} />
        <Route path="/enter-marks/final" element={<Final/>} />
        <Route path="/Pages(Didulanga)/DisplayMarks" element={<DisplayMarks/>} />
        <Route path="/Document" element={<Document/>} />
        <Route path="/LoginRegister/StudentRegistrationForm" element={<StudentRegistrationForm/>} />
        <Route path="/register" element={<RoleSelection/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/report1" element={<StatusReport1/>} />
        <Route path="/report2" element={<StatusReport2/>} />
        <Route path="/logbook" element={<LogBook/>} />
        <Route path="/website" element={<Website/>} />
        <Route path="/finalthesis" element={<FinalThesis/>} />
        <Route path="/marks" element={<EnterMarks/>} />

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
