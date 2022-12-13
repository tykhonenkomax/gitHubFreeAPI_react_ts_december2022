import styles from './UserTitle.module.scss';
import {LocalGitHubUser} from "../../tayps";

interface UserTitleProps extends Pick <LocalGitHubUser, 'name' | 'login' | 'created'> {
}

const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
})

export const UserTitle = ({name, login, created}: UserTitleProps) => {

    const joinedData = localDate.format(new Date(created))
    return (
        <div className={styles.userTitle}>
            <h2>{name}</h2>
            <h3>{login}</h3>
            <span>{joinedData}</span>

        </div>

    )
};
