import React from 'react';

import { connect } from "react-redux";

import { 
    Container, 
    Header, 
    Content, 
    City, 
    DateExt, 
    TextIcon,
    Main,
    Temperature,
    Deg,
    Description,
    Details,
    Value,
    SearchAnotherCity,
    TextSearchAnotherCity
} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';

import LottieView from 'lottie-react-native';
import Colors from '../../config/colors';
import Footer from '../../components/Footer';

function Weather({ navigation, data }) {
    function mapCondition(condition, day) {
        switch (condition) {
            case "storm": {
                return require("../../../assets/animations/storm.json");
            }
            case "snow": {
                if (day) {
                    return require("../../../assets/animations/snow_sunny.json");
                } else {
                    return require("../../../assets/animations/snow_night.json");
                }
            }
            case "hail": {
                return require("../../../assets/animations/snow.json");
            }
            case "rain": {
                if (day) {
                    return require("../../../assets/animations/rain_sunny.json");
                } else {
                    return require("../../../assets/animations/rain_night.json");
                }
            }
            case "fog": {
                return require("../../../assets/animations/fog.json");
            }
            case "clear_night": {
                return require("../../../assets/animations/clear_night.json");
            }
            case "clear_day": {
                return require("../../../assets/animations/clear_day.json");
            }
            case "cloud": {
                return require("../../../assets/animations/cloud.json");
            }
            case "cloudly_day": {
                return require("../../../assets/animations/cloudy_sunny.json");
            }
            case "cloudly_night": {
                return require("../../../assets/animations/cloudy_night.json");
            }
            case "none_day": {
                return require("../../../assets/animations/clear_day.json");
            }
            case "none_night": {
                return require("../../../assets/animations/clear_night.json");
            }
        }
    }

    function mapDate(date) {
        switch (date.split('/')[1]) {
            case "01": 
                return `${date.split("/")[0]} de Janeiro de ${date.split("/")[2]}`;
            case "01": 
                return `${date.split("/")[0]} de Fevereiro de ${date.split("/")[2]}`;
            case "02": 
                return `${date.split("/")[0]} de Março de ${date.split("/")[2]}`;
            case "03": 
                return `${date.split("/")[0]} de Abril de ${date.split("/")[2]}`;
            case "04": 
                return `${date.split("/")[0]} de Maio de ${date.split("/")[2]}`;
            case "05": 
                return `${date.split("/")[0]} de Junho de ${date.split("/")[2]}`;
            case "06": 
                return `${date.split("/")[0]} de Julho de ${date.split("/")[2]}`;
            case "07": 
                return `${date.split("/")[0]} de Agosto de ${date.split("/")[2]}`;
            case "08": 
                return `${date.split("/")[0]} de Setembro de ${date.split("/")[2]}`;
            case "09": 
                return `${date.split("/")[0]} de Outubro de ${date.split("/")[2]}`;
            case "11": 
                return `${date.split("/")[0]} de Novembro de ${date.split("/")[2]}`;
            case "12": 
                return `${date.split("/")[0]} de Dezembro de ${date.split("/")[2]}`;
        }
    }

    function mapHour(hours) {
        const hour = hours.split(" ")[0];
        const type = hours.split(" ")[1];
        
        if (type === "am") {
            return hour;
        } else {
            if (parseInt(hour.split(":")[0]) === 12) {
                return `00:${hour.split(":")[1]}`
            }

            return `${parseInt(hour.split(":")[0]) + 12}:${hour.split(":")[1]}`;
        }
    }

    return (
        <Container day={data.results.currently === "dia"}>
             <Header>
                <Content space_between style={{ width: "70%"}}>
                    <City>{data.results.city_name}</City>
                    <DateExt>{mapDate(data.results.date)}</DateExt>
                </Content>
                <Content space_between>
                    <Content 
                        row 
                        marginTop={10}
                        alignCenter
                    >
                        <Icon 
                            name="horizon-alt"
                            color={Colors.white}
                            size={25}
                        />
                        <TextIcon>{mapHour(data.results.sunrise)}</TextIcon>
                    </Content>
                    <Content row alignCenter>
                        <Icon 
                            name="horizon"
                            color={Colors.white}
                            size={25}
                        />
                        <TextIcon>{mapHour(data.results.sunset)}</TextIcon>
                    </Content>
                </Content>
            </Header>
            <Main>
                <LottieView 
                    source={mapCondition(data.results.condition_slug, data.results.currently === "dia")}
                    autoPlay
                    loop
                    style={{ width: 200, height: 200 }}
                />
                <Content>
                    <Temperature>
                        <Value>{data.results.temp}</Value>
                        <Deg>ºC</Deg>
                    </Temperature>
                    <Description>{data.results.description}</Description>
                </Content>
            </Main>
            <Details>
                <Content alignCenter>
                    <Deg>{data.results.wind_speedy}</Deg>
                    <Description>Vento</Description>
                </Content>
                <Content alignCenter>
                    <Deg>{data.results.humidity}%</Deg>
                    <Description>Humidade</Description>
                </Content>
            </Details>
            <SearchAnotherCity
                onPress={() => navigation.navigate("Home")}
            >
                <TextSearchAnotherCity>Pesquisar outra cidade</TextSearchAnotherCity>
            </SearchAnotherCity>
            <Footer forecast={data.results.forecast}/>            
        </Container>
    );
}

export default connect (state => ({
    data: state.data
}))(Weather);