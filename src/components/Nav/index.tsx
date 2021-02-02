import React, { useEffect, useState } from 'react'
import './styles.less'
import Link from 'next/link'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd'
import { FaBars } from 'react-icons/fa'
import { hasScrolled } from './helpers'
function Navbar() {
  const [transparent, setTransparent] = useState(true)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    hasScrolled(setTransparent)
  }, [])

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false);
  }
  return (
    <nav className={transparent ? "menuBar transparent" : "menuBar"}>
      <div className="logo">
        <Link href="/">
          <a>HeroAnime</a>
        </Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu mode={"horizontal"} setVisible={setVisible} />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <FaBars />
        </Button>
        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode={"vertical"} setVisible={setVisible} />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  )
}
export default Navbar
