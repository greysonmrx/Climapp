import React, { useState } from 'react';

import { Alert } from 'react-native';

import { connect } from "react-redux";

import * as CityActions from "../../store/actions/cities";
import * as DataActions from "../../store/actions/data";

import { 
    Scroller,
    Container, 
    ImageHeader, 
    Title, 
    Content, 
    Input, 
    Search,
    TextSearch,
    Loading,
    Indicator,
    ContentCity,
    TitleCities,
    Cities,
    City,
    CityName,
    BackIcon,
    Header,
    ClearButton,
    TextClearButton
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { locale, format, key } from '../../config';
import Colors from '../../config/colors';

function Home({ navigation, dispatch, cities }) {
    const [loading, setLoading] = useState(false);
    const [city_name, setCity] = useState(false);

    function clearCities() {
        cities.map(city => {
            dispatch(CityActions.deleteCity(city.id));
            console.log(`Removendo cidade: ${city.name}`);
        });
    }

    async function getResponse(city) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.hgbrasil.com/weather?format=${format}&key=${key}&city_name=${city}&locale=${locale}`);

            const responseJson = await response.json();

            if (responseJson.error) {
                throw responseJson.message;
            }

            if (responseJson.by === "default") {
                throw "Cidade não encontrada!";
            }

            console.log(responseJson);

            dispatch(DataActions.setData(responseJson));

            var addCity = true;
            cities.map(item => {
                if (item.name === city) {
                    addCity = false
                }
            });

            if (addCity) {
                dispatch(CityActions.addCity(responseJson.results.city_name));
            }
            setLoading(false);
            navigation.navigate("Weather");
        } catch(err) {
            Alert.alert('Erro', err);
            setLoading(false);
        }
    }

    return (
        <Scroller>
        <Container>
            <ImageHeader 
                source={require("../../../assets/images/back.png")}
            />
            <Title colorful>
                Clima<Title>pp</Title>
            </Title>
            <Content>
                <Input 
                    placeholder="Digite uma cidade..."
                    onChangeText={(text) => setCity(text)}
                    onSubmitEditing={() => getResponse(city_name)}
                />
                <Search
                    onPress={() => getResponse(city_name)}
                >
                    <TextSearch>Pesquisar</TextSearch>
                </Search>
            </Content>
            {
                cities.length > 0 ? 
                <ContentCity>
                    <Header>
                        <TitleCities>Cidades recentes</TitleCities>
                        <ClearButton
                            onPress={() => clearCities()}
                        >
                            <TextClearButton>
                                Limpar lista
                            </TextClearButton>
                        </ClearButton>
                    </Header>
                    <Cities>
                        {
                            cities.map(item => (
                                <City 
                                    key={String(item.id)}
                                    onPress={() => getResponse(item.name)}
                                >
                                    <BackIcon>
                                        <Icon 
                                            name="city"
                                            color={Colors.blue}
                                            size={30}
                                        />
                                    </BackIcon>                                    
                                    <CityName>{item.name}</CityName>
                                </City>
                            ))
                        }
                    </Cities>
                </ContentCity> : null
            }            
            { loading && <Loading>
                <Indicator />
            </Loading>}
        </Container>
        </Scroller>
    )
}

export default connect (state => ({
    cities: state.cities
}))(Home);