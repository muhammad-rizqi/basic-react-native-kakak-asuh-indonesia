import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from './src/styles/styles';

export default class App extends Component {
  click = () => {
    alert('Belum ada apa-apa');
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#0266aa" />
        <View style={styles.appBar}>
          <TouchableOpacity onPress={() => this.click()}>
            <Image
              source={require('./src/icons/list.png')}
              style={styles.appIcon}
            />
          </TouchableOpacity>
          <Text style={styles.appBarText}>Kakak Asuh Indonesia</Text>
        </View>
        <ScrollView>
          <ScrollView horizontal={true} style={styles.scrollMenu}>
            <TouchableOpacity
              onPress={() => this.click()}
              style={styles.scrollItem}>
              <Image
                source={require('./src/icons/help.png')}
                style={styles.itemIcon}
              />
              <Text style={styles.scrollItemTitle}> Pilih Adik Asuh </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.click()}
              style={styles.scrollItem}>
              <Text style={styles.scrollItemText}>83</Text>
              <Text style={styles.scrollItemTitle}> Santri Mandiri </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.click()}
              style={styles.scrollItem}>
              <Text style={styles.scrollItemText}>71</Text>
              <Text style={styles.scrollItemTitle}> Santri Belum Mandiri </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.click()}
              style={styles.scrollItem}>
              <Text style={styles.scrollItemText}>15</Text>
              <Text style={styles.scrollItemTitle}>
                Sudah Memiliki Kakak Asuh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.click()}
              style={styles.scrollItem}>
              <Text style={styles.scrollItemText}>1000</Text>
              <Text style={styles.scrollItemTitle}> Alumni </Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Adik Asuh Saya</Text>
            <View style={styles.menuList}>
              <TouchableOpacity
                onPress={() => this.click()}
                style={styles.menuListItem}>
                <Image
                  source={require('./src/icons/leadership.png')}
                  style={styles.itemIcon}
                />
                <Text style={styles.scrollItemTitle}> Nama Adik Asuh </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.click()}
                style={styles.menuListItem}>
                <Image
                  source={require('./src/icons/bank-transfer.png')}
                  style={styles.itemIcon}
                />
                <Text style={styles.scrollItemTitle}> Transfer </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.click()}
                style={styles.menuListItem}>
                <Image
                  source={require('./src/icons/invoice.png')}
                  style={styles.itemIcon}
                />
                <Text style={styles.scrollItemTitle}> Invoice </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.menuTitle}>
                Konsep Amal Jariyah Pondok IT
              </Text>
              <View style={{alignContent: 'center'}}>
                <Image
                  source={{
                    uri:
                      'https://kakakasuhindonesia.org/images/amaljariyahpondokit.png',
                  }}
                  style={styles.imageItem}
                />
              </View>
            </View>

            <View>
              <Text style={styles.menuTitle}>Kegiatan Santri</Text>
              <ScrollView horizontal={true} style={{alignContent: 'center'}}>
                <Image
                  source={{
                    uri:
                      'https://kakakasuhindonesia.org/images/kakakasuhindonesia1.jpg',
                  }}
                  style={styles.imageScroll}
                />
                <Image
                  source={{
                    uri:
                      'https://kakakasuhindonesia.org/images/kakakasuhindonesia2.jpg',
                  }}
                  style={styles.imageScroll}
                />
                <Image
                  source={{
                    uri:
                      'https://kakakasuhindonesia.org/images/kakakasuhindonesia3.jpg',
                  }}
                  style={styles.imageScroll}
                />
                <Image
                  source={{
                    uri:
                      'https://kakakasuhindonesia.org/images/kakakasuhindonesia4.jpg',
                  }}
                  style={styles.imageScroll}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
