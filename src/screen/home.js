import { StyleSheet, SafeAreaView, View, Pressable } from 'react-native'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { useNavigation } from '@react-navigation/native';


export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
   
   
})