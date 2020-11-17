import React from "react";
import { Link } from 'react-router-dom'
import sidebarMenu from 'Constants/sidebarMenu'
import cx from 'clsx'
import { map } from 'ramda'

const Sidebar = props => {
  const {
    activeMenu,
    activeSubmenuId,
    onMenuClick,
    onSubmenuClick,
    isCollapsable,
    sidebarState,
    onMenuButtonClick
  } = props

  return (
    <div id="sidebar" className="sidebar">
      <div className="sidebar-header">
        <div className={cx("btn-menu", !sidebarState && "roll-up")} onClick={onMenuButtonClick}></div>
        <div className="page-name">ТХКМ</div>
      </div>
      <div className="sidebar-body optiscroll">
        <div className="sidebar-user">
          <ul className="user-active-list">
            <li className="user-item">
              <img src="/assets/svg/sidebar-user-block/account.svg" alt="account" />
            </li>
            <span className="user-active-list-separator" />
            <li className="user-item">
              <Link to='#' className="credentials">Учётные данные</Link>
            </li>
          </ul>
          <div className="user-info-block">
            <div className="name">Хайдаров А.А.</div>
            <p className="position">СТО Админ</p>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu-list">
            {map(({ id, menu, title, icon, submenus }) => (
              <li key={id} className="menu-item">
                <Link
                  to='#'
                  className={cx("menu-link", activeMenu === menu && { active: true, 'point-e-none': !isCollapsable })}
                  onClick={() => onMenuClick(menu)}
                >
                  {icon}
                  <span>{title}</span>
                  {submenus && <img src="/assets/svg/sidebar-user-block/chevron.svg" alt="chevron" />}
                </Link>
                {activeMenu === menu && submenus && (
                  <div className="submenus">
                    {map(({ id, title }) => (
                      <p
                        key={id}
                        className={cx("submenu", activeSubmenuId === id && "active")}
                        onClick={() => onSubmenuClick(id)}
                      >
                        {title}
                      </p>
                    ))(submenus)}
                  </div>
                )}
              </li>
            ))(sidebarMenu)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
