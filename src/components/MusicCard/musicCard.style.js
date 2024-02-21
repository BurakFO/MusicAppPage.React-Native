import { Dimensions, StyleSheet } from "react-native";

const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

export default StyleSheet.create({



    musicCard: {
        flex: 1,
        flexDirection: 'row',
        width : 'auto',
        height: 'auto',
        borderBottomWidth: 0.3,
        borderBottomColor:'grey',
        marginLeft:8,

        paddingVertical:15,
    },



    Icon:{

    },

    musicDetails:{
        maxWidth: window_width/2, //simdilik kalsin daaha sonra title style'ina yapicaz.
        marginLeft: 10,
        justifyContent: 'center',
    },

    musicImage:{
       height: window_height/9,
       width: window_width /4, 
       borderRadius: 90,
    },

    musicTitle:{
        fontSize:29,
        fontWeight:'bold',
        marginBottom:4,
    },

    musicArtist:{

    },

    musicYear:{
        marginLeft: 20,
        color: 'grey',
        fontSize: 11.5,
        fontStyle:'bold',
    },

});