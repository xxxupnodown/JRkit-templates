import React, { useState, startTransition, useMemo } from 'react';
import { Button, Input } from 'antd';

const Dashboard = () => {

  const [value, setValue] = useState('default');
  const [show, setShow] = useState('default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    startTransition(() => {
      setShow(e.target.value);
    })
  }
  const Number = useMemo(() => new Array(5000).fill(0).map(() => <div>{show}</div>), [show]);

  return <>
    <Input id='input' value={value} onChange={handleChange} />
    <Button onClick={() => { console.log(value) }}>获取value</Button>
    <Button onClick={() => { console.log(show) }}>获取show</Button>
    {
      Number
    }
  </>
}

export default React.memo(Dashboard);
