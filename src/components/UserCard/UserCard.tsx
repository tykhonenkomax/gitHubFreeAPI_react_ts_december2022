import styles from './UserCard.module.scss';
import {UserStat, UserStatProps} from "../UserStat";

interface UserCardProps extends UserStatProps {
}

export const UserCard = (props: UserCardProps) => (
    <div className={styles.userCard}>
        <UserStat
            repos={props.repos}
            followers={props.followers}
            following={props.following}/>
    </div>
);
