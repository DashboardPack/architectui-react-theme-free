import { Loader } from 'react-loaders';

export default function SuspenseFallback({ type = 'ball-pulse-rise', message = 'Loading...' }) {
  return (
    <div className="loader-container">
      <div className="loader-container-inner">
        <div className="text-center">
          <Loader type={type} />
        </div>
        <h6 className="mt-5">{message}</h6>
      </div>
    </div>
  );
}
