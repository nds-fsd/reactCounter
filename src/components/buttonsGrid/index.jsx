import { useEffect } from 'react';
import Button from '../button';
import styles from './buttonsGrid.module.css';
import { validatePositive } from '../../utils/calculate.utils';

const ButtonsGrid = ({ increase, decrease, value }) => {
    
    useEffect(() => {
        console.log('Render grid');
    }, [value]);

    

    return (
        <div>
            <Button label={'+'} handleClick={increase} /> 
            
            {validatePositive(value) && <Button label={'-'} handleClick={decrease} />}
        </div>
    );
};

export default ButtonsGrid;
