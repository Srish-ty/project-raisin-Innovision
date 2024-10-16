import { Header } from '../Header/Header';
import { Body } from './Body';

export const StatisticsMain = () => {
  return (
    <>
      <div
        className='flex flex-col w-auto h-auto min-h-screen overflow-x-auto min-w-screen xsm:gap-10 md:gap-20 '
        style={{
          background:
            'conic-gradient(from 180deg at 50% -72.31%, #1a1a1a 0%, #1c4953 23%, #1a1a1a 30%, #1a1a1a 65%, #8e1e78 80%, #1a1a1a 98%)',
          filter: 'brightness(1.2)',
        }}
      >
        <Header />
        <Body />
      </div>
    </>
  );
};
