import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import PageContainer from 'src/components/PageContainer'
import AddressForm from '../components/AddressForm'
import AddressPreview from '../components/AddressPreview'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
    const [userAddress, setUserAddress] = useState(null)
    const [showEdit, setShowEdit] = useState(false)

    const getItem = async () => {
        const value = await AsyncStorage.getItem('userAddress')

        if (value) {
            setUserAddress(JSON.parse(value))
        }
    }

    const submitHandler = () => {
        getItem()
        setShowEdit(false)
    }


    useEffect(() => {
      getItem()
    }, [])
    

    return (
        <PageContainer>
            <SafeAreaView>
                {!!userAddress && !showEdit ? (
                    <AddressPreview
                        userAddress={userAddress}
                        toggleEdit={() => setShowEdit(!showEdit)}
                    />
                ) : (
                    <AddressForm data={userAddress} onSubmit={submitHandler} />
                )}
            </SafeAreaView>
        </PageContainer>
    )
}

export default Profile
