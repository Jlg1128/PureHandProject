import React from 'react';
import styles from './index.scss';
import './show.css';

const SiderBar: React.FC = () => (
  <div className={styles.scssstyle}>
    <div className="show">人员管理</div>
    <div>企业管理</div>
    <div>角色管理</div>
    <div>钱财管理</div>
  </div>
);

export default SiderBar;
