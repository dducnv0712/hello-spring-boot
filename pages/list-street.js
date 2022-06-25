import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
export default function ListStreet() {
  const [streets, setStreet] = React.useState([]);

  const fetchData = async () => {
    await axios.get("https://summer-boot.herokuapp.com/api/streets").then(res => {
      if (res.status == 200) {
        setStreet(res.data);
        console.log(res.data)
      }
    }).catch(err => {
      console.log(err);
    })
  }
  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className='row'>
        <div className='col-7 m-auto mt-5'>
          <div className='card'>
            <div className='card-header'>
              <h6 className='card-title'>List Streets</h6>
            </div>
            <div className='card-body'>
              <Link href={"/create"}>
                <a >
                  create a street
                </a>
              </Link>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">District</th>
                    <th scope="col">Founding</th>
                    <th scope="col">Street Status</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    streets?.map((item, index) => {
                      return (
                        <>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.district}</td>
                            <td>{item.founding}</td>
                            <td>{item.streetStatus}</td>
                            <td>{item.status}</td>
                            <td>
                              <div className="btn-group" role="group" ariaLabel="Basic mixed styles example">
                                <button type="button" className="btn btn-danger">Left</button>
                                <button type="button" className="btn btn-warning">Middle</button>
                                <button type="button" className="btn btn-success">Right</button>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
