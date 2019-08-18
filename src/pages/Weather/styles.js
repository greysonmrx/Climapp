import styled from 'styled-components/native';

import Colors from '../../config/colors';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${props => props.day ? Colors.blue : Colors.dark}
    padding: 32px 32px 100px 32px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex-direction: ${props => props.row ? "row" : "column"};
    justify-content: ${props => props.space_between ? "space-between" : "flex-start"};
    ${props => props.marginTop ? `margin-top: ${props.marginTop}px;` : null}
    ${props => props.alignCenter ? `align-items: center`: null}
`;

export const City = styled.Text.attrs({
    numberOfLines: 1
})`
    font-family: "Product Sans Bold";
    font-size: 40px;
    color: ${Colors.white};
    margin: 0px;
    padding: 0px;
`;

export const DateExt = styled.Text.attrs({
    numberOfLines: 1
})`
    font-family: "Product Sans Regular";
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
`;

export const TextIcon = styled.Text`
    color: ${Colors.white};
    margin-left: 10px;
    font-family: "Product Sans Regular";
`;

export const Main = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 25px;
`;

export const Temperature = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

export const Value = styled.Text`
    color: ${Colors.white};
    font-family: "Product Sans Regular";
    font-size: 40px;
`;

export const Deg = styled.Text`
    color: ${Colors.white};
    font-family: "Product Sans Regular";
    font-size: 25px;
`;

export const Description = styled.Text`
    font-family: "Product Sans Regular";
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
`;

export const Details = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`;

export const SearchAnotherCity = styled.TouchableOpacity`
    margin-top: 20px;
    padding: 8px;
    justify-content: center;
    align-items: center;
`;

export const TextSearchAnotherCity = styled.Text`
    font-family: "Product Sans Regular";
    color: rgba(255, 255, 255, 1);
`;
