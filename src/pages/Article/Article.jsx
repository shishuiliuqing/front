import React, { useEffect } from 'react'
import './Article.css'
import { useParams } from 'react-router-dom'
import SiderRight from '@/component/SiderRight/SiderRight'
import ArticleContent from '@/component/ArticleContent/ArticleContent'

const Article = () => {
    const params = useParams()
    let id = params.id

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='content-box' id='article'>
            <div className="content-left">
                <ArticleContent></ArticleContent>
            </div>
            <SiderRight></SiderRight>
        </div>
    )
}

export default Article
