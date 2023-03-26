import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, StyleSheet } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import Home from './views/home/index'
import Navigation from './views/layouts'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>

export default function Remedies(props: RemediesProps) {
  return (
    <View style={styles.container}>
      <Home />
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
