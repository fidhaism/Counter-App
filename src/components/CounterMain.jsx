import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../redux/slice';

const CounterMain = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrease = () => dispatch(increase());
    const handleReset = () => dispatch(reset());
    const handleDecrease = () => dispatch(decrease());

    return (
        <div className='d-flex align-items-center justify-content-center vh-100'>
            <div className='p-5 border rounded shadow bg-white w-50'>
                <h1 className='text-center text-primary mb-4'>Counter</h1>
                <h2 className='text-center text-warning mb-4 display-4'>{count}</h2>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success btn-lg' onClick={handleIncrease}>Increase</button>
                    <button className='btn btn-info btn-lg' onClick={handleReset}>Reset</button>
                    <button className='btn btn-danger btn-lg' onClick={handleDecrease}>Decrease</button>
                </div>
            </div>
        </div>
    );
}

export default CounterMain;
