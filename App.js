/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {ScrollView} from 'react-native'

import DeviceInfo from 'react-native-device-info'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.instructions}>
        {
          'getAPILevel:'+DeviceInfo.getAPILevel() + '\n' +
          'getApplicationName:' + DeviceInfo.getApplicationName() +'\n' +
          'getBrand:'+DeviceInfo.getBrand()+'\n' +
          'getBuildNumber:'+DeviceInfo.getBuildNumber()+'\n' +
          'getBundleId:'+DeviceInfo.getBundleId()+'\n' +
          'getCarrier:'+DeviceInfo.getCarrier()+'\n' +
          'getDeviceCountry:'+DeviceInfo.getDeviceCountry()+'\n' +
          'getDeviceId:'+DeviceInfo.getDeviceId()+'\n' +
          'getDeviceLocale:'+DeviceInfo.getDeviceLocale()+'\n' +
          'getDeviceName:'+DeviceInfo.getDeviceName()+'\n' +
          'getFirstInstallTime:'+DeviceInfo.getFirstInstallTime()+'\n' +
          'getFontScale:'+DeviceInfo.getFontScale()+'\n' +
          'getFreeDiskStorage:'+DeviceInfo.getFreeDiskStorage()+'\n' +
          'getIPAddress:'+DeviceInfo.getIPAddress()+'\n' +
          'getInstanceID:'+DeviceInfo.getInstanceID()+'\n' +
          'getLastUpdateTime:'+DeviceInfo.getLastUpdateTime()+'\n' +
          'getMACAddress:'+DeviceInfo.getMACAddress()+'\n' +
          'getManufacturer:'+DeviceInfo.getManufacturer()+'\n' +
          'getMaxMemory:'+DeviceInfo.getMaxMemory()+'\n' +
          'getModel:'+DeviceInfo.getModel()+'\n' +
          'getPhoneNumber:'+DeviceInfo.getPhoneNumber()+'\n' +
          'getReadableVersion:'+DeviceInfo.getReadableVersion()+'\n' +
          'getSerialNumber:'+DeviceInfo.getSerialNumber()+'\n' +
          'getSystemName:'+DeviceInfo.getSystemName()+'\n' +
          'getSystemVersion:'+DeviceInfo.getSystemVersion()+'\n' +
          'getTimezone:'+DeviceInfo.getTimezone()+'\n' +
          'getTotalDiskCapacity:'+DeviceInfo.getTotalDiskCapacity()+'\n' +
          'getTotalMemory:'+DeviceInfo.getTotalMemory()+'\n' +
          'getUniqueID:'+DeviceInfo.getUniqueID()+'\n' +
          'getUserAgent:'+DeviceInfo.getUserAgent()+'\n' +
          'is24Hour:'+DeviceInfo.is24Hour()+'\n' +
          'isEmulator:'+DeviceInfo.isEmulator()+'\n' +
          'isPinOrFingerprintSet:'+DeviceInfo.isPinOrFingerprintSet()+'\n' +
          'isTablet:'+DeviceInfo.isTablet()
        }
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
