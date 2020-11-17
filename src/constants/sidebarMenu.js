import React from 'react'
import Home from 'Assets/svg/sidebar-user-block/home.svg'
import Registry from 'Assets/svg/sidebar-user-block/registry.svg'
import Database from 'Assets/svg/sidebar-user-block/database.svg'
import * as ROUTES from 'Constants/routes'

export const dashboard = ROUTES.DASHBOARD
export const registry = ROUTES.REGISTRY
export const statements = ROUTES.STATEMENTS

export default [
  {
    id: 1,
    menu: dashboard,
    title: "Главная",
    icon: <Home />
  },
  {
    id: 2,
    menu: registry,
    title: "Реестр",
    icon: <Registry />,
    submenus: [
      { id: 1, title: "Фискал модуллар", },
      { id: 2, title: "Онлайн-НКМ ва ВК", },
      { id: 3, title: "Ходимлар", },
      { id: 4, title: "Шаҳобчалар", },
      { id: 5, title: "Филлиал ва шериклар", },
    ]
  },
  {
    id: 3,
    menu: statements,
    title: "Заявления",
    icon: <Database />,
    submenus: [
      { id: 1, title: "ДСИ аризалари", },
      { id: 2, title: "Submenu 2", },
      { id: 3, title: "Submenu 3", },
      { id: 4, title: "Submenu 4", },
      { id: 5, title: "Submenu 5", },
    ]
  },
]
