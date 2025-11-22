import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.3,
          justifyContent: 'space-between',
          top: 20,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            backgroundColor: 'grey',
            borderRadius: 50,
            left: 10,
          }}
        ></View>
        <View
          style={{
            width: 250,
            height: 38,
            borderRadius: 10,
            backgroundColor: 'white',
            borderColor: 'grey',
            borderWidth: 1,
            marginBottom: 10,
          }}
        >
          <TextInput placeholder="Serach" />
        </View>
        <View style={{ right: 10, top: 5 }}>
          <Text>Chat</Text>
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            borderBottomColor: 'grey',
            borderBottomWidth: 0.3,
            justifyContent: 'space-between',
            borderTopColor: 'grey',
            height: 30,
          }}
        >
          <Text style={{ left: 10, fontWeight: 'bold' }}>Suggested</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Text
              style={{ color: 'Black', right: 50, fontSize: 20, bottom: 10 }}
            >
              ...
            </Text>
            <Text
              style={{
                color: 'black',
                right: 20,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              X
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            marginVertical: 20,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'grey',
              borderRadius: 50,
              left: 5,
            }}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}
              >
                Ashish Singhal
              </Text>
              <Text style={{ color: 'grey', fontSize: 14 }}>
                Co-founder co-switch
              </Text>
              <Text style={{ color: 'blue', fontSize: 12 }}>
                View My Newsletter
              </Text>
              <Text style={{ color: 'grey', fontSize: 12 }}>2d.</Text>
            </View>
            <View>
              <Text style={{ color: 'blue', fontSize: 16, left: 80,fontWeight:"bold" }}>
                + Follow
              </Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text>
            fdfjknaljsdjadscadhfhcjsdfcslkdhahdkjchdhfsgdfghgdfhjksdhjfhchdfjhcsdkfhskfg
          </Text>
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Image
              style={{ width: 300, height: 400, resizeMode: 'cover' }}
              source={{ uri: 'https://picsum.photos/536/354' }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
