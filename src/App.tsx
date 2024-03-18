import AntdConfig from '@/style/antd';
import { Button, Divider } from 'antd';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import { IconButton, SvgIcon } from './components/icon';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AntdConfig>
      <div className="flex w-full items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Divider />
      <h1>Vite + Ant Design</h1>
      <div className="card text-[20px] text-red-400 ">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <IconButton icon="react" color="#00D8FF" className="mb-2" />
        <div className=" h-[40px] w-[40px] text-sm">
          <SvgIcon icon="react" className="text-[#00D8FF]" size={40} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </AntdConfig>
  );
}

export default App;
