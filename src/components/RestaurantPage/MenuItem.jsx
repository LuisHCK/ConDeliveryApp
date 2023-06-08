import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import PlusIcon from 'src/components/Icons/Plus'
import CheckIcon from 'src/components/Icons/Check'

import { getFileUrl } from 'src/utils/strapi'
import { formatPrice } from 'src/utils/format'
import colors from 'src/assets/styles/colors'

const MenuItem = ({
    id,
    name,
    description,
    photo,
    price,
    isAdded,
    onSelect,
    onRemove
}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: getFileUrl(photo) }} style={styles.photo} />
            <View style={styles.controls}>
                <View style={styles.detailsContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.price}>{formatPrice(price)}</Text>
                    </View>
                </View>

                <Pressable
                    style={[
                        styles.addButton,
                        isAdded ? styles.buttonActive : null
                    ]}
                    onPressOut={() => {
                        if (isAdded) {
                            onRemove(id)
                        } else {
                            onSelect({ id, name, photo, price, quantity: 1 })
                        }
                    }}
                >
                    <Text
                        style={[
                            styles.addButtonText,
                            {
                                color: isAdded ? colors.extraLight : colors.dark
                            }
                        ]}
                    >
                        {isAdded ? 'Agregado' : 'Agregar'}
                    </Text>
                    {isAdded ? (
                        <CheckIcon
                            width={18}
                            height={18}
                            stroke={colors.extraLight}
                            strokeWidth={3}
                        />
                    ) : (
                        <PlusIcon
                            width={18}
                            height={18}
                            stroke={colors.primary}
                            strokeWidth={3}
                        />
                    )}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    detailsContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        maxWidth: 140
    },
    description: {
        fontSize: 12,
        color: colors.light,
        maxWidth: 140,
        paddingVertical: 4
    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.dark
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 7
    },
    buttonActive: {
        backgroundColor: colors.primary
    },
    addButtonText: {
        marginRight: 4
    }
})

MenuItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    photo: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    isAdded: PropTypes.bool,
    onSelect: PropTypes.func,
    onRemove: PropTypes.func
}

export default MenuItem
