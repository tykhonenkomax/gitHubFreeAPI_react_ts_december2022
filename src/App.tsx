import {useState} from 'react';

import {Container} from 'components/Container';
import {Search} from 'components/Search';
import {TheHeader} from 'components/TheHeader';
import {UserCard} from 'components/UserCard';
import {defaultUser} from 'mock';
import {GitHubError, GitHubUser, LocalGitHubUser} from "./tayps";
import {isGitHubUser} from "./utils/typeGuards";
import {extractLocalUser} from "./utils/extract-local-user";


const BASE_URL = 'https://api.github.com/users/'

function App() {

    let [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

    const fetchUser = async (userName: string) => {
        const url = BASE_URL + userName;
        const res = await fetch(url)
        const user = await res.json() as GitHubUser | GitHubError;

        if (isGitHubUser(user)) {
            setUser(extractLocalUser(user))
        } else {
            setUser(null)
        }
    }

    return (
        <Container>
            <TheHeader/>
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user && (<UserCard {...user}/>)}
        </Container>
    );
}

export default App;
