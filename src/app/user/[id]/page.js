"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './userbyid.module.css';
import Navbar from '@/components/navbar/Navbar';

export default function Userpage(userId) {
  const [userData, setUserData] = useState(null);
  const { params } = userId
  const id = params.id;

  useEffect(() => {
    if (id) {
      axios.get(`https://www.melivecode.com/api/users/${id}`).then(response => {
        if (response.status === 200 && response.data.status === 'ok') {
          setUserData(response.data.user);
        }
      }).catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [id]);

  return (
    <div>
      <Navbar/>

      <div className={styles.container}>
        {userData ? (
          <>
            <div className={styles.avatar_flip}>
              <img src={userData.avatar} alt={`${userData.fname} ${userData.lname}`} height="150" width="150" />
            </div>
            <div className={styles.name}>
              <p>{userData.fname} {userData.lname}</p>
            </div>
            <div className={styles.details} >
              <h2 className={styles.h2}>User Details</h2>
              <p className={styles.p}>ID: {userData.id}</p>
              <p className={styles.p}>Username: {userData.username}</p>
              <p className={styles.p}>First Name: {userData.fname}</p>
              <p className={styles.p}>Last Name: {userData.lname}</p>
              <p className={styles.p}>Username: {userData.username}</p>
              <p className={styles.p}>Email: {userData.email}</p>
            </div>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}