import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Alert } from 'react-native'
import { Link, CustomTextInput, Button } from '../components'
import WaterfallImage from '../assets/waterfall.svg'
import SvgUri from 'react-native-svg-uri';

import { connect } from 'react-redux';
import { getToken } from '../reducers';


const AutorizationScreen = ({ getToken, token, navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSending, setIsSending] = useState(false)

    const showAlert = (title = 'RESPONSE', data) => {
        Alert.alert(
            `${title}`,
            `${data}`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    }
    useEffect(() => {
        const getTokenRequest = async () => {
            if (isSending) {
                try {
                    await getToken();
                    showAlert('RESPONSE TOKEN', `${token}`)
                } catch (error) {
                    showAlert('ERROR', error)
                } finally {
                    setIsSending(false)
                }
            }
        };
        getTokenRequest();
    }, [isSending]);

    return (
        <Container behavior="position" contentContainerStyle={{
            flex: 1,
            width: '100%'
        }} >
            <ImageBlock>
                <SvgUri
                    width="200"
                    height="200"
                    source={WaterfallImage}
                />
                <ImageLabel>Nature inc.</ImageLabel>
            </ImageBlock>
            <AuthorizationBlock>
                <CustomTextInput value={login} placeholder={'Логин'} onChangeText={login => setLogin(login)} />
                <CustomTextInput value={password} placeholder={'Пароль'} onChangeText={password => setPassword(password)} />
                <Button handler={() => {
                    setIsSending(true)
                }} disabled={isSending}>
                    <Text>Войти</Text>
                </Button>
                <AdditionalText >
                    <AdditionalTextLabel >Нажимая войти, вы подтверждаете ознакомление с
                        <Link text=" пользовательским соглашением" handler={() => showAlert('Пользовательское соглашение', '111222333')} /></AdditionalTextLabel>
                </AdditionalText>
            </AuthorizationBlock>
        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
        flex: 1;
        padding:20px;
        justify-content:center;
        align-items:center;
        `;

const ImageBlock = styled.View`
        flex: 0.6;
        justify-content:center;
        align-items:center;
        `;
const AuthorizationBlock = styled.View`
    flex: 0.4;
    width:100%;
    justify-content:center;
    `;

const ImageLabel = styled.Text`
        font-weight:700;
        color:#000;
        font-size:24px;
        margin-top:10px;
        `;

const AdditionalText = styled.View`
flex:1;
margin-top:20px;
`;

const AdditionalTextLabel = styled.Text`
text-align:center;
font-size: 12;
`;

const mapStateToProps = state => {
    return {
        token: state.token
    };
};
const mapDispatchToProps = {
    getToken
};


export default connect(mapStateToProps, mapDispatchToProps)(AutorizationScreen);

