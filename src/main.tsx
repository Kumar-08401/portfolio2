import React from 'react';
import { createRoot } from 'react-dom/client';
import { InteractiveRobotSpline } from './components/InteractiveRobotSpline';
import './robot.css';

const mount = document.getElementById('spline-react-root');

if (mount) {
  createRoot(mount).render(
    <React.StrictMode>
      <InteractiveRobotSpline
        scene="https://prod.spline.design/zS15SJeb7s1kZXKJ/scene.splinecode"
        className="robot-canvas"
      />
    </React.StrictMode>
  );
}
