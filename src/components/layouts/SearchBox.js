import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler}>
            <form className="d-flex mr-auto" id="main-search">
                <input className="form-control me-2 mt-1 border-right-0 rounded-0 main-search-input" name="q" onChange={(e) => setKeyword(e.target.value)} placeholder="Search" style={{borderTopRightRadius: "0%", borderBottomRightRadius: "0%", width: "375px"}} />
                <button className="btn btn-success border-left-0 mt-1" type="submit" style={{borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%",}}><i className="fa fa-search"></i></button>
            </form>
        </Form>
    )
}

export default SearchBox
