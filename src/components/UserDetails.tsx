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
				<div className='mt-4 mb-5 pl-6 pr-6 pt-8 pb-12 rounded-[15px] bg-foreground shadow-custom dark:bg-dark-foreground dark:shadow-none'>
					<div className='flex flex-wrap'>
						<img className='w-[70px] h-[70px] mr-5 rounded-[70px]' src={userData.avatar_url} alt={userData.login} />
						<div className='mb-8'>
							<h2 className='text-base text-secondary font-bold dark:text-dark-primary'>{userData.name}</h2>
							<p className='text-xs text-blue'>@{userData.login}</p>
							<p className='text-xs text-quaternary dark:text-dark-primary'>
								Joined{' '}
								{new Date(userData.created_at).toLocaleDateString('en-GB', {
									day: 'numeric',
									month: 'short',
									year: 'numeric',
								})}
							</p>
						</div>
					</div>
					{userData.bio === null ? (
						<p className='mb-6 leading-25 text-xs text-primary dark:text-dark-primary'>This profile has no bio</p>
					) : (
						<p className='mb-6 leading-25 text-xs text-primary dark:text-dark-primary'>{userData.bio}</p>
					)}
					<ul className='flex flex-wrap items-center justify-around pt-4 pb-4 bg-background text-xls text-center text-primary rounded-[10px] dark:bg-dark-background dark:text-dark-primary'>
						<li className='flex flex-col'>
							<span>Repos</span>
							<span className='text-base font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.public_repos}
							</span>
						</li>
						<li className='flex flex-col'>
							<span>Followers</span>
							<span className='text-base font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.followers}
							</span>
						</li>
						<li className='flex flex-col'>
							<span>Following</span>
							<span className='text-base font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.following}
							</span>
						</li>
					</ul>
					<ul className='flex flex-col gap-4 mt-6 text-xs text-primary dark:text-dark-primary'>
						{userData.location ? (
							<li className='flex gap-4'>
								<Location className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.location}</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive'>
								<Location fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.blog ? (
							<li className='flex gap-3 text-primary dark:text-dark-primary'>
								<Website className='fill-current fill-primary dark:fill-dark-primary' />
								<span>
									<a className='transition duration-300 hover:underline' href={userData.blog}>
										{userData.blog}
									</a>
								</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive'>
								<Website fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.twitter_username ? (
							<li className='flex gap-3 text-primary dark:text-dark-primary'>
								<TwitterIcon className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.twitter_username}</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive'>
								<TwitterIcon fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.company ? (
							<li className='flex gap-3 text-primary dark:text-dark-primary'>
								<Company className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.company}</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive'>
								<Company fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
					</ul>
				</div>
			) : (
				<div className='mt-8 mb-5 pl-6 pr-6 pt-6 pb-6 rounded-[15px] bg-foreground shadow-custom dark:bg-dark-foreground dark:shadow-none'>
					<p className='text-primary dark:text-dark-primary text-sml'>{error}</p>
				</div>
			)}
		</>
	)
}

export default UserDetails
