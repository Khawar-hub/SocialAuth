import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(1.5),
    backgroundColor: AppColors.white,
    height: height(6),
    width: width(80),
    alignSelf: 'center',
  },
  text: {
    color: AppColors.gray,
    fontSize: width(4),
  },
  img:{
    position:"absolute",
    left:12,
    height:height(4),
    width:width(7)
  }
});
export default styles;
