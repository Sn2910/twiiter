import React, { useEffect } from 'react'
import './Newsfeed.css'
import { SparklesIcon } from '@heroicons/react/outline'
import Input from '../Input/Input'
import Post from '../Post/Post'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const url = 'https://apiminitwitter.herokuapp.com/messages'

function Newsfeed() {
    const [posts, setPosts] = useState([])
    const fetchUserInfo = async () => {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts)
        setPosts(posts)
    }
    useEffect(() => {
        fetchUserInfo()
    }, [])
    return (
        <div className="newsfeed-container">
            <div className="newsfeed-header">
                <h4>Home</h4>
                <div className="animation-hover">
                    <SparklesIcon className="header-icon" />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Link to={'/messagePage/' + post._id}>
                    <Post
                        first_name={post.user.first_name}
                        last_name={post.user.last_name}
                        handle={post.user.handle}
                        verified={post.user.true}
                        text={post.text}
                        profile_picture={post.user.profile_picture}
                        post_image={post.post_image}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Newsfeed
