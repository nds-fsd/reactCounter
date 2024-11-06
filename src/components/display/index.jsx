import { validatePositive } from '../../utils/calculate.utils';
import styles from './display.module.css';

const Display = ({ value }) => {

    if (!validatePositive(value)) {
        return (
            <div className={styles.display}>
                ERROR
            </div>
        )
    }

    return (
        <div className={styles.display}>
            {value}
        </div>
    );
};

export default Display;
