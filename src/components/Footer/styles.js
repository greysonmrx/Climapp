import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const Item = styled.View`
    height: 100px;
    justify-content: space-between;
    width: 90px;
    align-items: center;
    border-right-color: rgba(255, 255, 255, 0.6);
    border-right-width: 1px;
`;

export const WeekDay = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
`;

export const Temperature = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
`;
