import { StyleSheet } from 'react-native'
import colors from '../../assets/styles/colors'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.extraLight,
        paddingVertical: 10,
        borderRadius: 16,
        gap: 4
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    quantity: {
        minWidth: 20
    },
    button: {
        paddingHorizontal: 10
    },
    buttonDisabled: {
        opacity: 0.2
    },
})

export default styles
