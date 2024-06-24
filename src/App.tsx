import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [user, setUser] = useState<WebAppUser | null>(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    setUser(tg.initDataUnsafe.user);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ЭТО МОЕ Telegram App ПРИЛОЖЕНИЕ!!!</h1>
        {user && <p>Привет, {user.first_name}!</p>}
      </header>
    </div>
  );
};

export default App;
