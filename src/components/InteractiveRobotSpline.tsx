import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className = '' }: InteractiveRobotSplineProps) {
  return (
    <Suspense
      fallback={
        <div className={`robot-loading ${className}`} role="status">
          <span className="robot-spinner" />
          Loading 3D robot…
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
