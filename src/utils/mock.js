import MockApapter from 'axios-mock-adapter';
import axios from './axios';

const instance = new MockApapter(axios, { delayResponse: 0 });

export default instance;
