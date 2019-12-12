import {ADDING_FEATURE, REMOVING_FEATURE} from './carActions';

export const initialState = {
    additionalPrice: 0,
    car: {
    //   price: 26395,
      price: 0,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
    //   console.log('from carReducer.js', state, action)
      switch(action.type) {
        case ADDING_FEATURE:
            return {
                ...state, 
                additionalPrice: state.additionalPrice += action.payload.price,
                car: {
                    ...state.car, 
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(a => a !== action.payload),
            }
        case REMOVING_FEATURE: 
            return {
                ...state,
                additionalPrice: state.additionalPrice -= action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(r => r !== action.payload)
                    // features: state.car.features.filter(r => console.log(r.id, action.payload.id))
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default:
            return state;
      }
  };