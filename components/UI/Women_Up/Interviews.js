import React from 'react'

import Afua from '../../../assets/images/Afua.jpg'
import Alice from '../../../assets/images/Alice 2.jpg'
import Bongikile from '../../../assets/images/Bongikile.jpg'
import Dalingcebo from '../../../assets/images/Dalingcebo.jpg'
import Dorothy from '../../../assets/images/Dorothy.jpg'
import Emefa from '../../../assets/images/Emefa.jpg'
import hlengiwe from '../../../assets/images/Hlengiwe.jpg'
import Nkhosingiphile from '../../../assets/images/Nkhosingiphile.jpg'
import Nolwazi from '../../../assets/images/Nolwazi.jpg'
import Nosifiso from '../../../assets/images/Nosifiso.jpg'
import Reynee from '../../../assets/images/Reynee.jpg'
import Wachira from '../../../assets/images/Wachira.jpg'


export default function Interviews() {
  const responses = [
    {
      name: 'Nikita',
      birthYear: '2003',
      hobbies: '',
      answers: [
        'Getting new ideas, seeing life from new various perspectives which helps with growth and emotional development.',
        'A meeting/session held at Mountain Inn where we had Nonhle Matsebula as one of our guests. Seeing how she made her dream come true being a young business owner who’s female. Till today, seeing her products, Crown of a Natural, on shelves at Clicks is so beautiful and inspiring. A lot like the impact I am aspiring to have as well.',
        'Fellowship with women who are like me, most of them going through the same things I am going through. It is more of a productive get away each time.'
      ]
    },
    {
      name: 'Dalingcebo',
      birthYear: '2003',
      hobbies: '',
      answers: [
        'I met other young people, got to understand different lifestyles, different ways of thinking, and other ideas along my interest line.',
        'The last session we had, the sleepover training, it was the best… I got to understand so many things I’ve started implementing in my life.',
        'I love the girls, so far there’s no drama about this, gossiping about this one and drama like that… More importantly our organizer is super kind, and she understands her sisters.'
      ]
    },
    {
      name: 'Bongekile',
      birthYear: '',
      hobbies: '',
      answers: [
        'I am now a free, flexible, and relaxed person who enjoys talking about anything and have learnt to trust people back, a step at a time.',
        'Healing session by emotional support group.',
        'Connection and support.'
      ]
    },
    {
      name: 'Teyise',
      birthYear: '2004',
      hobbies: '',
      answers: [
        'Attending WU sessions and meeting all the lovely ladies has helped me learn how to socialize. Most importantly, I now have people to count on.',
        'Our first session has to be the best one thus far, all the love that was shared for people we had just met was truly memorable.',
        'Woman Up is a place filled with nothing but love, a great atmosphere for relaxing together. This is absolutely amazing, not everyone has that kind of space but WU has created one for me and I’m grateful.'
      ]
    },
    {
      name: 'Emefa',
      birthYear: '2003',
      hobbies: '',
      answers: [
        'Networking and collaborating with other young people has made me see and experience how different and unique each individual is in their own way, it has inspired me and motivated me as a woman that I can do anything I want if I put my mind into it.',
        'One session that is quite memorable to me was our self-confidence and setting boundaries session, it made me stand strong and firm in setting my own boundaries and that it really is okay to be selfish sometimes.',
        'I enjoy socializing and relating to the other women in the Woman Up sisterhood, sharing our experiences and being able to open up about the things that we go through in life as women.'
      ]
    },
    {
      name: 'Reynee',
      birthYear: '2005',
      hobbies: '',
      answers: [
        'Meeting new people, making friends.',
        'The self-care workshop.',
        'Community, help, love.'
      ]
    },
    {
      name: 'Nkosingiphile',
      birthYear: '1999',
      hobbies: 'Reading, listening to music, Series and Sleeping',
      answers: [
        'I have grown a lot in terms of opening up and being able to speak my opinion on issues.',
        'The healing session on the 4th of February 2023',
        'The friendships I\'ve created and the lessons and being able to speak my mind freely. The support I get through the sisterhood.'
      ]
    },
    {
      name: 'Bavumile',
      birthYear: '1997',
      hobbies: '',
      answers: [
        'Networking with other young people at WU has greatly improved my self-confidence and the way I perceive myself. I got to understand that what I go through as a young person everyone goes through it and I got tools from being part of WU on how to navigate every moment in life.',
        'The most impactful moment since being with WU, I would say was the very first conference where we got to share our experiences the good and the bad, that’s when I knew WU was a Safe Space.',
        'What I enjoy about the WU sisterhood is the fact that every meeting we haveis filled with love and support, we laugh, we cry, we share stories and we encourage one another.'
      ]
    },
    // Add more participants' responses here
  ];


  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {responses.map((response, index) => (
            <div key={index} className="border border-gray-300 p-4">
              <h3 className="text-lg font-bold mb-2">Member: {response.name}</h3>
              <p className="mb-2">Birth Year: {response.birthYear}</p>
              <p className="mb-2">Hobbies: {response.hobbies}</p>
              <ol className="list-decimal pl-4">
                <li className="mb-1">
                  <strong>Q1:</strong> What inspires you to participate in Youth and Woman Up?
                  <br />
                  <span className="ml-2">{response.answers[0]}</span>
                </li>
                <li className="mb-1">
                  <strong>Q2:</strong> Can you share a memorable experience from Youth and Woman Up?
                  <br />
                  <span className="ml-2">{response.answers[1]}</span>
                </li>
                <li className="mb-1">
                  <strong>Q3:</strong> What do you enjoy most about the Youth and Woman Up sisterhood?
                  <br />
                  <span className="ml-2">{response.answers[2]}</span>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
