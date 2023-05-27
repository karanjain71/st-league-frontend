import * as url from './url_helper'
import axios from "axios"
import axiosApi from './api_helper'

export const postLogin = async (email, password) => {
  const payload = {
    "username": email,
    "password": password
  }
  return axiosApi.post(url.POST_LOGIN,payload)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return JSON.stringify(response.data)
    }
    throw response.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}

export const postRegister = async (payload) => {
  return axiosApi.post(url.POST_REGISTER,payload)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return JSON.stringify(response.data)
    }
    throw response.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}

export const getAllStocks = async () => {
  return axiosApi.get(url.GET_ALL_STOCKS)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return response.data
    }
    throw response.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}

export const getTopGainers = async () => {
  return axiosApi.get(url.GET_TOP_GAINERS)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return response.data.data
    }
    throw response.data.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}

export const getTopLosers = async () => {
  return axiosApi.get(url.GET_TOP_LOSERS)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return response.data.data
    }
    throw response.data.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}

export const getTopByVolume = async () => {
  return axiosApi.get(url.GET_TOP_BY_VOLUME)
  .then(response => {
    if (response.status >= 200 || response.status <= 299) {
      return response.data
    }
    throw response.data
  })
  .catch(err=> {
    console.log(JSON.stringify(err))
  })
}