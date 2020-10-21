import { NativeModules } from 'react-native';
const { RNMusicPicker } = NativeModules;

module.exports = {
  getTracks: function(params) {
    return new Promise((resolve, reject) => {
      RNMusicPicker.getList('tracks', params, (err, trackLists,) => {
        if (err) {
          reject(err);
        } else {
          resolve(trackLists,);
        }
      });
    });
  },
};

export default RNMusicPicker;
