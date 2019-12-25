import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import styles from './styles';

const BottomNav = ({ navigation }) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  const SearchIcon = style => <Icon {...style} name="search-outline" />;

  const BellIcon = style => <Icon {...style} name="bell-outline" />;

  const EmailIcon = style => <Icon {...style} name="email-outline" />;

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}
        appearance="noIndicator"
        indicatorStyle={styles.indicator}
        style={styles.bottomNavigation}
      >
        <BottomNavigationTab style={styles.tab} icon={SearchIcon} />
        <BottomNavigationTab style={styles.tab} icon={BellIcon} />
        <BottomNavigationTab style={styles.tab} icon={EmailIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

export default BottomNav;