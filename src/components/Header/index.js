import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import { menuItems } from '~/constant';
import MenuMobile from '../MenuMobile';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id="header-section">
            <div className="container d-lg-block d-none">
                <div className={cx('houzez-header')}>
                    <div className={cx('logo-box')}>
                        <NavLink className={cx('logo-img')} to="/">
                            <img src={images.logo} alt="logo" />
                        </NavLink>
                    </div>
                    <nav className={cx('nav-menu')}>
                        <ul className={cx('main-menu')}>
                            {menuItems.map((item) => (
                                <li className={cx('nav-item')} key={item.id}>
                                    {item.childrens ? (
                                        <NavLink className={cx('had-children', 'item-content')}>{item.content}</NavLink>
                                    ) : (
                                        <NavLink className={cx('item-content')}>{item.content}</NavLink>
                                    )}
                                    <ul className={cx('sub-menu')}>
                                        {item.childrens ? (
                                            item.childrens.map((itemChildren) => (
                                                <li className={cx('sub-item')} key={itemChildren.id}>
                                                    <NavLink className={cx('item-content')}>
                                                        {itemChildren.content}
                                                    </NavLink>
                                                </li>
                                            ))
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <MenuMobile />
        </header>
    );
}

export default Header;
