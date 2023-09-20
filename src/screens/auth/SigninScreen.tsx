import {View, Text} from "react-native"
import Input from "../../components/Input";
import ButtonComponent from "../../components/Buttons";
import {useAppDispatch} from "../../store";
import {userLogin} from "../../features/auth/authActions";
import {useEffect} from "react";
import {getLocalStorage} from "../../helpers/localStorage";
import {LocalStorageKeyEnum} from "../../enums/localStorageKey.enum";
import {lucyStyle} from "../../styles";
import {Formik} from "formik";
import {useNavigation} from "@react-navigation/native";

export default function SigninScreen() {

    const dispatch = useAppDispatch()
    const navigation = useNavigation();

    const signIn = (values) => {
        dispatch(userLogin({
            identifier: values.email,
            password: values.password
        })).unwrap().then(user => {
            // console.log("USer", user)
        }).catch(error => {
            console.log("Error", error)
        })
    }

    const goToSignup = () =>{
        navigation.navigate('Signup')
    }

    useEffect(() => {

    }, [])

    return (
        <View
            style={[lucyStyle.container, lucyStyle.flexColumn, lucyStyle.justifyCenter, lucyStyle.ml3, lucyStyle.mr3]}>

            <Formik initialValues={{
                email: "", password: ""
            }} onSubmit={signIn}
                    validate={(values) => {
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

                        <Text style={[lucyStyle.md, lucyStyle.mb3]}>Please sign in</Text>
                        <Input prependIconName={'mail'} label={'Email'} placeholder={'Enter email'}
                               onChangeText={handleChange('email')}/>
                        {errors.email && (
                            <Text style={[lucyStyle.textDanger, lucyStyle.mb3]}>
                                {errors.email}
                            </Text>
                        )}
                        <Input prependIconName={'lock-closed'} password={true} label={'Password'}
                               placeholder={'Enter password'} onChangeText={handleChange('password')}/>
                        {errors.password && (
                            <Text style={[lucyStyle.textDanger, lucyStyle.mb3]}>
                                {errors.password}
                            </Text>
                        )}
                        <ButtonComponent color={'primary'} text={'Sign in'} onPress={handleSubmit}/>

                        <Text style={[lucyStyle.mt3, lucyStyle.textCenter]} onPress={goToSignup}>Don't have an account yet?</Text>
                    </>
                )}

            </Formik>
        </View>
    )
}
