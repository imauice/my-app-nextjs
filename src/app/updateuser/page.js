'use client'
import { useState } from 'react';
import axios from 'axios';
import styles from './updateuser.module.css'; // Import the CSS module

export default function UpdateUser() {
  const [userId, setUserId] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newAvatar,setNewAvatar] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
      const response = await axios.put('https://www.melivecode.com/api/users/update', {
        id: userId,
        fname: newFirstName,
        lname: newLastName,
        avatar:newAvatar
      });
      if (response.status === 200) {
        setMessage(`Success: ${response.data.message}`);
      }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Update User Last Name</h1>
        <form onSubmit={handleUpdate} className={styles.form}>
          <div className={styles.formGroup}>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className={styles.input}
              placeholder="Enter user ID"
            />
          </div>
          <div className={styles.formGroup}>
            <label>New First Name:</label>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter new last name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>New Last Name:</label>
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              className={styles.input}
              placeholder="Enter new last name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>New Avatar:</label>
            <input
              type="text"
              value={newAvatar}
              onChange={(e) => setNewAvatar(e.target.value)}
              className={styles.input}
              placeholder="Enter new avatar"
            />
          </div>
          <button type="submit" className={styles.button}>Update User</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}