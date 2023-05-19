import * as url from './url_helper'
import axiosApi from './api_helper'

export const postLogin = async (email, password) => {
    const payload = {
      "username": email,
      "password": password
    }
    console.log(payload, url.POST_LOGIN, " payload")
    return axiosApi.post(url.POST_LOGIN, payload)
    .then(response => {
        console.log(response + " here2")
      if (response.status >= 200 || response.status <= 299) {
        return response.data
      }
      throw response.data
    })
    .catch(err=> {
      console.log(JSON.stringify(err) + " dhfsjhsfddjd")
    })
  }