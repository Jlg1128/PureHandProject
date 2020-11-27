import React from 'react';
import styles from './index.scss';
import './show.css';

console.log('🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶'.concat('ixixixixi'));

const SiderBar: React.FC = () => (
  <div className={styles.scssstyle}>
    <div>人员管理</div>
    <div>企业管理</div>
    <div>角色管理</div>
    <div>钱财管理</div>
  </div>
);

export default SiderBar;
