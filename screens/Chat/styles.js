import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    text: {
      marginTop: 50,
      marginLeft: 15,
      fontSize: 22,
      fontWeight: "bold",
    },
    matchContainer: {
      flexDirection: "row",
      alignItems: "center",
      // marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      backgroundColor: "white",
      paddingBottom: 20,
      marginTop: 20,
      borderRadius: 5,
    },
    matchImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
      marginTop: 10,
    },
    matchDetails: {
      flex: 1,
  
      marginTop: 10,
    },
    matchName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    lastText: {
      color: "#555",
    },
    lastTime: {
      color: "#777",
      fontSize: 12,
    },
    unreadContainer: {
      position: "relative",
      bottom: 25,
      right: 2,
      backgroundColor: "red",
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    unreadText: {
      color: "white",
      fontWeight: "bold",
    },
    detailsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    newBadge: {
      backgroundColor: "green",
      color: "white",
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 20,
      marginLeft: 10,
      top: 15,
    },
  });
  export default styles;