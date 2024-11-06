import { useEffect } from 'react';
import styles from './button.module.css';

const Button = (props) => {

    

    const label = props.label;
    const handleClick = props.handleClick;

    useEffect(() => {
        console.log('Render button', label);
    }, [])
    

    return (
        <button className={styles.button} onClick={handleClick} >
            {label}
        </button>
    );
};

export default Button;
