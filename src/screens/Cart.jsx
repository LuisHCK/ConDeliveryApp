import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PageContainer from '../components/PageContainer'
import AddressForm from '../components/AddressForm'

export default function CartPage() {
    return (
        <PageContainer>
            <AddressForm />
        </PageContainer>
    )
}

const styles = StyleSheet.create({})
