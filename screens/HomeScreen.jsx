import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Button } from '../components'

const signOut = () => {
    // delete token action
}
const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Text>HomeScreen</Text>
            <Button handler={() => signOut()} >
                <Text>Sign Out</Text>
            </Button>
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default HomeScreen
