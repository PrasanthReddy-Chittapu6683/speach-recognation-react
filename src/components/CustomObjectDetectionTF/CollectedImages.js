import React, { useEffect, useState } from 'react'
import { firebaseApp } from '../../firebase';
import Button from '@material-ui/core/Button';

const CollectedImages = () => {
    const [urlList, seturlList] = useState([])
    const db = firebaseApp.firestore();

    const getImages = async (userName) => {

        const userCollections = await db.collection('users').doc(userName).collection('avatarurls').get();

        seturlList(userCollections.docs.map(doc => {
            console.log(doc.data())

            return doc.data();
        }))
    }
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            // const userCollections = await db.collection('users').get();
            // const asd = await db.collection('users').doc(userName).collection('avatarurls').onSnapshot(snapShot => (
            //     console.log(snapShot.docs.map(doc => doc.data()))
            // ))
            //const userCollections = await db.collection('users').get();
            //console.log(userCollections)

            const userCollections = await db.collection("users").get().then((querySnapshot) => {
                setUsersList(querySnapshot.docs.map(doc => {
                    // userNames.push((doc.data().name))
                    console.log(doc.data().name)
                    return (doc.data().name)
                }))

            });


            //     // querySnapshot.forEach((doc) => {
            //     //     // doc.data() is never undefined for query doc snapshots
            //     //     console.log(doc.name, " => ", doc.data());
            //     // });
            // });

            // userNames.forEach(usr => {
            //     const userCollections = db.collection('users').doc('D').collection('avatarurls').get();

            //     seturlList(userCollections.docs.map(doc => {
            //         console.log(doc.data())
            //         return doc.data();
            //     }))
            //     // const urls = await db.collection('users').doc(usr).collection('avatarurls').get()
            //     // seturlList(urls.docs.map(doc => {
            //     //     return doc.data();
            //     // }))
            // });


            // setUsers(userCollections.docs.map(doc => {
            //     return doc.data();
            // }))
        }
        fetchUsers()
        return () => {

        }
    }, [])

    return (
        <div>
            <div >

                <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'scroll', padding: '20px' }}>
                    {

                        usersList.map((usr, i) => {
                            return (
                                <div key={usr + i} style={{ objectFit: 'contain', width: '100%', maxHeight: '100px', marginRight: '10px', transition: 'transform .55s' }}
                                >
                                    <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        onClick={() => getImages(usr)} variant="contained" color="secondary">
                                        {usr}
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    urlList.length > 0 &&
                    <div style={{ display: 'flex', overflowY: 'hidden', overflowX: 'scroll', padding: '20px' }}>


                        {

                            urlList.map((imgurl, i) => {
                                return (
                                    // <li key={imgurl.url + i} style={{ margin: '10px' }}>
                                    <img style={{ objectFit: 'contain', width: '100%', maxHeight: '100px', marginRight: '10px', transition: 'transform .55s' }}
                                        key={imgurl.url + i} width='100' height='100' src={imgurl.url} />
                                    // </li>
                                )
                            })


                        }
                    </div>
                }
            </div>

        </div>
    )
}

export default CollectedImages
