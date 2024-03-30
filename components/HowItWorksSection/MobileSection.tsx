import React from 'react'
import SectionText from './SectionText'

const MobileSection = () => {
  return (
    <div className='sm:hidden w-full flex flex-col items-center'>
        <SectionText
            imageTop={-4.5}
            imageRight={-1}
            color="#FDA2FF"
            imagePath="/images/people.png"
            imageRotation={18}
            subtitle="YOU CAN INVITE THEM"
            title="SEARCH FOR YOUR FRIENDS & ADD THEM IN YOUR FRIEND LIST"
            text="Easily find and connect with your friends on ViZBL by searching for their usernames or email. Build your friend list effortlessly by adding those you want to share your video experiences with."
        />

        <div className='max-w-[31.5rem] w-full mt-[3rem] mb-[6rem] p-[0.5rem] bg-card-bg rounded-[0.5rem]'>
            <video
                draggable={false}
                autoPlay
                muted
                playsInline
                loop
                disablePictureInPicture
                className='rounded-[0.5rem]'
            >
                <source src="/gifs/addFriend.webm"  type="video/webm"/>
                <source src="/gifs/addFriend.mp4"  type="video/mp4"/>
            </video>
        </div>

        <SectionText
            imageTop={-3.25}
            imageRight={-1}
            color="#299DED"
            imagePath="/images/magn_glass.png"
            imageRotation={-15}
            subtitle="GET TO KNOW THEM"
            title="YOU CAN EASILY SHARE YOUR VIDEO ACTIVITY WITH FRIENDS"
            text="Share your latest video discoveries and favorite content with your friends on ViZBL in just a few clicks. Keep your friends updated on what you're watching, fostering discussions and recommendations."
        />

        <div className='max-w-[31.5rem] w-full mt-[3rem] mb-[6rem] p-[0.5rem] bg-card-bg rounded-[0.5rem]'>
            <video
                draggable={false}
                disablePictureInPicture
                autoPlay
                muted
                playsInline
                loop
                className='rounded-[0.5rem]'
            >
                <source src="/gifs/watchFriend.webm"  type="video/webm"/>
                <source src="/gifs/watchFriend.mp4"  type="video/mp4"/>
            </video>
        </div>

        <SectionText
            imageTop={-2.85}
            imageRight={-2.5}
            color="#782AD5"
            imagePath="/images/like.png"
            imageRotation={0}
            subtitle="LET THEM KNOW YOU FOLLOW"
            title="EASILY INTERACT AND SEND EMOJIS TO ONE ANOTHER"
            text="Express yourself and react to videos through a wide range of  emojis available on ViZBL. Connect on a deeper level by using emojis to convey emotions, opinions, and reactions, making your shared video experiences even more enjoyable."
        />

        <div className='max-w-[31.5rem] w-full mt-[3rem] p-[0.5rem] bg-card-bg rounded-[0.5rem]'>
            <video
                draggable={false}
                disablePictureInPicture
                autoPlay
                muted
                playsInline
                loop
                className='rounded-[0.5rem]'
            >
            <source src="/gifs/emojiFriend.webm"  type="video/webm"/>
            <source src="/gifs/emojiFriend.mp4"  type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default MobileSection