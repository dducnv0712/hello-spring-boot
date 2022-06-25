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
    <div className='container h-screen'>
    </div>
    </>
  )
}
