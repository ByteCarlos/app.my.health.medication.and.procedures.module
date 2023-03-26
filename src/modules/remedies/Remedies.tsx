import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import Home from './views/home'
import Procedures from './views/procedures'
import Medicines from './views/medicines'
import Historic from './views/historic'
import Navigation from './views/layouts'
import Head from './views/layouts/head'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>

export default function Remedies(props: RemediesProps) {
  const [currentView, setCurrentView] = useState('home')

  return (
    <View style={styles.container}>
      <Head />
      {currentView === 'home' && <Home />}
      {currentView === 'procedures' && <Procedures />}
      {currentView === 'medicines' && <Medicines />}
      {currentView === 'historic' && <Historic />}
      <Navigation setCurrentView={setCurrentView} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
