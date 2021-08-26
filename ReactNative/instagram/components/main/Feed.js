import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
require('firebase/firestore');

import { connect } from 'react-redux';

function Feed(props) {
	const [ posts, setPosts ] = useState([]);

	useEffect(
		() => {
			let posts = [];
			if (props.usersLoaded === props.following.length) {
				for (let i = 0; i < props.following.length; i++) {
					const user = props.users.find((el) => el.uid === props.following[i]);
					if (user !== undefined) {
						posts = [ ...posts, user.posts ];
					}
				}
			}
			posts.sort((x, y) => {
				return x.creation - y.creation;
			});

			setPosts(posts);
		},
		[ props.usersLoaded ]
	);

	return (
		<View style={styles.container}>
			<View style={styles.GalleryContainer}>
				<FlatList
					numColumns={1}
					horizontal={false}
					data={posts}
					renderItem={({ item }) => (
						<View style={styles.ImageContainer}>
							<Text style={styles.container}>{}item.user.name</Text>
							<Image style={styles.image} source={{ uri: item.downloadURL }} />
						</View>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	InfoContainer: {
		margin: 20
	},
	GalleryContainer: {
		margin: 20
	},
	ImageContainer: {
		flex: 1 / 3
	},
	image: {
		flex: 1,
		aspectRatio: 1 / 1
	}
});

const mapStateToProps = (store) => ({
	currentUser: store.userState.currentUser,
	following: store.userState.following,
	users: store.usersState.users,
	usersLoaded: store.usersState.usersLoaded
});

export default connect(mapStateToProps, null)(Feed);
