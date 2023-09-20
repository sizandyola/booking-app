import {View, Text} from "react-native"
import Input from "../../components/Input";
import ButtonComponent from "../../components/Buttons";
import {useAppDispatch} from "../../store";
import {register, userLogin} from "../../features/auth/authActions";
import {useEffect} from "react";
import {getLocalStorage} from "../../helpers/localStorage";
import {LocalStorageKeyEnum} from "../../enums/localStorageKey.enum";
import {lucyStyle} from "../../styles";
import {Formik} from "formik";
import {useNavigation} from "@react-navigation/native";

export default function SignupScreen() {

    const dispatch = useAppDispatch()
    const navigation = useNavigation();

    const signIn = (values) => {
        dispatch(register({
            fullname: values.fullname,
            email: values.email,
            username: values.username,
            password: values.password
        })).unwrap().then(user => {
            // console.log("USer", user)
            navigation.navigate('Signin')
        }).catch(error => {
            console.log("Error", error)
        })
    }

    const goToSignup = () =>{
        navigation.navigate('Signin')
    }

    useEffect(() => {

    }, [])

    return (
        <View
            style={[lucyStyle.container, lucyStyle.flexColumn, lucyStyle.justifyCenter, lucyStyle.ml3, lucyStyle.mr3]}>

            <Formik initialValues={{
                email: "", password: "", username: "", fullname: "", province: "", district:"", address:"", phone:""
            }} onSubmit={signIn}
                    validate={(values) => {
                        // console.log("Values", values)
                        // Custom validation logic
                        const errors = {};

                        if (!values.email) {
                            errors.email = "Email is required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                            errors.password = "Password is required";
                        }

                        return errors;
                    }}>
                {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      isValid,
                      dirty,
                  }) => (
                    <>
                        <Text style={[lucyStyle.xl, lucyStyle.mb3, lucyStyle.bold]}>Properties around you</Text>

                        <Text style={[lucyStyle.md, lucyStyle.mb3]}>Please fill in the following details</Text>

                        <Input prependIconName={'mail'} label={'Fullname'} placeholder={'Enter name'}
                               onChangeText={handleChange('fullname')}/>
                        {errors.fullname && (
                            <Text>
                                {errors.fullname}
                            </Text>
                        )}

                        <Input prependIconName={'mail'} label={'username'} placeholder={'Enter username'}
                               onChangeText={handleChange('username')}/>
                        {errors.username && (
                            <Text>
                                {errors.username}
                            </Text>
                        )}


                        <Input prependIconName={'mail'} label={'email'} placeholder={'Enter email'}
                               onChangeText={handleChange('email')}/>
                        {errors.email && (
                            <Text style={lucyStyle.textDanger}>
                                {errors.email}
                            </Text>
                        )}
                        <Input prependIconName={'lock-closed'} password={true} label={'password'}
                               placeholder={'Enter password'} onChangeText={handleChange('password')}/>
                        {errors.password && (
                            <Text style={lucyStyle.textDanger}>
                                {errors.password}
                            </Text>
                        )}
                        <ButtonComponent color={'primary'} text={'Sign up'} onPress={handleSubmit}/>

                        <Text style={[lucyStyle.mt3, lucyStyle.textCenter]} onPress={goToSignup}>Already have an account?</Text>
                    </>
                )}

            </Formik>
        </View>
    )
}
