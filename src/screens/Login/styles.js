import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent:'flex-end'
   
  },
  gradient:{
    position:'absolute',
    bottom:0

  },
  contentView:{
    height:height(55),
    paddingHorizontal:width(3)
    
  }, modalView:{ 
    borderRadius:10,
    height:'auto',
    width:'80%',
    backgroundColor:'#fff',
    alignSelf:'center',
    paddingHorizontal:14,
    paddingVertical:20,
    zIndex:10
  },
  headingView:{
     
  },
  headingFont:{
    fontSize:24,
    color:AppColors.white,
    fontWeight:'bold'
  },
  buttonView:{
    marginTop:height(5),
    justifyContent:'space-between',
    height:height(22)
    
    
  },
  footerView:{
    position:'absolute',
    bottom:10,
    alignSelf:'center'

  },
  footerText:{
    color:AppColors.white,
    alignSelf:'center',
    marginBottom:height(1),
    fontSize:height(2)
  }
});
export default styles;
