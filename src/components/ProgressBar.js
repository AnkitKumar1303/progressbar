// src/components/ProgressBar.js

import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Link external CSS

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const incrementProgress = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    };

    const progressInterval = setInterval(incrementProgress, 50);

    return () => clearInterval(progressInterval);
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress < 100 ? 'Loading...' : 'Complete'}
      </div>
      <div className="progress-text">{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
