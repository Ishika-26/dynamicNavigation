import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from "./styles";
import { chatData } from "./chatData";

const Chat = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.matchContainer}>
      <Image source={{ uri: item.picture }} style={styles.matchImage} />
      <View style={styles.matchDetails}>
        <View style={styles.detailsHeader}>
          <Text style={styles.matchName}>{item.pairMatch}</Text>
          {item.new && <Text style={styles.newBadge}>New</Text>}
        </View>
        <Text style={styles.lastText}>{item.lastText}</Text>
      </View>
      <View style={styles.unreadContainer}>
        {item.unread > 0 && (
          <Text style={styles.unreadText}>{item.unread}</Text>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ margin: 15 }}>
        <Text style={styles.text}>Messages</Text>

        {/* Segment Control Tabs */}
        <SegmentedControlTab
          values={chatData.map((item) => item.pair)}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
          tabsContainerStyle={{ marginTop: 10 }}
          tabStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
          activeTabStyle={{
            borderBottomWidth: 2,
            borderBottomColor: "#ff00ff",
            backgroundColor: "transparent",
          }}
          tabTextStyle={{ color: "#808080", fontWeight: "bold" }}
          activeTabTextStyle={{ color: "#000000" }}
        />

        {/* Content based on the selected tab */}

        <FlatList
          data={chatData[selectedIndex].matches}
          renderItem={renderItem}
          keyExtractor={(item) => item.pairMatch}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
