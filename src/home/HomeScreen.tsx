import {
  Add,
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
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
import CardImageComponent from '../components/CardImageComponent';
import AvatarGroupComponent from '../components/AvatarGroupComponent';
import ProgressBarComponent from '../components/ProgressBarComponent';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
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
        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 color={colors.white} size={20} />
                </TouchableOpacity>
                <TitleComponent title="UX Design" />
                <TextComponent text="Finish wireframe design" />

                <View style={{marginVertical: 28}}>
                  <AvatarGroupComponent />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2023 Match 03"
                  color={colors.decsColor}
                  size={12}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{flex: 1}}>
              <CardImageComponent color="#2196F3">
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 color={colors.white} size={20} />
                </TouchableOpacity>
                <TitleComponent title="API Payment" />
                <AvatarGroupComponent />
                <ProgressBarComponent percent="40%" color="#A2F068" />
              </CardImageComponent>
              <SpaceComponent height={16} />
              <CardImageComponent color="#12B57A">
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 color={colors.white} size={20} />
                </TouchableOpacity>
                <TitleComponent title="Mobile App" />
                <TextComponent text="Col3" />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TitleComponent title="Upcoming" />
          <CardComponent>
            <RowComponent>
              <CircularProgressComponent value={60} radius={42} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>

        {/* <View
          style={{
            height: 500,
            backgroundColor: '#A2F068',
            marginBottom: '100px',
          }}
        /> */}
      </Container>
      <View
        style={{
          height: 50,
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.blue_no_opacity,
              padding: 12,
              borderRadius: 12,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" color={colors.white} flex={0} />
          <Add color={colors.white} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
