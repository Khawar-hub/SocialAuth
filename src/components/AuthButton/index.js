import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity,Image} from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from './styles';

const Button = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  path
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
        <Image style={styles.img} source={path}/>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
