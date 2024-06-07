import {Client, Account, ID} from "appwrite"
import conf from "../config/config.js"

class AuthService {
  client = new Client()
  account 
  constructor(){
    this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

async createUser(email,password){
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password
      )
      if (user){
        console.log("User account created successfully")
      }else{
        console.log("User not created")
      }

    } catch (error) {
      console.log(`Error: ${error}`)
    }
}

async loginUser(email,password){
    try {
      return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
}

async getCurrentUser(){
    try{
      return await this.account.get()
    } catch (error){
      console.log(`Error: ${error}`)
    }
    return null
}

async logoutUser(){
    try {
      return await this.account.deleteSession('current')
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

}
const authService = new AuthService()

export default authService