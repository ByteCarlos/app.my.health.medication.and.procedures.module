import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { MyHealthModule } from '../../modules'
import { RouteParams } from '../../routeParams'
import Home from './views/home/index'

type RemediesProps = NativeStackScreenProps<
  RouteParams,
  MyHealthModule.Remedies
>

export default function Remedies(props: RemediesProps) {
  return <Home />
}
