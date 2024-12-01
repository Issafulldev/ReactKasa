import { useState } from 'react';
import icon from '@/assets/images/Vector.svg'
import styles from '../Collapse/Collapse.module.scss';

const iconInitialState = {
  transform: "rotate(180deg)",
};

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(0deg)", transition: "all 0.17s linear" });
  };

  return (
    <div className={styles.collapse}>
      <button className={styles.collapseButton} onClick={toggleCollapse}>
        {title}
        <img src={icon} className={styles.collapseIcon} alt="collapse icon" style={iconStyle} />
      </button>
      {isOpen && <div className={styles.collapseContent}>{children}</div>}
    </div>
  );
};

export default Collapse;