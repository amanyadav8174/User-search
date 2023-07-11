import React from 'react'
import { ReactComponent as Location } from '../assets/icon-location.svg'
import { ReactComponent as Website } from '../assets/icon-website.svg'
import { ReactComponent as TwitterIcon } from '../assets/icon-twitter.svg'
import { ReactComponent as Company } from '../assets/icon-company.svg'

interface UserDetailsProps {
	userData: any
	error: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData, error }) => {
	return (
		<>
			{userData ? (
				<div className=''>
					<div className=''>
						<img className='' src={userData.avatar_url} alt={userData.login} />
						<div className=''>
							<h2 className=''>{userData.name}</h2>
							<p className=''>@{userData.login}</p>
							<p className=''>
								Joined{' '}
								{new Date(userData.created_at).toLocaleDateString('en-GB', {
									day: 'numeric',
									month: 'short',
									year: 'numeric',
								})}
							</p>
						</div>
					</div>
					{userData.bio === null ? <p className=''>This profile has no bio</p> : <p className=''>{userData.bio}</p>}
					<ul className=''>
						<li className=''>
							<span>Repos</span>
							<span className=''>{userData.public_repos}</span>
						</li>
						<li className=''>
							<span>Followers</span>
							<span className=''>{userData.followers}</span>
						</li>
						<li className=''>
							<span>Following</span>
							<span className=''>{userData.following}</span>
						</li>
					</ul>
					<ul className=''>
						{userData.location ? (
							<li className=''>
								<Location />
								<span>{userData.location}</span>
							</li>
						) : (
							<li className=''>
								<Location fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.blog ? (
							<li className=''>
								<Website />
								<span>{userData.blog}</span>
							</li>
						) : (
							<li className=''>
								<Website fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.twitter_username ? (
							<li className=''>
								<TwitterIcon />
								<span>{userData.twitter_username}</span>
							</li>
						) : (
							<li className=''>
								<TwitterIcon fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.company ? (
							<li className=''>
								<Company />
								<span>{userData.company}</span>
							</li>
						) : (
							<li className=''>
								<Company fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
					</ul>
				</div>
			) : (
				<div className=''>
					<p className=''>{error}</p>
				</div>
			)}
		</>
	)
}

export default UserDetails
