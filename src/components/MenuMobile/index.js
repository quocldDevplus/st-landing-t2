import './MenuMobile.scss';
import images from '~/assets/images';
import { faBars, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '~/constant';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function MenuMobile() {
    const [menuMobileToggle, setMenuMobileToggle] = useState(false);
    const [subMobileToggle, setSubMobileToggle] = useState(false);

    const handleBtnMenuMobile = () => {
        setMenuMobileToggle(!menuMobileToggle);
    };

    const handleBtnSubMenuMobile = () => {
        setSubMobileToggle(!subMobileToggle);
    };

    return (
        <div className="mobile-header d-lg-none">
            <div className="container-mobile container ">
                <div className="row row-cols-4 menu-mobile">
                    <div className="col menu-mobile__menu-btn">
                        <button onClick={handleBtnMenuMobile}>
                            <FontAwesomeIcon className="menu-btn__icon-mobile" icon={faBars} />
                        </button>
                    </div>
                    <div className="col-6 menu-mobile__logo-box">
                        <img className="logo-box__img" src={images.logo} alt="logo" />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            {menuMobileToggle && (
                <div>
                    <nav className="nav-menu-mobile">
                        <ul className="main-menu-mobile">
                            {menuItems.map((item) => (
                                <>
                                    <li className="nav-item-mobile" key={item.id}>
                                        {item.childrens ? (
                                            <>
                                                <NavLink
                                                    onClick={handleBtnSubMenuMobile}
                                                    className="had-children item-content"
                                                >
                                                    {item.content}
                                                </NavLink>
                                                {subMobileToggle ? (
                                                    <FontAwesomeIcon
                                                        className="sub-menu-mobile-icon"
                                                        icon={faCaretDown}
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        className="sub-menu-mobile-icon"
                                                        icon={faCaretRight}
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <NavLink to={item.to} className="item-content">
                                                {item.content}
                                            </NavLink>
                                        )}
                                    </li>{' '}
                                    {subMobileToggle ? (
                                        <ul className="sub-menu-mobile">
                                            {item.childrens ? (
                                                item.childrens.map((itemChildren) => (
                                                    <li className="sub-item-mobile" key={itemChildren.id}>
                                                        <NavLink to={item.to} className="item-content-mobile">
                                                            {itemChildren.content}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            ) : (
                                                <></>
                                            )}
                                        </ul>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default MenuMobile;
