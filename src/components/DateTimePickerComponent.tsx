import {ArrowDown2} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Button, Modal, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import TitleComponent from './TitleComponent';

interface Props {
  type?: 'date' | 'time' | 'datetime';
  title?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (val: Date) => void;
}

const DateTimePickerComponent = (props: Props) => {
  const {selected, onSelect, placeholder, title, type} = props;

  const [isVisibleModalDateTime, setIsVisibleModalDateTime] = useState(false);
  const [date, setDate] = useState(selected ?? new Date());
  return (
    <>
      <View style={{marginBottom: 16}}>
        {title && <TitleComponent title={title} />}
        <RowComponent
          onPress={() => setIsVisibleModalDateTime(true)}
          styles={[
            globalStyles.inputContainer,
            {marginTop: title ? 8 : 0, paddingVertical: 16},
          ]}>
          <TextComponent
            flex={1}
            text={
              date
                ? type === 'time'
                  ? `${date.getHours()}:${date.getMinutes()}`
                  : `${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()}`
                : placeholder
                ? placeholder
                : ''
            }
            color={selected ? colors.textColor : '#676767'}
          />
          <ArrowDown2 size={20} color={colors.textColor} />
        </RowComponent>
      </View>

      <DatePicker
        open={isVisibleModalDateTime}
        modal
        onCancel={() => {
          setIsVisibleModalDateTime(false);
        }}
        onConfirm={value => {
          setDate(value);
          onSelect(value);
          setIsVisibleModalDateTime(false);
        }}
        mode={type ? type : 'datetime'}
        date={date}
        locale="vi"
      />

      {/* <Modal visible={isVisibleModalDateTime} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              margin: 20,
              width: '90%',
              backgroundColor: colors.white,
              padding: 20,
              borderRadius: 20,
            }}>
            <TitleComponent title="Date time picker" color={colors.blue} />
            <View>
              <DatePicker
                mode={type ? type : 'datetime'}
                date={date}
                onDateChange={(val: React.SetStateAction<Date>) => setDate(val)}
                locale="vi"
              />
            </View>
            <SpaceComponent height={20} />
            <Button
              title="Comfirm"
              onPress={() => {
                onSelect(date);
                setIsVisibleModalDateTime(false);
              }}
            />
            <Button
              title="Close"
              onPress={() => setIsVisibleModalDateTime(false)}
            />
          </View>
        </View>
      </Modal> */}
    </>
  );
};

export default DateTimePickerComponent;
