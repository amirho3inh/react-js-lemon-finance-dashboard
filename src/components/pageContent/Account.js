import { Badge, message, Button, Spin } from "antd";
import Table from '../utils/Table'
import { useEffect, useState } from "react";
import request from "../../tools/request";

export default function App() {
  const [loading, setLoading] = useState(false)
  const [accounts, setAccounts] = useState([])

  const columns = [
    {
      title: 'SL ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      render: (id, record, index) => { ++index; return index; },
      showSorterTooltip: false
    },
    // {
    //   title: 'ID',
    //   key: 'id',
    //   dataIndex: 'id'
    // }, 
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'bank account number',
      dataIndex: 'bank_account_number',
      key: 'bank_account_number',
    },
    {
      title: 'bank card number',
      dataIndex: 'bank_card_number',
      key: 'bank_card_number',
    },
    {
      title: 'initial balance',
      dataIndex: 'initial_balance',
      key: 'initial_balance',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (id, record, index) => (record.status === 'enable' ? <Badge status="success" text='enable' /> : <Badge status="error" text={record.status} />),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (<Button size="small">action</Button>)
    }
  ]

  const getData = () => {
    setLoading(true)
    request({ url: `/account/get-list`, method: 'get' })
    .then(({ data }) => {
      setAccounts(data.data)
    })
    .catch(error => {
      if(typeof error.response.data.message === 'string'){
        message.error(`${error.response.data.message}`)
      }else{
        for (const [, value] of Object.entries(error.response.data.message)) {
          value.map(err => message.error(`${err}`) )
        }
      }
    })
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full" >
      {loading && <div className="grid justify-center content-center w-full mb-10">
        <Spin size="large" />
      </div>}
      <Table className="w-full" data={accounts} columns={columns} scroll={{ x: 800 }} />;
    </div>
  );
}
