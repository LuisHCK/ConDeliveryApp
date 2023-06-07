import { CURRENCY } from '@env'

/**
 * format numbers as currency strings
 * @param {Number | String} price 
 * @returns String
 */
export const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    if (CURRENCY) {
        return formatter.format(price).replace('$', CURRENCY)
    }
    return formatter.format(price)
}
