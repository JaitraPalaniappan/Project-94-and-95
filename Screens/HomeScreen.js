import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from '@rneui/themed';


export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>

      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Space Cloud',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        
        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("My Space")
                    }>
                        <Text style={styles.routeText}>My Space</Text>
                        
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Create Space")
                    }>
                        <Text style={styles.routeText}>Create Space</Text>
                
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Delete Space")
                    }>
                        <Text style={styles.routeText}>Delete Space</Text>
                
                    </TouchableOpacity>

      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2BF4FF',
  },

  routeCard:{
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        margin: 55,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"

  }
});
