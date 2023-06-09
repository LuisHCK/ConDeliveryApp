import { get } from 'lodash'
import { API_URL } from '@env'
const defaultPicture = '/uploads/default_3724ce3831.jpg'

export const getNestedObject = (strapiObj = {}, fieldName = '') => {
    return get(strapiObj, ['data', 'attributes', fieldName], undefined)
}

export const getObjectData = (strapiObj) => {
    return { id: strapiObj.id, ...strapiObj.attributes }
}

export const getFileUrl = (baseUrl) => {
    return `${API_URL}${baseUrl || defaultPicture}`
}

export const sanitizeObject = (item) => {
    let sanitized = {}
    if (!item || typeof item !== 'object') {
        return sanitized
    }
    if (Array.isArray(item)) {
        return item.map(sanitizeObject)
    }
    for (const [key, value] of Object.entries(item)) {
        if (key === 'id') {
            sanitized[key] = value
        } else if (key === 'attributes') {
            for (const [keyAttribute, valueAttribute] of Object.entries(
                item[key]
            )) {
                if (
                    typeof item[key][keyAttribute] === 'object' &&
                    item[key][keyAttribute]
                ) {
                    if ('data' in valueAttribute) {
                        sanitized[keyAttribute] = sanitizeObject(
                            valueAttribute.data
                        )
                    } else {
                        sanitized[keyAttribute] = sanitizeObject(valueAttribute)
                    }
                } else {
                    sanitized[keyAttribute] = valueAttribute
                }
            }
        } else {
            sanitized[key] = value
        }
    }
    return sanitized
}

export const statuses = [
    "pendiente",
    "en_proceso",
    "enviado",
    "completado",
    "cancelado",
]
