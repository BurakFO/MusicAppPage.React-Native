import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';

import SearchBar from './components/SearchBar';
import MusicCard from './components/MusicCard';

import music_data from './MusicData.json';

const renderMusics = ({ item }) => <MusicCard musics={ item } />


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <SearchBar />

        <FlatList
          data={music_data}
          renderItem={renderMusics}
          style={styles.musicList}
          ListEmptyComponent={<Text>The list is empty please try again</Text>}
          ListFooterComponent={<Text style={styles.bottomSpace}></Text>}
        />

      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({

  container: {

  },

  musicList: {

  },

  bottomSpace:{
    marginBottom: 100,
  },

});


export default App;




