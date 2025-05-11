import { useState } from 'react';
import PropTypes from 'prop-types';
import icon from '@/assets/images/Vector.svg'
import styles from '../Collapse/Collapse.module.scss';

// Initial state for the collapse icon (pointing down)
const iconInitialState = {
  transform: "rotate(180deg)",
};

/**
 * Collapse component that creates an expandable/collapsible section
 * @param {string} title - The text to display in the collapse header
 * @param {ReactNode} children - The content to display when expanded
 */
const Collapse = ({ title, children }) => {
  // State to track whether the collapse is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // State to control the icon rotation animation
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  /**
   * Toggles the collapse state and updates the icon rotation
   * When opened: icon points up (0 degrees)
   * When closed: icon points down (180 degrees)
   */
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(0deg)", transition: "all 0.17s linear" });
  };

  return (
    <div className={styles.collapse}>
      {/* Button that triggers the collapse toggle */}
      <button
        className={styles.collapseButton}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title}`}
      >
        {title}
        <img
          src={icon}
          className={styles.collapseIcon}
          alt=""
          style={iconStyle}
          aria-hidden="true"
        />
      </button>
      {/* Content is only rendered when isOpen is true */}
      {isOpen && (
        <div
          id={`collapse-content-${title}`}
          className={styles.collapseContent}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;