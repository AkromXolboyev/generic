// App.tsx
import React from 'react';
import Button from './components/home';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button label="Click me!" onClick={handleClick} />
      <Button label="Submit" onClick={handleClick} type="submit" disabled={false} />
    </div>
  );
};

export default App;
