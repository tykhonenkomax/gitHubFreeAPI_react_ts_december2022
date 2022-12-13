import styles from './UserTitle.module.scss';

interface UserTitleProps { }

export const UserTitle = ({ }: UserTitleProps) => (
  <div className={styles.userTitle}>
    UserTitle Component
  </div>
);
