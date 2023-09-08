import * as Colors from "./colors";
import * as Typohraphy from "./typography";
import * as Flex from "./flex"
import * as Spacing from "./spacing"

import { StyleSheet} from 'react-native'


export {Colors, Typohraphy};

export const lucyStyle = StyleSheet.create({
    ...Typohraphy.fontSize,
    ...Spacing.spacing,

    container:{
        flex: 1,
    },


    regular: {
        fontWeight: 'normal'
    },
    semiBold:{
        fontWeight: '600'
    },
    bold:{
        fontWeight: 'bold'
    },

    divider:{
        width: 1,
        height: 35,
        opacity: 0.5,
        marginLeft: 40,
        backgroundColor: '#ccc'
    },

    flexRow:{
        flexDirection: 'row'
    },
    flexColumn:{
        flexDirection: "column"
    },
    justifyCenter:{
        justifyContent: 'center'
    },
    justifyBetween:{
        justifyContent: 'space-between'
    }
    // ...Flex.flex

})
