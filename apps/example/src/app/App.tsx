import React from "react";
import { StatusBar, Text, View } from "react-native";
import { DetailsHeaderScrollView } from "react-native-sticky-parallax-header";

export const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <DetailsHeaderScrollView
        leftTopIcon={{
          uri: 'https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300',
        }}
        image={{
          uri: 'https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300',
        }}
        backgroundColor="green"
        tag="Details type"
        title="Details title"
      >
        <Text>This is a content test</Text>
      </DetailsHeaderScrollView>
    </View>
  );
};

export default App;
