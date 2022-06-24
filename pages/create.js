import Link from 'next/link'
import React from 'react'

const Create = () => {
    return (
        <>
            <div className='row'>
                <div className='col-6 m-auto'>

                    <div className='card  mt-5'>

                        <div className='card-header'>
                            <h6 className='card-title'>Create</h6>
                        </div>
                        <div className='card-body'>
                            <Link href={"/"}>
                                <a>
                                    List
                                </a>
                            </Link>
                            <div className='row'>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Street Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className='col-8 mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">District</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-4 mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Founding</label>
                                    <input type="date" class="form-control" />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Street Status</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label for="exampleFormControlInput1" class="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create