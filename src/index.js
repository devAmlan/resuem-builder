import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AchievementProvider } from "./context/Achievement-context"
import { EducationProvider } from "./context/Education-context"
import { ExperienceProvider } from "./context/Experience-context"
import { UserdataProvider } from './context/Userdata-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserdataProvider>
    <AchievementProvider>
      <EducationProvider>
        <ExperienceProvider>
          <App />
        </ExperienceProvider>
      </EducationProvider>
    </AchievementProvider>
  </UserdataProvider>

);

