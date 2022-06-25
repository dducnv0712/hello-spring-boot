import Link from 'next/link'
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateEmployee = () => {
    const [name, setName] = React.useState(null);
    const [wage, setWage] = React.useState(null);
    const route = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == null) {
            if (typeof window !== 'undefined') {
                alert("Please enter name.")
            }
        } else if (wage == null) {
            if (typeof window !== 'undefined') {
                alert("Please enter wage.")
            }
        } else {
            var data = JSON.stringify({
                "name":name,
                "wage": wage
            });
            var config = {
                method: 'post',
                url: 'https://summer-boot.herokuapp.com/api/employees',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    if (response.status == 200) {
                        if (typeof window !== 'undefined') {
                            alert("Create success.")
                        }
                        route.push("/employee")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
    return (
        <>
            <div className='row'>
                <div className='col-6 m-auto'>
                    <div className='card  mt-5'>
                        <div className='card-header'>
                            <h6 className='card-title'>Create</h6>
                        </div>
                        <div className='card-body'>
                            <Link href={"/employee"}>
                                <a>
                                    List Employees
                                </a>
                            </Link>
                            <div className='row'>
                                <div className="mb-3">
                                    <label httpFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input onChange={value => setName(value.target.value)} type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label httpFor="exampleInputEmail1" className="form-label">Wage</label>
                                    <input type="number"  onChange={value => setWage(value.target.value)} className="form-control" required />
                                </div>
                            </div>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEmployee