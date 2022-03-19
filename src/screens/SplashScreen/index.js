import React from 'react';
import { View, Text ,Image} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { showMessage } from 'react-native-flash-message';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import { useIsFocused } from '@react-navigation/native';
export default function Dashboard(props) {
  const focus=useIsFocused()
  React.useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate("Login")
    },1500)
  },[focus])
 
  return (
    <ScreenWrapper statusBarColor={AppColors.white}>
      <View style={styles.mainViewContainer}>
        <Image source={require('../../assets/images/logo.png')}
        />
      </View>
    </ScreenWrapper>
  );
}
