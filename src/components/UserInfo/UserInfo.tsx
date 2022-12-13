import {LocalGitHubUser} from "../../tayps";
import {InfoItem, InfoItemProps} from "../InfoItem";
import styles from './UserInfo.module.scss';
import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as BlogIcon} from 'assets/icon-website.svg'

interface UserInfoProps extends Pick<LocalGitHubUser, 'blog' | 'company' | 'location' | 'twitter'> {
}

export const UserInfo = ({blog, location, company, twitter}: UserInfoProps) => {

    const items: InfoItemProps[] = [
        {
            icon: <LocationIcon/>,
            text: location
        },
        {
            icon: <BlogIcon/>,
            text: blog
        },
        {
            icon: <TwitterIcon/>,
            text: twitter
        },
        {
            icon: <CompanyIcon/>,
            text: company
        }
    ]
    return (
        <div className={styles.userInfo}>
            {
                items.map((item, index) => (<div>
                    <InfoItem {...item} key={index}/>
                </div>))
            }
        </div>
    )
};
