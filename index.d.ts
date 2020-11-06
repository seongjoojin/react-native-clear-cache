declare module 'react-native-clear-cache' {
  const ClearCache: {
    getAppCacheSize: Function;
    clearAppCache: Function;
  };
  export default ClearCache;
}
