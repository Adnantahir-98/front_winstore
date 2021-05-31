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
        // <Form onSubmit={submitHandler} className="d-flex mr-auto">
        //     <Form.Control
        //         type='text'
        //         name='q'
        //         onChange={(e) => setKeyword(e.target.value)}
        //         className='mr-sm-4 ml-sm-3 px-2 w-100 md-6 form-control border-right-0 rounded-0 main-search-input'
        //     ></Form.Control>

        //     <Button
        //         type='submit'
        //         variant='outline-success'
        //         className='btn btn-success border-left-0 mt-1'> Search </Button>
        // </Form>
        
            <form className="d-flex mr-auto"
             id="main-search" onSubmit={submitHandler}>
                <input 
                    className="form-control me-2 mt-1 border-right-0 rounded-0 main-search-input" 
                    name="q" 
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Search" 
                    style={{borderTopRightRadius: "0%", borderBottomRightRadius: "0%", width: "375px"}} 
                />
                <button 
                    className="btn btn-success border-left-0 mt-1" 
                    type="submit" 
                    style={{borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%",}}>
                    <i className="fa fa-search"></i>
                </button>
            </form>

    )
}

export default SearchBox
