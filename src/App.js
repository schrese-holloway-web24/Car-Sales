import React from 'react';
import {connect} from 'react-redux';

import {add, remove} from './reducers/carActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.remove(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.add(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        {/* this is the left side(with the car image) */}
        <Header car={props.car} additionalPrice = {props.additionalPrice} />
        <AddedFeatures car={props.car} remove = {removeFeature}/>
      </div>
      <div className="box">
        {/* this is the right side(with the add buttons) */}
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} add = {buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state from mapStateToProps in App', state)
  return {
    additionalPrice: state.additionalPrice, 
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}


export default connect(mapStateToProps, {add, remove})(App);
