import React from 'react';

import { 
    Container,
    Title,
    SubTitle
 } from './styles';

 import LottieView from 'lottie-react-native';

 import Animation from '../../../assets/animations/404.json';

export default function NoConnection() {
    return (
        <Container>
            <LottieView 
                source={Animation}
                loop
                autoPlay
                style={{ width: 150, height: 150 }}
            />
            <Title>Sem conexão</Title>
            <SubTitle>Por favor verifique sua conexão com a internet e tente novamente.</SubTitle>
        </Container>
    );
}