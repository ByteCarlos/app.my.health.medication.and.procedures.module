import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../css/head'

const setaEsquerda = require('../../img/chevron-left.png')
const setaDireita = require('../../img/chevron-right.png')

export default function Head(props) {
  var pageLeft = ''
  var pageRight = ''

  if (props.currentView === 'home') {
    pageLeft = 'home'
    pageRight = 'procedures'
  } else if (props.currentView === 'procedures') {
    pageLeft = 'home'
    pageRight = 'medicines'
  } else if (props.currentView === 'medicines') {
    pageLeft = 'procedures'
    pageRight = 'historic'
  } else if (props.currentView === 'historic') {
    pageLeft = 'medicines'
    pageRight = 'historic'
  }

  const handleViewChange = (viewName) => {
    props.setCurrentView(viewName)
  }
  return (
    <View>
      {/* Tab Navigation */}
      <View style={styles.navigationRemediesContainer}>
        <TouchableOpacity
          onPress={() => {
            if (props.currentView) handleViewChange(pageLeft)
          }}
        >
          <Image
            source={setaEsquerda}
            style={styles.iconNavigationLeft}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleViewChange(pageRight)
          }}
        >
          <Image
            source={setaDireita}
            style={styles.iconNavigationRight}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}
