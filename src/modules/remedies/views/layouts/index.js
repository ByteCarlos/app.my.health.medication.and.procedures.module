import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/footer'
const calendarIcon = require('../../img/calendar-icon.png')
const healthIcon = require('../../img/health-icon.png')
const remedioIcon = require('../../img/remedio-icon.png')
const relogioIcon = require('../../img/relogio-icon.png')

const FooterButton = ({ id, image, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={isActive ? styles.footerButtonActive : styles.footerButton}
      onPress={onPress}
    >
      <Image
        source={image}
        style={
          isActive ? styles.footerButtonImageActive : styles.footerButtonImage
        }
      />
    </TouchableOpacity>
  )
}

export default function Navigation(props) {
  const [activeButton, setActiveButton] = useState('button1')

  const handleButtonPress = (id) => {
    if (id === activeButton) {
      setActiveButton(null)
    } else {
      setActiveButton(id)
    }
  }

  const handleViewChange = (viewName) => {
    props.setCurrentView(viewName)
  }

  return (
    <View style={styles.footerContainer}>
      <FooterButton
        id="button1"
        image={calendarIcon}
        isActive={activeButton === 'button1'}
        onPress={() => {
          handleButtonPress('button1')
          handleViewChange('home')
        }}
      />
      <FooterButton
        id="button2"
        image={healthIcon}
        isActive={activeButton === 'button2'}
        onPress={() => {
          handleButtonPress('button2')
          handleViewChange('procedures')
        }}
      />
      <FooterButton
        id="button3"
        image={remedioIcon}
        isActive={activeButton === 'button3'}
        onPress={() => {
          handleButtonPress('button3')
          handleViewChange('medicines')
        }}
      />
      <FooterButton
        id="button4"
        image={relogioIcon}
        isActive={activeButton === 'button4'}
        onPress={() => {
          handleButtonPress('button4')
          handleViewChange('historic')
        }}
      />
    </View>
  )
}
