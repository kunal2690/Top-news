import React, { useEffect, useState } from 'react'
import Newitem from './Newitem'
import Proptypes from 'prop-types'
import Spinner from './Spinner'



const News = (props) => {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)




    useEffect(() => {
        const c = async () => {

            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page}`
            setLoading(true)
            let data = await fetch(url)
            let parseddata = await data.json()
            setLoading(false)
            setArticles(parseddata.articles)
            setTotalResults(parseddata.totalResults)

        }
        c()
    }, [page, props.country, props.category, props.api, props.pageSize])



    const handleprevclick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page - 1}`
        setLoading(true)

        let data = await fetch(url)
        let parseddata = await data.json()
        setLoading(false)
        setArticles(parseddata.articles)
        setPage(page - 1)
    }

    const handlenextclick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&pageSize=${props.pageSize}&page=${page + 1}`
        setLoading(true)

        let data = await fetch(url)
        let parseddata = await data.json()
        setLoading(false)
        setArticles(parseddata.articles)
        setPage(page + 1)
    }


    return (
        <>
            <div className='container my-3 ' style={{ height: '140vh' }}>
                {loading && <Spinner />}
                <div className='row' >
                    {!loading && articles.map((element) => {

                        return <div className="col-md-3" key={element.url}>
                            <Newitem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} />
                        </div>

                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between align-items-end">
                <button type="button" onClick={handleprevclick} disabled={page === 1} className="btn btn-dark" style={{ '--bs-btn-padding-y': '.50rem', '--bs-btn-padding-x': '1rem', '--bs-btn-font-size': '.75rem', width: '10%' }}> <span>&#8592;</span>  Previous</button>
                <button type="button" onClick={handlenextclick} disabled={page === Math.ceil(totalResults / 8)} className="btn btn-dark" style={{ '--bs-btn-padding-y': '.50rem', '--bs-btn-padding-x': '1rem', '--bs-btn-font-size': '.75rem', width: '10%' }}>Next <span>&#8594;</span></button>
            </div>
        </>
    )

}
News.defaultProps = {
    country: 'us',
    pageSize: 8,
    page: 1,
    category: 'general',


}
News.propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number,
    page: Proptypes.number,
    category: Proptypes.string

}
export default News
