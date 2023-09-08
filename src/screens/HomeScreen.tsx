import {ScrollView, Text, View} from "react-native";
import ButtonComponent from "../components/Buttons";
import Card, {HorizontalImageCard, ImagedCard} from "../components/Card";
import {lucyStyle} from "../styles";
import Avatar from "../components/Avatar";

export default function HomeScreen(){
    return (
        <ScrollView>

        <View style={[lucyStyle.container]}>

            <Text style={[lucyStyle.bold, lucyStyle.xxl,lucyStyle.ml2, lucyStyle.mr2]}>Today's Events</Text>

            <View style={[lucyStyle.flexRow]}>
            <Card>
                <Text style={[lucyStyle.xm]}>Extra small</Text>
                <Text style={[lucyStyle.sm]}>Small</Text>
                <Text style={[lucyStyle.md]}>Medium</Text>
                <Text style={[lucyStyle.lg]}>Large</Text>
                <Text style={[lucyStyle.xl]}>Extra large</Text>
            </Card>
                <HorizontalImageCard/>
            </View>

            <ImagedCard/>

            <HorizontalImageCard/>

            <ButtonComponent color='accent' text="Learn More"/>
        </View>
        </ScrollView>
    )
}
