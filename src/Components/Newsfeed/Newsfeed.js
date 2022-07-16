import React, { useEffect } from 'react'
import './Newsfeed.css'
import { SparklesIcon } from '@heroicons/react/outline'
import Input from '../Input/Input'
import Post from '../Post/Post'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://apiminitwitter.herokuapp.com/users'

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
                        first_name={post.first_name}
                        last_name={post.last_name}
                        handle={post.handle}
                        verified={post.true}
                        bio={post.bio}
                        profile_picture={post.profile_picture}
                        background_picture={post.background_picture}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Newsfeed
