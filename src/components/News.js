import React, { Component } from 'react'
import Newitem from './Newitem'
import Proptypes from 'prop-types'

export default class News extends Component {


    static defaultProps = {
        country: 'in',
        pageSize: 8,
        page: 1,
        category: 'sports'
    }

    static propTypes = {
        country: Proptypes.string,
        pageSize: Proptypes.number,
        page: Proptypes.number,
        category: Proptypes.string
    }

    articles = []

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b99d22fb9e14378971023c511031e7d&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)
        this.setState({ articles: parseddata.articles })
    }
    constructor() {
        super()

        this.state = {
            articles: this.articles,
            loading: false,

        }


        console.log("i am a constructor")

    }
    render() {
        return (
            <>
                <div className='container my-3 d-flex justify-content-center'>
                    <div className='row' >
                        {this.state.articles.map((element) => {

                            return <div className="col-md-3" key={element.url}>

                                <Newitem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                            </div>

                        })}

                        <div className="d-flex justify-content-between buttoncontainer">
                            <button type="button" className="btn btn-dark" style={{ '--bs-btn-padding-y': '.50rem', '--bs-btn-padding-x': '1rem', '--bs-btn-font-size': '.75rem', width: '10%' }}>Previous</button>
                            <button type="button" className="btn btn-dark" style={{ '--bs-btn-padding-y': '.50rem', '--bs-btn-padding-x': '1rem', '--bs-btn-font-size': '.75rem', width: '10%' }}>Next</button>
                        </div>
                    </div>
                </div>
            </>



        )
    }
}
