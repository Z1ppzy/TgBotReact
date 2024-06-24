import Header from '../src/Components/header';

export default function App() {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <div className='flex flex-col px-2 text-sm items-center'>
          <h1 className='font-bold'>Информация о вашем профиле:</h1>
          <p>Часов проведено: 1000 часов</p>
          <p>Разрушено блоков: 10200 блоков</p>
          <p>Убито игроков: 10 игроков</p>
          <p>Пройдено блоков: 1000000 блоков</p>
        </div>
      </div>
    </>
  );
}
