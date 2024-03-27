import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
    fontFamily: fontFamilies.PoppinsRegular,
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: colors.blue,
  },
  cardImage: {
    borderRadius: 12,
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {globalStyles};
