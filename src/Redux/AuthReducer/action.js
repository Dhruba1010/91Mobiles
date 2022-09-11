
import axios from 'axios';
import GhostAuth from "ghost-auth";
import * as types from './actionTypes';

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRocnViYXNpbmhhMDk2cEBnbWFpbC5jb20iLCJuYW1lIjoiRGhydWJhIiwiaWF0IjoxNjU1NTQ4OTI5LCJleHAiOjE2ODcwODQ5Mjl9.KtQAczklc5mGsQ6HRHYEDS_qdd6nN1wIg7f0uK2Zv4I";
const ghost = new GhostAuth(API_KEY);

export const registerUser = (payload) => dispatch => {
    dispatch({ type: types.REGISTER_REQUEST})
    return ghost.signUp('https://ghost-auth-service.herokuapp.com/v1/signup/api', payload, {
        headers: { 'Authorization': 'Bearer +2797b2e790d1ce4eee95fd6cc27fd4082ae0398950c599e1' },
    })
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log(e.message);
    })
}