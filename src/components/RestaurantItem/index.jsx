import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { getFileUrl } from 'src/utils/strapi'
import StarIcon from 'src/components/Icons/Star'
import colors from 'src/assets/styles/colors'
import { API_URL } from '@env'

const RestaurantItem = ({ data, onPress }) => {
    const categories = data.categories.map(({name}) => name)
    const spacer = <Text style={styles.spacer}>•</Text>

    return (
        <Pressable
            style={styles.button}
            onPress={() => onPress(data.id)}
            android_ripple={{
                color: colors.light
            }}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `${API_URL}${data.photo?.url}`
                    }}
                />
                <View style={styles.details}>
                    <Text style={styles.name}>{data.name}</Text>
                    <View style={styles.attributes}>
                        <StarIcon style={styles.star} height={14} width={14} />
                        <Text style={styles.rating}>
                            {data.rating || 1}
                        </Text>
                        {spacer}
                        <Text>{categories?.splice(0, 2).join(', ')}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10
    },
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 20
    },
    name: {
        fontSize: 16,
        fontWeight: 600
    },
    details: {
        gap: 8
    },
    attributes: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    rating: {
        fontSize: 12
    },
    star: {
        color: colors.gold,
        marginRight: 5
    },
    spacer: {
        marginHorizontal: 10,
        color: colors.light
    }
})

RestaurantItem.propTypes = {
    onPress: PropTypes.func
}

export default RestaurantItem
