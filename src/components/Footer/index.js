import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer id="footer-section">
            <div className={cx('footer')}>
                <div className="container">
                    <h2>Footer</h2>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className="container">
                    <h2>Footer bottom</h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
