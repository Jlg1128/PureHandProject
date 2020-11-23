import React from 'react';
import SiderBar from './siderBar';
// import './index.scss';

export const SecureLayout: React.FC = ({ children, ...rest }) => {
    console.log(rest);
    return <div className="secure-layout-container">
      <div className="left">
        <SiderBar />
      </div>
      <div className="right">
        {children}
      </div>
    </div>;
};

export default SecureLayout;
