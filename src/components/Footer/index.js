import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import './Footer.module.scss';

const cx = classNames.bind(styles);

const NavMenuFooter = () => (
    <div className="nav-menu-footer">
        <h3 className="nav-menu-footer__title">MENU</h3>
        <div className="row">
            <div></div>
        </div>
        <ul className="nav-menu-footer__list">
            <li className="nav-menu-footer__item">
                <a className="nav-menu-footer__item-content" href=""></a>
            </li>
        </ul>
    </div>
);
function Footer() {
    return (
        <footer id="footer-section">
            <div className={cx('footer')}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <NavMenuFooter />
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <h3>Contact us</h3>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">3</div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className="container">
                    <p>Copyright © 2019 by ST United.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
