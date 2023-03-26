import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/footer'
const calendarIcon = require('../../img/calendar-icon.png')
const healthIcon = require('../../img/health-icon.png')
const remedioIcon = require('../../img/remedio-icon.png')
const relogioIcon = require('../../img/relogio-icon.png')

export default function Main() {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButtonActive}>
        <Image
          source={calendarIcon}
          style={styles.footerButtonImageActive}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Image source={healthIcon} style={styles.footerButtonImage}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Image source={remedioIcon} style={styles.footerButtonImage}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
        <Image source={relogioIcon} style={styles.footerButtonImage}></Image>
      </TouchableOpacity>
    </View>
  )
}
