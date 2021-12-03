import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Auth } from 'aws-amplify';

export default function LoginScreen({ navigation }) {
  const [showLogin, setShowLogin] = useState(true);
  const [formState, setFormState] = useState({});

  const { username, password, email } = formState;

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,          // optional
          // other custom attributes 
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  useEffect(() => {
    // clear formState when switching between login and signup
    setFormState({});
  }, [showLogin]);
}

const styles = StyleSheet.create({})
