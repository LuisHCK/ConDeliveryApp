import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RefreshIcon from '../Icons/Refresh'
import colors from '../../assets/styles/colors'
import GrillIcon from '../Icons/Grill'
import SvgMotorbike from '../Icons/Motorbike'
import SvgCheck from '../Icons/Check'

const OrderStatus = ({ currentStatus }) => {
    const getStatus = () => {}

    return (
        <View>
            <View style={styles.connector} />
            <View style={styles.statusItem}>
                <RefreshIcon
                    style={styles.icon}
                    width={32}
                    height={32}
                    stroke={
                        currentStatus == 'pendiente'
                            ? colors.primary
                            : colors.background
                    }
                />
                <Text
                    style={[
                        styles.statusLabel,
                        currentStatus === 'pendiente' && styles.labelActive
                    ]}
                >
                    Pendiente
                </Text>
            </View>

            <View style={styles.statusItem}>
                <GrillIcon
                    style={styles.icon}
                    width={32}
                    height={32}
                    stroke={
                        currentStatus == 'en_proceso'
                            ? colors.primary
                            : colors.background
                    }
                />
                <Text
                    style={[
                        styles.statusLabel,
                        currentStatus === 'en_proceso' && styles.labelActive
                    ]}
                >
                    En proceso
                </Text>
            </View>

            <View style={styles.statusItem}>
                <SvgMotorbike
                    style={styles.icon}
                    width={32}
                    height={32}
                    stroke={
                        currentStatus == 'enviado'
                            ? colors.primary
                            : colors.background
                    }
                />
                <Text
                    style={[
                        styles.statusLabel,
                        currentStatus === 'enviado' && styles.labelActive
                    ]}
                >
                    Enviado
                </Text>
            </View>

            <View style={styles.statusItem}>
                <SvgCheck
                    style={styles.icon}
                    width={32}
                    height={32}
                    stroke={
                        currentStatus == 'completado'
                            ? colors.primary
                            : colors.background
                    }
                />
                <Text
                    style={[
                        styles.statusLabel,
                        currentStatus === 'completado' && styles.labelActive
                    ]}
                >
                    Completado
                </Text>
            </View>
        </View>
    )
}

export default OrderStatus

const styles = StyleSheet.create({
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16
    },
    pending: {
        color: colors.extraLight
    },
    statusLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.light,
        color: colors.background
    },
    labelActive: {
        color: colors.primary
    },
    icon: {
        marginRight: 10,
        backgroundColor: colors.white
    },
    connector: {
        position: 'absolute',
        height: '85%',
        width: 1,
        left: 15,
        top: 16,
        borderStyle: 'dashed',
        borderStartColor: colors.background,
        borderStartWidth: 3,
    }
})
