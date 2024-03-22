import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Text style={globalStyles.text}>Home Screen</Text>
          <Text style={globalStyles.text}>Home Screen</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi Teamfight Tactics" />
        <TitleComponent title="Be productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={globalStyles.inputContainer}
          onPress={() => {
            console.log('click');
          }}>
          <TextComponent text="Hi Teamfight Tactics" />
          <Text>132</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent title="Task progress" />
              <TextComponent text="30/40 tasks done" />

              <TextComponent text="tab" />
            </View>
            <View>
              <TextComponent text="Remain" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
