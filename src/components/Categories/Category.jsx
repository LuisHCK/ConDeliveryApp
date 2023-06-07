import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import colors, { transparentize } from 'src/assets/styles/colors'
import { API_URL } from '@env'

const Category = ({ name, icon, onPress, isActive }) => {
    console.log(`${API_URL}${icon}`)
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            width: 64
        },
        button: {
            width: 64,
            height: 64,
            backgroundColor: isActive ? colors.primary : colors.extraLight,
            textWrap: 'nowrap',
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            width: 32,
            height: 32,
            tintColor: isActive ? colors.extraLight : colors.light
        },
        label: {
            textAlign: 'center'
        }
    })

    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
            android_ripple={{
                color: colors.extraLight
            }}
        >
            <View style={styles.button}>
                <Image
                    style={[styles.icon]}
                    source={{ uri: `${API_URL}${icon}` }}
                />
            </View>
            <Text style={styles.label}>{name}</Text>
        </Pressable>
    )
}

export default Category
