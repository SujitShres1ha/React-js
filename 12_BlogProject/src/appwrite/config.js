import {Client, Account, ID, Databases} from "appwrite"
import conf from "../config/config.js"

class Service {
  client = new Client()
  database
  constructor(){
    this.client = this.client
                  .setEndpoint(conf.appwriteUrl)
                  .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client) 
    this.bucket = new Storage(this.client)
  }

  //posts methods
  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,content,featuredImage,status,userId
        }
      )
    } catch (error) {
      console.log(`Create Post Error : ${error}`)
    }
  }


async updatePost(slug,{title, content, featuredImage, status, userId}){
  try {
    return await this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {
        title,content,featuredImage,status,userId
      }
    )
  } catch (error) {
    console.log(`Update Post Error : ${error}`)
  }
}

async deletePost(slug){
  try {
    await this.databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    )
    return true
  } catch (error) {
    console.log(`Delete Post Error: ${error}`)
  }
}

async getPost(slug){
  try {
    return await this.databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    )
  } catch (error) {
    console.log(`Get Post Error: ${error}`)
  }
}

async getPosts(){
  try {
    return await this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal("status","active")
      ]
    )
  } catch (error) {
    console.log(`Get All Posts Error: ${error}`)
  }
}


//file methods
async uploadFile(file){
  try {
    return await this.bucket.createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
    )
  } catch (error) {
    console.log(`File Upload Error : ${error}`)
  }
}

async deleteFile(id){
  try {
    await this.bucket.deleteFile(
      conf.appwriteBucketId,
      id
    )
    return true
  } catch (error) {
    console.log(`File Delete Error : ${error}`)
    return false
  }
}

async filePreview(id){
  try {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      id
    )
  } catch (error) {
    console.log(`File Preview Error: ${error}`)
  }
}
}



const service = new Service()

export default service