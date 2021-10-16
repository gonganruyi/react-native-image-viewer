/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Modal, TouchableNativeFeedback, Text ,Image,Dimensions} from 'react-native';
 import ImageViewer from './built/index';
 import FastImage from 'react-native-fast-image';
 import VideoPlayer from 'react-native-video-controls';

 const images = [
  {
    // Simplest usage.
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      // source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      source: require('./img.png')
    },
    freeHeight: true
  },{
    url:'http://122.144.220.210:50119/idapp/file-system/api/fileSystem/view/5f98d428920e4d9694db8441169d4a45?viewType=2',
    props:{
      headers:{
        'x-appId': "ne-opt-app", 
        'x-auth': "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFZWEJKWkNJNk9URXhNRGM0TENKemFYUmxRMjlrWlNJNklqazVPVGs1T1NJc0ltTnZaR1VpT2lJeE1qTTBORFF4TVNJc0luTnBkR1ZPWVcxbElqb2k1YTZKNklPOTU0bXA1cldCSWl3aWMybDBaVlI1Y0dWRGIyUmxJam9pTVRVMUlpd2lkWE5sY2s1aGJXVWlPaUpCWkcxcGJpSXNJblZ6WlhKSlpDSTZJakkxSWl3aWRVbGtJam9pYmtKWk5Fd2lMQ0pzYjJkcGJrNWhiV1VpT2lKaFpHMXBiaUlzSW1Gd2NFbGtJam9pYm1VdGIzQjBMV0Z3Y0NJc0luTnBkR1ZKWkNJNklqRTJNalVpTENKMWMyVnlWSGx3WlNJNklqRXdJaXdpWlhod0lqb3hOak0wTWpZd01UTTNMQ0pwWVhRaU9qRTJNelF4TnpNM016ZDkuZ082eGxSUHl4Ry04dnhXVDRkVWozV0x4X3F6SVJ1bktnVjlvOEZFS0FpMEA3MjBlZTJlNTRlMjFkYjg5OTg5ZGM4ZWExMjNiYzQ5OA==", 
        'x-auth-id': "5e1b7eea2157ebf0"
      }
    },
    freeHeight: true
  }
  ,{
    url:'http://122.144.220.210:50119/idapp/file-system/api/fileSystem/view/5c1b8cba2864429d9f9954b36c559cf6?viewType=2',
    props:{
      headers:{
        'x-appId': "ne-opt-app", 
        'x-auth': "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFZWEJKWkNJNk9URXhNRGM0TENKemFYUmxRMjlrWlNJNklqazVPVGs1T1NJc0ltTnZaR1VpT2lJeE1qTTBORFF4TVNJc0luTnBkR1ZPWVcxbElqb2k1YTZKNklPOTU0bXA1cldCSWl3aWMybDBaVlI1Y0dWRGIyUmxJam9pTVRVMUlpd2lkWE5sY2s1aGJXVWlPaUpCWkcxcGJpSXNJblZ6WlhKSlpDSTZJakkxSWl3aWRVbGtJam9pYmtKWk5Fd2lMQ0pzYjJkcGJrNWhiV1VpT2lKaFpHMXBiaUlzSW1Gd2NFbGtJam9pYm1VdGIzQjBMV0Z3Y0NJc0luTnBkR1ZKWkNJNklqRTJNalVpTENKMWMyVnlWSGx3WlNJNklqRXdJaXdpWlhod0lqb3hOak0wTWpZd01UTTNMQ0pwWVhRaU9qRTJNelF4TnpNM016ZDkuZ082eGxSUHl4Ry04dnhXVDRkVWozV0x4X3F6SVJ1bktnVjlvOEZFS0FpMEA3MjBlZTJlNTRlMjFkYjg5OTg5ZGM4ZWExMjNiYzQ5OA==", 
        'x-auth-id': "5e1b7eea2157ebf0"
      }
    },
    freeHeight: true,
    isVideo: true
  }
];

export default class Main extends Component {
  state = {
    index: 0,
    modalVisible: true
  };

  render() {
    return (
      <View
        style={{
          padding: 10
        }}
      >
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            onSwipeDown={() => {
              console.log('onSwipeDown');
            }}
            onMove={data => console.log(data)}
            enableSwipeDown={true}
            renderVideo={(props)=>{
              console.log(props)
              const { width, height } = Dimensions.get("window")
              return <VideoPlayer
                disableFullscreen
                disableBack
                disableVolume
                disablePlayPause
                toggleResizeModeOnFullscreen={false}
                style={{ width, height ,zIndex:-1}}
                repeat={true}
                source={{ 
                  uri:'http://122.144.220.210:50119/idapp/file-system/api/fileSystem/view/5c1b8cba2864429d9f9954b36c559cf6?viewType=2',
                  headers:{
                    'x-appId': "ne-opt-app", 
                    'x-auth': "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFZWEJKWkNJNk9URXhNRGM0TENKemFYUmxRMjlrWlNJNklqazVPVGs1T1NJc0ltTnZaR1VpT2lJeE1qTTBORFF4TVNJc0luTnBkR1ZPWVcxbElqb2k1YTZKNklPOTU0bXA1cldCSWl3aWMybDBaVlI1Y0dWRGIyUmxJam9pTVRVMUlpd2lkWE5sY2s1aGJXVWlPaUpCWkcxcGJpSXNJblZ6WlhKSlpDSTZJakkxSWl3aWRVbGtJam9pYmtKWk5Fd2lMQ0pzYjJkcGJrNWhiV1VpT2lKaFpHMXBiaUlzSW1Gd2NFbGtJam9pYm1VdGIzQjBMV0Z3Y0NJc0luTnBkR1ZKWkNJNklqRTJNalVpTENKMWMyVnlWSGx3WlNJNklqRXdJaXdpWlhod0lqb3hOak0wTWpZd01UTTNMQ0pwWVhRaU9qRTJNelF4TnpNM016ZDkuZ082eGxSUHl4Ry04dnhXVDRkVWozV0x4X3F6SVJ1bktnVjlvOEZFS0FpMEA3MjBlZTJlNTRlMjFkYjg5OTg5ZGM4ZWExMjNiYzQ5OA==", 
                    'x-auth-id': "5e1b7eea2157ebf0"
                  }
                }}
                controls={false}
                paused={false}
              />
            }}
            renderImage={(props) => {
              const {headers,source,style} = props;

              let currSource = source;
              if(typeof source !== 'number'){
                currSource = {
                  ...source,
                  headers:headers
                }
              }

              // console.log(currSource);
              return <FastImage style={[style]} source={currSource} />
              // return <FastImage style={[style,{borderWidth:1,borderColor:'red'}]} source={{
              //   uri:'http://122.144.220.210:50119/idapp/file-system/api/fileSystem/view/5f98d428920e4d9694db8441169d4a45?viewType=2',
              //   headers:{
              //     'x-appId': "ne-opt-app", 
              //     'x-auth': "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjFZWEJKWkNJNk9URXhNRGM0TENKemFYUmxRMjlrWlNJNklqazVPVGs1T1NJc0ltTnZaR1VpT2lJeE1qTTBORFF4TVNJc0luTnBkR1ZPWVcxbElqb2k1YTZKNklPOTU0bXA1cldCSWl3aWMybDBaVlI1Y0dWRGIyUmxJam9pTVRVMUlpd2lkWE5sY2s1aGJXVWlPaUpCWkcxcGJpSXNJblZ6WlhKSlpDSTZJakkxSWl3aWRVbGtJam9pYmtKWk5Fd2lMQ0pzYjJkcGJrNWhiV1VpT2lKaFpHMXBiaUlzSW1Gd2NFbGtJam9pYm1VdGIzQjBMV0Z3Y0NJc0luTnBkR1ZKWkNJNklqRTJNalVpTENKMWMyVnlWSGx3WlNJNklqRXdJaXdpWlhod0lqb3hOak0wTWpZd01UTTNMQ0pwWVhRaU9qRTJNelF4TnpNM016ZDkuZ082eGxSUHl4Ry04dnhXVDRkVWozV0x4X3F6SVJ1bktnVjlvOEZFS0FpMEA3MjBlZTJlNTRlMjFkYjg5OTg5ZGM4ZWExMjNiYzQ5OA==", 
              //     'x-auth-id': "5e1b7eea2157ebf0"
              //   }
              // }} />
            }}
          />
        </Modal>
      </View>
    );
  }
}
