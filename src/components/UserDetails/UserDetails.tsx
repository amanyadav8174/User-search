import React from 'react'
import { ReactComponent as Location } from '../../assets/icon-location.svg'
import { ReactComponent as Website } from '../../assets/icon-website.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg'
import { ReactComponent as Company } from '../../assets/icon-company.svg'

interface UserDetailsProps {
	userData: any
	error: string
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData, error }) => {
	return (
		<>
			{userData ? (
				<div className='grid grid-cols-auto mt-4 mb-5 px-6 md:px-10 py-8 md:py-10 rounded-[15px] bg-foreground shadow-custom dark:bg-dark-foreground dark:shadow-none lg:p-12 md:gap-x-5 lg:gap-x-0'>
					<img
						className='grid col-span-1 lg:col-span-1 min-w-[70px] md:min-w-[117px] h-[70px] md:h-[117px]  md:mb-0 rounded-[70px] lg:mr-9 mr-2'
						src={userData.avatar_url}
						alt={userData.login}
					/>
					<div className='md:min-w-[330px] lg:min-w-0 lg:grid lg:grid-cols-2 col-start-2 col-end-4 sm:min-w-[150px]'>
						<div className='sm:pb-1'>
							<h2 className='lg:min-w-[250px] text-base md:text-2xl text-secondary font-bold dark:text-dark-primary'>
								{userData.name}
							</h2>
							<p className='text-xs md:text-base text-blue md:pt-1'>
								<a
									href={`https://github.com/${userData.login}`}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue'>
									@{userData.login}
								</a>
							</p>
						</div>
						<p className='grid text-xs col-start-3 md:text-sm text-quaternary dark:text-dark-primary md:pt-1 lg:justify-self-end'>
							Joined{' '}
							{new Date(userData.created_at).toLocaleDateString('en-GB', {
								day: 'numeric',
								month: 'short',
								year: 'numeric',
							})}
						</p>
					</div>

					{userData.bio === null ? (
						<p className='mt-7  lg:mt-5 mb-6 md:mb-8 leading-25 text-xs md:text-sm text-primary dark:text-dark-primary grid col-start-1 col-end-4 lg:col-start-2'>
							This profile has no bio
						</p>
					) : (
						<p className='mb-6 mt-8 md:mb-8 lg:mt-5 leading-25 text-xs md:text-sm text-primary dark:text-dark-primary col-start-1 col-end-4 lg:col-start-2'>
							{userData.bio}
						</p>
					)}
					<ul className='flex flex-wrap items-center justify-around pt-4 md:pt-5 pb-4 md:pb-5 bg-background text-xls md:text-xs text-center text-primary rounded-[10px] dark:bg-dark-background dark:text-dark-primary col-start-1 col-end-4 lg:col-start-2'>
						<li className='flex flex-col'>
							<span>Repos</span>
							<span className='text-base md:text-xl font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.public_repos}
							</span>
						</li>
						<li className='flex flex-col'>
							<span>Followers</span>
							<span className='text-base md:text-xl font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.followers}
							</span>
						</li>
						<li className='flex flex-col'>
							<span>Following</span>
							<span className='text-base md:text-xl font-bold text-secondary dark:text-dark-primary uppercase'>
								{userData.following}
							</span>
						</li>
					</ul>
					<ul className='col-start-1 col-end-4 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 md:gap-x-10 mt-6 md:mt-8 text-xs md:text-sm text-primary dark:text-dark-primary'>
						{userData.location ? (
							<li className='flex gap-4 md:order-0'>
								<Location className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.location}</span>
							</li>
						) : (
							<li className='flex gap-4 text-inactive md:order-0'>
								<Location fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.blog ? (
							<li className='flex gap-3 text-primary dark:text-dark-primary md:order-2 items-center'>
								<Website className='flex-shrink-0 fill-current fill-primary dark:fill-dark-primary' />
								<span>
									<a className='hover:underline' href={userData.blog}>
										{userData.blog}
									</a>
								</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive md:order-2'>
								<Website fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.twitter_username ? (
							<li className='flex gap-3 text-primary dark:text-dark-primary md:order-1'>
								<TwitterIcon className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.twitter_username}</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive md:order-1'>
								<TwitterIcon fill='#A4B4CC' />
								<span>Not available</span>
							</li>
						)}
						{userData.company ? (
							<li className='flex gap-3 text-primary md:order-4 dark:text-dark-primary'>
								<Company className='fill-current fill-primary dark:fill-dark-primary' />
								<span>{userData.company}</span>
							</li>
						) : (
							<li className='flex gap-3 text-inactive md:order-4'>
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
