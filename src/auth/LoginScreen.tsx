import auth from '@react-native-firebase/auth';
import {Lock, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorText('Please enter your email and password!!!');
    } else {
      setErrorText('');
      setIsLoading(true);
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        const user = userCredential.user;

        if (user) {
          console.log(user);
        }

        setIsLoading(false);
      } catch (error: any) {
        setErrorText(error.message);
        setIsLoading(false);
      }
    }
  };
  return (
    <Container>
      <SectionComponent
        styles={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <RowComponent styles={{marginBottom: 16}}>
          <TitleComponent title="LOGIN" size={32} flex={0} />
        </RowComponent>
        <InputComponent
          title="Email"
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Email"
          prefix={<Sms size={22} color={colors.gray2} />}
          allowClear
          type="email-address"
        />
        <InputComponent
          title="Password"
          isPassword
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          prefix={<Lock size={22} color={colors.gray2} />}
        />
        {errorText ? (
          <Text style={{color: 'red', marginBottom: 10}}>{errorText}</Text>
        ) : null}
        <ButtonComponent
          isLoading={isLoading}
          text="Login"
          onPress={handleLogin}
        />

        <RowComponent styles={{marginTop: 20}}>
          <Text style={[globalStyles.text]}>
            You don't have an account?{' '}
            <Text
              style={{color: 'coral'}}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Create an account
            </Text>
          </Text>
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default LoginScreen;
