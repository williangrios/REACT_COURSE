import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppTwo from './AppTwo';
import AppLifeCycle from './AppLifeCycle';
import AppEvents from './AppEvents';
import AppConditionalRender from './AppConditionalRender';
import AppLists from './AppLists';
import AppForms from './AppForms';
import AppFormsMore from './AppFormsMore';
import AppFormsManyFields from './AppFormsManyFields';
import AppUseState from './AppUseState';
import AppHttpRequests from './AppHttpRequests';


 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <hr/>
    <AppTwo />
    <hr/>
    <AppLifeCycle/>
    <hr/>
    <AppEvents nome="will"/>
    <hr/>
    <AppConditionalRender />
    <hr/>
    <AppLists/>
    <hr/>
    <AppForms/>
    <hr/>
    <AppFormsMore/>
    <hr/>
    <AppFormsManyFields/>
    <hr/>
    <AppUseState/>
    <hr/>
    <AppHttpRequests/>

  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
