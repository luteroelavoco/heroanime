import React from 'react'
import './styles.less'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { FaSearch, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const onSearch = value => console.log(value)

function RightMenu() {
  return (
    <div className="rigth-nav">
      <Input className="input" placeholder="default size" prefix={<SearchOutlined />} />
    </div>
  )
}
export default RightMenu
