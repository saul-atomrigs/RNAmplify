import API from '@aws-amplify/api'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as mutations from '../graphql/mutations'

export default function CreateScreen() {

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const { title, description } = formState
      await API.graphql(
        graphqlOperation(mutations.createPost, {
          input: { title, description, createdBy: user.email }
        })
      )
      setFormState({})
      setLoading(false)
    } catch (err) {
      console.log('error creating post', err)
    }
  }
  return (
    <View>
      <Text></Text>
    </View>
  )
}



const styles = StyleSheet.create({})
