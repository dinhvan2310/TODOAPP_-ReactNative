import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import React from 'react';
import {View} from 'react-native';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import CircularProgressComponent from '../components/CircularProgressComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 color={colors.decsColor} size={24} />
          <Notification color={colors.decsColor} size={24} />
          {/* <IonIcons name="notifications" size={24} color={colors.decsColor} /> */}
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
          <TextComponent color={colors.gray2} text="Search Tasks" />
          <SearchNormal1 color={colors.decsColor} size={20} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent title="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent text="March 22" />
              </RowComponent>
            </View>
            <View>
              <CircularProgressComponent value={50} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
