import styled from 'styled-components/native';

import Colors from '../../config/colors';

export const Scroller = styled.ScrollView``;

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    align-items: center;
`;

export const ImageHeader = styled.Image`
    max-width: 100%;
    height: 175px;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-family: "Product Sans Regular";
    color: ${props => props.colorful ? Colors.blue : Colors.default};
    margin-top: 35px;
`;

export const Content = styled.View`
    width: 80%;
    margin-top: 50px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    color: ${Colors.default};
    background-color: ${Colors.lightGray};
    font-family: "Product Sans Regular";
    paddingHorizontal: 20px;
    font-size: 15px;
    border-radius: 5px;
`;

export const Search = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${Colors.blue};
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const TextSearch = styled.Text`
    color: ${Colors.white};
    font-size: 17px;
    font-family: "Product Sans Regular";
`;

export const Loading = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    align-items: center;
    justify-content: center;
`;

export const Indicator = styled.ActivityIndicator.attrs({
    color: Colors.blue,
    size: "large"
})``;

export const ContentCity = styled.View`
    width: 100%;
    padding: 30px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const ClearButton = styled.TouchableOpacity`
    background-color: ${Colors.white};
    padding: 8px;
    border-radius: 5px;
`;

export const TextClearButton = styled.Text`
    font-size: 15px;
    font-family: "Product Sans Regular";
    color: ${Colors.red};
`;

export const TitleCities = styled.Text`
    font-size: 20px;
    font-family: "Product Sans Regular";
    color: ${Colors.default};
`;

export const Cities = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
`;

export const City = styled.TouchableOpacity`
    align-items: center;
    margin-right: 10px;
    width: 80px;
`;

export const BackIcon = styled.View`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    background-color: rgba(78, 164, 249, .25);
    border-radius: 100px;
`;

export const CityName = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 17px;
    font-family: "Product Sans Regular";
    color: ${Colors.default};
    margin-top: 10px;
`;