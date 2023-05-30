import { Badge, message, Button, Spin } from "antd";
import Table from '../utils/Table'
import { useEffect, useState } from "react";
import request from "../../tools/request";
import Modal from "../utils/Modal";

export default function App() {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])

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
      title: 'type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        {
          text: 'income',
          value: 'income',
        },
        {
          text: 'expense',
          value: 'expense',
        },
      ],
      onFilter: (value, record) => record.name.startsWith(value),
      filterSearch: false,
      render: (id, record, index) => (record.type === 'income' ? <Badge status="success" text='income' /> : <Badge status="error" text={record.type} />),
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
    request({ url: `income-expense-category/get-list`, method: 'get' })
    .then(({ data }) => {
      setCategories(data.data)
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

  const storeData = async () => {
    await request({ url: `income-expense-category/get-list`, method: 'get' })
    .then(({ data }) => {
      console.log(data)
      setCategories(data.data)
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
    .finally(() => {'true'})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full" >
      {loading && <div className="grid justify-center content-center w-full mb-10">
        <Spin size="large" />
      </div>}
      <Modal BtnLable = 'Open' BtnType = '' title = 'modal title' body = {<p>aaa</p>} subFunc={storeData} />
      <Table className="w-full" data={categories} columns={columns} scroll={{ x: 800 }} />;
    </div>
  );
}
