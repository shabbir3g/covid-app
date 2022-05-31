import { StyleSheet, SafeAreaView, View, Pressable, Image } from 'react-native'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import flug from '../../assets/flug.png'
import { Ionicons } from '@expo/vector-icons';
import prev1 from '../../assets/prev1.png'
import prev2 from '../../assets/prev2.png'
import prev3 from '../../assets/prev3.png'
import bottomimage from '../../assets/bottomimage.png'




export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topView}> 
                <View style={styles.topMenu} > 
                    <Text><MaterialIcons name="menu-open" size={24} color="white" /></Text>
                    <Text><Feather name="bell" size={24} color="white" /></Text>
                </View>
                <View style={styles.logo}> 
                    <Text preset='bold' style={{color: '#fff'}}>Covid-19</Text>
                    <Image source={flug} ></Image>
                </View>
                <View style={{paddingHorizontal: 30}}> 
                <Text preset='medium' style={{color: '#fff', marginBottom: 20}}>Are you feeling sick?</Text>
                <Text style={{color: '#fff', marginBottom: 20, lineHeight: 20}}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 30 }} > 
                    <Pressable style={styles.leftBtn} ><Ionicons name="call" size={24} color="white" /><Text style={{color: colors.white, fontSize: 20}} >Call Now</Text></Pressable>
                    <Pressable style={styles.rightBtn}><MaterialIcons name="message" size={24} color="white" /><Text style={{color: colors.white, fontSize: 20}} >Send SMS</Text></Pressable>
                </View>
            </View>
            <View style={styles.bottomView}> 
                <Text preset='medium'  >Prevention</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 50 } } > 
                    <View>
                        <Image source={prev1} style={{marginBottom: 10}} />
                        <Text style={styles.btmText} >Avoid close</Text>
                        <Text style={styles.btmText}> contact</Text>
                    </View>
                    <View>
                        <Image source={prev2} style={{marginBottom: 10}} />
                        <Text style={styles.btmText}>Clean your</Text>
                        <Text style={styles.btmText}>hands often</Text>
                    </View>
                    <View>
                        <Image source={prev3} style={{marginBottom: 10}} />
                        <Text style={styles.btmText}>Wear a</Text>
                        <Text style={styles.btmText}>facemask</Text>
                    </View>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}} > 
                <Image source={bottomimage} />
                </View>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    topView: {
        flex: 1,
        backgroundColor: colors.purple,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    bottomView: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 20,
        paddingHorizontal: 30,
    },
    topMenu: {
        paddingHorizontal: 30,
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 30,
        marginBottom: 50
    },
    leftBtn: {
        backgroundColor: colors.red,
        width: '45%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'space-between'
    },
    rightBtn: {
        backgroundColor: colors.blue,
        width: '45%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:  'space-between'
    },
    btmText: {
        textAlign: 'center'
    }
   
   
})