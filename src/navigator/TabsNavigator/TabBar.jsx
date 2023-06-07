import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors, { transparentize } from 'src/assets/styles/colors'

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    })
                }

                const renderIcon = () => {
                    const TabIcon = options.icon

                    return TabIcon ? (
                        <TabIcon stroke={colors.light} style={styles.tabIcon} />
                    ) : (
                        <React.Fragment />
                    )
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: isFocused ? 4 : 1,
                            display: options.hideTab ? 'none' : 'flex',
                            backgroundColor: isFocused
                                ? transparentize(colors.primary, 5)
                                : colors.white,
                            ...styles.button
                        }}
                    >
                        {renderIcon()}
                        {isFocused && <Text style={styles.label}>{label}</Text>}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderTopColor: colors.extraLight,
        borderTopWidth: 1,
        backgroundColor: colors.white
    },
    tabIcon: { marginHorizontal: 6 },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        marginHorizontal: 20,
        borderRadius: 100
    },
    label: {
        color: colors.light,
        textAlign: 'center'
    }
})

export default TabBar
