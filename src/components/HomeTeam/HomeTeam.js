import React from 'react'
import './HomeTeam.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function HomeTeam() {
    const { data: members, isSuccess } = useQuery({
        queryKey: 'list-items',
        queryFn: () => client('members?page=1&limit=6'),
    })

    isSuccess && console.log(members)
    return (
        <section className='hometeam'>
            <div className='container'>
                <h2 className='hometeam__heading'>
                    <small className='hometeam__small-heading'>НАША</small>
                    КОМАНДА
                </h2>

                <p className='hometeam__paragraph'>
                    Pet owners, Film geeks, Sports Junkies? It’s obvious, the
                    team work is splendid, for they are all either beer nuts or
                    caffeine addicts.
                </p>

                <ul className='hometeam__list'>
                    {isSuccess &&
                        members.map((member) => (
                            <li className='hometeam__item'>
                                <figure className='hometeam__item-figure'>
                                    <img
                                        className='hometeam__item-figure-img'
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            '/img/' +
                                            member.member_picture
                                        }
                                        alt='Team member'
                                        width='250'
                                        height='250'
                                    />
                                    <figcaption className='hometeam__item-figcaption'>
                                        {member.member_fullname}
                                        <small className='hometeam__item-small-figcaption'>
                                            {member.member_profession}
                                        </small>
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    )
}

export default HomeTeam
