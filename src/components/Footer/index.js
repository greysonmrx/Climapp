import React from 'react';

import { 
    Container,
    Item,
    WeekDay,
    Temperature
} from './styles';

import Icon from 'react-native-vector-icons/Fontisto';
import Colors from '../../config/colors';

export default function Footer({ forecast }) {
    function mapCondition(condition) {
        switch (condition) {
            case "storm": {
                return "lightning";
            }
            case "snow": {
                return "snow";
            }
            case "hail": {
                return "snows";
            }
            case "rain": {
                return "rain";
            }
            case "fog": {
                return "fog";
            }
            case "clear_night": {
                return "night-clear";
            }
            case "clear_day": {
                return "cloudy";
            }
            case "cloud": {
                return "day-cloudy";
            }
            case "cloudly_day": {
                return "day-cloudy";
            }
            case "cloudly_night": {
                return "night-alt-cloudy";
            }
            case "none_day": {
                return "day-sunny";
            }
            case "none_night": {
                return "night-clear";
            }
        }
    }

    return (
        <Container>
            {
                forecast.map((item, index) => (
                    <Item key={index}>
                        <WeekDay>{ item.weekday }</WeekDay>
                        <Icon 
                            name={mapCondition(item.condition)}
                            size={25}
                            color={Colors.white}
                        />
                        <Temperature>{ (item.min + item.max) / 2 }º</Temperature>
                    </Item>
                ))
            }
        </Container>
    );
}