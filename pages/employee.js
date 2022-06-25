import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
export default function Employee() {
  const [streets, setStreet] = React.useState([]);

  const fetchData = async () => {
    await axios.get("https://summer-boot.herokuapp.com/api/employees").then(res => {
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
              <h6 className='card-title'>List Employees</h6>
            </div>
            <div className='card-body'>
              <Link href={"/create-employee"}>
                <a >
                  create a employee
                </a>
              </Link>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Wage</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    streets?.map((item, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.wage}</td>
                           
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
