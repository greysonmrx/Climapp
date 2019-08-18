import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: "Product Sans Bold";
    font-size: 25px;
    color: ${Colors.dark};
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 16px;
    color: ${Colors.default};
    width: 70%;
    text-align: center;
    margin-bottom: 100px;
`;