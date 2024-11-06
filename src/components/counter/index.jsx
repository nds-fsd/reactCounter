import { useEffect, useState } from 'react';
import { minus, plus } from '../../utils/calculate.utils';
import ButtonsGrid from '../buttonsGrid';
import Display from '../display';
import styles from './counter.module.css';

const Counter = () => {
    const [countValue, setCountValue] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count +1);
    }, [])
    

    const increase = () => {
        setCountValue(plus(countValue));
        setCount(count + 1);
        console.log('increase');
    }

    const decrease = () => {
        setCountValue(minus(countValue));
    }

    return (
        <div>
            <h1>Counter</h1>
            <div className={styles.counterContainer}>
                <Display value={countValue} />
                <Display value={count} />   
            </div>
            
            <ButtonsGrid increase={increase} decrease={decrease} value={countValue} />
        </div>
    );
};

export default Counter;
