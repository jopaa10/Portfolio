import styles from '../../styles/components/icon.module.scss';

export const Icon = ({ icon }) => {
  return (
    <span className={styles.icon} aria-hidden={true}>
      {icon}
    </span>
  );
};
