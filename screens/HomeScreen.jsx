import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Button } from '../components'

import { deleteToken } from '../actions';
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    return (
        <Container>
            <Text>HomeScreen</Text>
            <Text>Token = {token}</Text>
            <Button handler={() => dispatch(deleteToken())} >
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
