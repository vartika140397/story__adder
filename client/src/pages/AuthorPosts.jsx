import React, { useState } from 'react'
import {DUMMY_POSTS} from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
    const[posts, setPosts] =useState(DUMMY_POSTS)
  return (
    <section className="author-posts">
        {posts.length > 0 ? <div className="container author-posts__container">
                {
                    posts.map(({id,thumbnail,category,title,desc,authorID})=>
                    <PostItem key={id} thumbnail={thumbnail} category ={category} 
                    title={title} description={desc} authorID={authorID} onChange={e=>setPosts(e.target.value)}/> )
                }
        </div> :<h2 className='center'>No posts founds</h2>}
    </section>
  )
}

export default AuthorPosts