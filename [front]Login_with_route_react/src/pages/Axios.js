import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Axios = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //axios({
        //    method: 'GET',
        //    url: 'https://jsonplaceholder.typicode.com/photos',
        //}).then(response => setPosts(response.data))

        //axios
        //    .get('https://jsonplaceholder.typicode.com/photos')
        //    .then(response => setPosts(response.data))
        const source = axios.CancelToken.source()

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/photos',
                    {
                        cancelToken: source.token,
                    }
                )
                setPosts(response.data)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('요청이 취소되었습니다.', error.message)
                } else {
                    console.log('에러가 발생했습니다.', error.message)
                }
            }
        }

        fetchData()

        return () => {
            source.cancel('컴포넌트 언마운트로 인한 취소')
        }
    }, [])

    return (
        <ul>
            {posts.map(post => (
                <li key={posts.id}>
                    <div>{post.title}</div>
                    <div>
                        <img src={post.thumbnailUrl} alt="몰라 + {posts.id}" />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Axios
