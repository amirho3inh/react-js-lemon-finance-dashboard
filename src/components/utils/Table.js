import React, { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table ({ data, columns, rowKey = 'id', option }) {
  const newColumns = useMemo(() => {
    return columns.map(column => ({
      dataIndex: column.key,
      ...column
    }))
  }, [columns])

  return <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} {...option} />
}