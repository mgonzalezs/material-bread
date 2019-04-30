import React from 'react';

import { List, ListItem, ListExpanded, Icon, Avatar, Checkbox } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';
import { State, Store } from '@sambego/storybook-state';

const store = new Store({
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
  checkedFour: false,
  checkedFive: false,
});

export default storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('with text', () => (
    <Container>
      <Header title={'Text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Text and Icon List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}
        />
        <ListItem
          text={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}
        />
        <ListItem text={'Education'} icon={<Icon name={'edit'} size={24} />} />
        <ListItem text={'Health'} icon={<Icon name={'favorite'} size={24} />} />
        <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        <ListItem
          text={'Office'}
          icon={<Icon name={'content-cut'} size={24} />}
        />
        <ListItem
          text={'Promotions'}
          icon={<Icon name={'loyalty'} size={24} />}
        />
      </List>
    </Container>
  ))
  .add('with media', () => (
    <Container>
      <Header title={'Text and Media List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Janet Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Mary Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Peter Carlsson'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Trevor Hansen'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
      </List>
    </Container>
  ))
  .add('with actionItem', () => (
    <Container>
      <Header title={'Text and Action Item List'} />
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <List style={{ width: 300 }}>
            <ListItem
              text={'Janet Perkins'}
              media={
                <Avatar
                  type="icon"
                  content="person"
                  contentColor={'#ececec'}
                  color={'#a3a3a3'}
                  size={40}
                />
              }
              onPress={() => store.set({ checkedOne: !state.checkedOne })}
              actionItem={
                <Checkbox
                  checked={state.checkedOne}
                  onPress={() => store.set({ checkedOne: !state.checkedOne })}
                />
              }
            />
            <ListItem
              text={'Mary Perkins'}
              media={
                <Avatar
                  type="icon"
                  content="person"
                  contentColor={'#ececec'}
                  color={'#a3a3a3'}
                  size={40}
                />
              }
              onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
              actionItem={
                <Checkbox
                  checked={state.checkedTwo}
                  onPress={() => store.set({ checkedTwo: !state.checkedTwo })}
                />
              }
            />
            <ListItem
              text={'Peter Carlsson'}
              media={
                <Avatar
                  type="icon"
                  content="person"
                  contentColor={'#ececec'}
                  color={'#a3a3a3'}
                  size={40}
                />
              }
              onPress={() => store.set({ checkedThree: !state.checkedThree })}
              actionItem={
                <Checkbox
                  checked={state.checkedThree}
                  onPress={() =>
                    store.set({ checkedThree: !state.checkedThree })
                  }
                />
              }
            />
            <ListItem
              text={'Trevor Hansen'}
              media={
                <Avatar
                  type="icon"
                  content="person"
                  contentColor={'#ececec'}
                  color={'#a3a3a3'}
                  size={40}
                />
              }
              onPress={() => store.set({ checkedFour: !state.checkedFour })}
              actionItem={
                <Checkbox
                  checked={state.checkedFour}
                  onPress={() => store.set({ checkedFour: !state.checkedFour })}
                />
              }
            />
          </List>
        )}
      </State>
    </Container>
  ));
