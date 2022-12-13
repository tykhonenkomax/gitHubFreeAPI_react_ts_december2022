import { useState } from 'react';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';
import { defaultUser } from 'mock';
import {inspect} from "util";


function App() {
    return (
            <Container >
            <TheHeader/>
            <Search hasError onSubmit={() => {
            }}/>
            <UserCard {...defaultUser}/>
        </Container>
    );
}

export default App;
