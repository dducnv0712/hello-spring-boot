import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
export default function Home() {
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
      <div style={{ height: "100vh" }} className='container d-flex m-auto  justify-content-center  align-items-center'>
        <div>
          <Link href={"/list-street"}>
            <a style={{width:"300px"}} className='btn btn-primary  mb-3 btn-lg  py-1'>
              Streets
            </a>
          </Link>
          <br/>
          <Link href={"/employee"}>
            <a style={{width:"300px"}} className='btn btn-primary btn-lg  py-1'>
              Employees
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
