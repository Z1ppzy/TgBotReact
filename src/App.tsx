import { useEffect } from 'react';
import Header from '../src/Components/header';
import { useExpand } from '@vkruglikov/react-telegram-web-app';
import { useInitData } from '@vkruglikov/react-telegram-web-app';
import useUserStore from '../src/store/user-store';

export default function App() {
  const [, initData] = useInitData();
  const { user, setUser } = useUserStore(); // Извлекайте user и setUser

  useEffect(() => {
    if (initData) {
      const searchParams = new URLSearchParams(initData);
      const value = searchParams.get('user');
      const user = value !== null ? JSON.parse(value) : null;
      setUser(user);
    }
  }, [initData, setUser]);
  const [isExpanded, expand] = useExpand();

  useEffect(() => {
    if (!isExpanded) {
      expand();
    }
  }, [expand, isExpanded]);
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <div className='flex flex-col px-1 text-base'>
          {user ? (
            <p>
              Hello, {user.first_name} {user.last_name} (@{user.username})
            </p>
          ) : (
            <p>No user data</p>
          )}
          <h1 className='font-medium text-center'>
            Информация о вашем профиле:
          </h1>
          <p className='text-left'>Часов проведено: 1000 часов</p>
          <p>Разрушено блоков: 10200 блоков</p>
          <p>Убито игроков: 10 игроков</p>
          <p>Пройдено блоков: 10000 блоков</p>
        </div>
      </div>
    </>
  );
}
