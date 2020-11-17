import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { locales, ru } from 'Constants/defaultValues'
import { map, find, propEq, prop, pipe } from "ramda";
import cx from 'clsx'
import findItem from 'Util/findItem'

const Header = () => {
  const defaultLocale = findItem('value', ru, 'id', locales)

  const [activeLang, setActiveLang] = useState(defaultLocale)

  return (
    <header>
      <div className="row">
        <div className="col-md-12">
          <div className="header">
            <div className="header-left">
              <ul className="lang-list">
                {map(({ id, value }) => (
                  <li key={id} className="lang-item">
                    <Link
                      to="#"
                      className={cx("lang-link", activeLang === id && "active")}
                      onClick={() => setActiveLang(id)}
                    >
                      {value}
                    </Link>
                  </li>
                ))(locales)}
              </ul>
            </div>
            <div className="header-right">
              <div className="call-center">
                <div className="icon">
                  <img src="/assets/svg/call-center.svg" alt="call-center" />
                </div>
                <div className="title">
                  <div className="phone-number">71 202-32-82</div>
                  <div className="trust-number">/ 1198</div>
                </div>
                <div className="subtitle">Call-центр</div>
              </div>
              <Link to="#" className="logout"></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header
