import React from 'react'
import { mount } from "enzyme";
import { UserContext } from '../../../components/09-useContext/UserContext';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';

describe("test in <HomeScreen/>", () => {

  const user ={
    name: 'jhon',
    email: 'jhon@yopmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value= {{user}}>
      <HomeScreen/>
    </UserContext.Provider>
  )

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
