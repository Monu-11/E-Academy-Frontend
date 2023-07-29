import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  userReducer,
  subcriptionReducer,
} from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subcriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;

export const server = 'https://apex-academy.onrender.com/api/v1';

// export const server = 'http://localhost:4000/api/v1';
