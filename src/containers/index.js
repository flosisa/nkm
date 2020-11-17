import React, { useState, useEffect } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import Content from "Components"
import Header from "Components/Header"
import Sidebar from "Components/Sidebar"
// import Footer from "Components/Footer";
import qs from "query-string"
import * as ROUTES from "Constants/routes"
import cx from "clsx"
import sidebarMenu, { registry, statements } from "Constants/sidebarMenu"
import findItem from "Util/findItem"

const Index = props => {
  const { children } = props
  const history = useHistory()
  const location = useLocation()
  const { submenuId } = useParams()
  const menu = location.pathname.split("/").splice(0, 2).join("/")
  const defaultMenu = statements
  const defaultSubmenuId = 1
  const query = qs.parse(location.search)
  const { ...rest } = query

  const [sidebarState, setSidebarState] = useState(true)
  const [activeMenu, setActiveMenu] = useState(defaultMenu)
  const [activeSubmenuId, setActiveSubmenuId] = useState(defaultSubmenuId)

  const actualMenu = activeMenu || menu
  const actualSubmenuId = activeSubmenuId || submenuId
  const isCollapsable = findItem("menu", actualMenu, "submenus", sidebarMenu)

  useEffect(() => {
    history.push({
      pathname: `${actualMenu}${isCollapsable ? `/${actualSubmenuId}` : ""}`,
      search: qs.stringify({
        ...query,
      }),
    })
  }, [])

  const onMenuClick = menu => {
    const isCollapsable = findItem("menu", menu, "submenus", sidebarMenu)

    setActiveMenu(isCollapsable ? (activeMenu === menu ? null : menu) : menu)

    history.push({
      pathname: isCollapsable ? `${menu}/${defaultSubmenuId}` : menu,
    })
  }

  const onSubmenuClick = id => {
    if (activeSubmenuId !== id) {
      setActiveSubmenuId(id)

      history.push({
        pathname: `${actualMenu}/${id}`,
      })
    }
  }

  const onMenuButtonClick = () => {
    const sidebar = document.getElementById("sidebar")

    sidebar.style.position = "absolute"
    setSidebarState(!sidebarState)
  }

  return (
    <div className="site-wrapper">
      <Header />
      <div className={cx("content-wrapper", !sidebarState && "menu-roll-up")}>
        <Sidebar
          sidebarState={sidebarState}
          onMenuButtonClick={onMenuButtonClick}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          activeSubmenuId={activeSubmenuId}
          setActiveSubmenuId={setActiveSubmenuId}
          onMenuClick={onMenuClick}
          onSubmenuClick={onSubmenuClick}
          isCollapsable={isCollapsable}
        />
        <Content />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Index
