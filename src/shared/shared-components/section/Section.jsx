import PropTypes from 'prop-types';

import styles from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
