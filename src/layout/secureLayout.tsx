import React from 'react';
import SiderBar from './siderBar';
import styles from './index.scss';

export const SecureLayout: React.FC = ({ children, ...rest }) => {
    console.log(rest);
    return <div className={styles.container}>
      <div className={styles.left}>
        <SiderBar />
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </div>;
};

export default SecureLayout;
