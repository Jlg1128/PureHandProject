import React, { useEffect } from 'react';
import { Table } from 'antd';
import TableColumns from './columns';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: 1,
    myname: 'jlg',
    yourname: 'undefiend',
    hername: 'hf',
  },

];

const UserInfoTable: React.FC = () => (
  <div className="table-container">
    <Table
      columns={TableColumns()}
      dataSource={dataSource}
      />
  </div>
  );

export default UserInfoTable;
