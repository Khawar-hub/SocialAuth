import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Actions/Auth';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import { showMessage } from 'react-native-flash-message';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import BGImage from '../../assets/images/bgimg.png';
import AuthButton from '../../components/AuthButton'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Modal from "react-native-modal";
import ModalC from './modal';
import { facebook, google } from '../../Redux/Actions/SocialAuth';
export default function Dashboard(props) {
  Platform.OS === 'ios'
    ? GoogleSignin.configure({
      webClientId:
        '1062602862131-4pi2gae6v0b1ssgsdd9jm6fngk6vjkru.apps.googleusercontent.com',
    })
    : GoogleSignin.configure({
      webClientId:
        '1062602862131-4pi2gae6v0b1ssgsdd9jm6fngk6vjkru.apps.googleusercontent.com',
    });
    const [isModalVisible, setModalVisible] = React.useState(false);
    const showModal = () => {
      setModalVisible(true)
    }
  const userDetail = useSelector((state) => state.SocialAuth.user);

  const dispatch = useDispatch();
  const loginMethod = () => {
    dispatch(setLoaderVisible(true));
    setTimeout(() => {
      showMessage({
        message: 'Success',
        description: 'Succfully logged In',
        type: 'success',
      });
      dispatch(setLoaderVisible(false));
      dispatch(login({ userName: 'John Doe' }));
    }, 1500);
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res=await auth().signInWithCredential(googleCredential);
   console.log(res)
    dispatch(google({
      
      name:res.additionalUserInfo.profile.name,
      email:res.additionalUserInfo.profile.email,
      uri:res.additionalUserInfo.profile.picture,
      
    }))
    showModal()
  
  }

  const emailSignIn = () => {
    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    const res=await  auth().signInWithCredential(facebookCredential);
    console.log(res.additionalUserInfo.profile.picture)
    dispatch(facebook({
   
      name:res.additionalUserInfo.profile.name,
      email:res.additionalUserInfo.profile.email,
      uri:res.additionalUserInfo.profile.picture,
      
    }))
    showModal()

  }

  return (
    <ScreenWrapper backgroundImage={BGImage} statusBarColor={AppColors.white}>
       <Modal
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.5}
        animationIn={'bounceIn'}
        animationOut={'bounceOut'}
        isVisible={isModalVisible}>
        <ModalC score={userDetail} />
      </Modal>
      <View style={styles.mainViewContainer}>
        <Image style={styles.gradient} source={require('../../assets/images/gradient.png')} />
        <View style={styles.contentView}>
          <View style={styles.headingView}>
            <Text style={styles.headingFont}>Connect with</Text>
            <Text style={styles.headingFont}>Friends and Food</Text>
          </View>
          <View style={styles.buttonView}>
            <AuthButton onPress={()=>onGoogleButtonPress()} title={'Continue with google'} path={require('../../assets/images/google.png')} />
            <AuthButton onPress={onFacebookButtonPress} title={'Continue with Facebook'} path={require('../../assets/images/facebook.png')} />
            <AuthButton onPress={emailSignIn} title={'Continue with Email'} path={require('../../assets/images/mail.png')} />


          </View>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <AuthButton title={'Create an Account'} path={require('../../assets/images/account.png')} />

          </View>

        </View>
      </View>
    </ScreenWrapper>
  );
}
