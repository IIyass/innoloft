import React from 'react';
import { Circles } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      <Circles color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoadingSpinner;
