'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"


const Notifications = () => {

    const [userNotifications, setUserNotifications] = useState()

    const fetchUser = async () => {
        try {
            const res = await fetch('https://api.myvizbl.com/api/get-user', {
                credentials: 'include',
            });
  
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
  
            const userNotifications = await res.json();
            setUserNotifications(userNotifications);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserNotifications(undefined);
        }
    };

    useEffect(() => {
        fetchUser()
    }, [])
    console.log(userNotifications)

    /*
    GET /api/get-notifications
Retrieves the notifications of the logged-in user.
    */

    const [active, setActive] = useState('sound')

  return (
    <div className='flex items-center mt-[1.5rem]'>
        <img className='mr-[0.5rem] size-[1.5rem]' src="/icons/dashboard-icons/bell.svg" alt="bell" draggable={false} />
        <p className='text-custom-white text-[1.125rem] leading-[1.125rem] font-[500] mr-[1rem]'>Notifications</p>
        <div className='flex gap-[1rem] items-center'>

            <motion.div 
                className="flex items-center gap-[0.5rem] cursor-pointer"
                onClick={() => setActive('sound')}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="size-[1.25rem]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="duration-[0.5s]" d="M11.4153 1.52222L11.4145 1.52173C11.3888 1.50715 11.3597 1.49966 11.3302 1.50001C11.3007 1.50036 11.2718 1.50855 11.2465 1.52373L4.73985 5.42637L4.62112 5.49759H4.48267H2C1.60235 5.49759 1.22097 5.65548 0.939693 5.93657C0.658456 6.21762 0.500309 6.59883 0.5 6.99642V12.3336C0.5 12.7314 0.658035 13.1129 0.93934 13.3942L0.585786 13.7478L0.93934 13.3942C1.22064 13.6756 1.60218 13.8336 2 13.8336H4.48267H4.62118L4.73994 13.9049L11.2477 17.81L11.4153 1.52222ZM11.4153 1.52222C11.441 1.53673 11.4624 1.5578 11.4773 1.58328C11.4921 1.60875 11.5 1.63772 11.5 1.66721V17.6669V17.667M11.4153 1.52222L11.5 17.667M11.5 17.667C11.5 17.6965 11.4922 17.7255 11.4773 17.751C11.4625 17.7764 11.4412 17.7975 11.4155 17.8121L11.662 18.2471M11.5 17.667L11.662 18.2471M11.662 18.2471L11.4155 17.8121C11.3899 17.8266 11.3608 17.8341 11.3313 17.8337M11.662 18.2471L11.3313 17.8337M17.8819 5.54681L17.7639 5.66475L17.8442 5.7452L17.8579 5.75435L17.8993 5.79993L17.926 5.82926L17.9348 5.83894L17.9431 5.84906C18.1672 6.12311 18.36 6.42131 18.518 6.73812M17.8819 5.54681L18.5182 6.73852C18.5181 6.73839 18.518 6.73825 18.518 6.73812M17.8819 5.54681L18.3536 6.01781L18.3541 6.01731L18.4324 5.93891C18.5755 6.14513 18.7032 6.36171 18.8143 6.5869L18.8156 6.58951C19.1596 7.27619 19.5 8.3 19.5 9.66159C19.5 11.0225 19.1586 12.0475 18.8158 12.7333L17.8819 5.54681ZM18.518 6.73812C18.8421 7.38511 19.1667 8.35849 19.1667 9.66159C19.1667 10.965 18.8406 11.938 18.5185 12.584M18.518 6.73812L18.5185 12.584M18.5185 12.584C18.3929 12.8378 18.245 13.0799 18.0763 13.3074L18.0734 13.3112C18.0261 13.3738 17.9764 13.4346 17.9245 13.4935L17.9137 13.5098L17.8784 13.545L17.7647 13.6583L18.0007 13.8947L18.0612 13.8344L18.0624 13.832L18.1199 13.7746L18.1224 13.7721L18.1226 13.7719L18.1291 13.7654L18.1291 13.7654L18.1381 13.7564L18.1841 13.705C18.2222 13.6614 18.2766 13.5956 18.342 13.5087L18.7413 13.8096L18.342 13.5087C18.4715 13.3369 18.6433 13.0771 18.8158 12.7334L18.5185 12.584ZM11.3313 17.8337C11.3019 17.8334 11.2732 17.8252 11.2479 17.8102L11.3313 17.8337Z" stroke="#A0A0A0" fill="url(#paint0_linear_4690_345)"/>
                    <motion.g
                        animate={{
                            opacity: active === 'sound' ? 0 : 1
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <motion.path 
                            className="duration-[0.5s]" 
                            d="M11.4153 1.52222L11.4145 1.52173C11.3888 1.50715 11.3597 1.49966 11.3302 1.50001C11.3007 1.50036 11.2718 1.50855 11.2465 1.52373L4.73985 5.42637L4.62112 5.49759H4.48267H2C1.60235 5.49759 1.22097 5.65548 0.939693 5.93657C0.658456 6.21762 0.500309 6.59883 0.5 6.99642V12.3336C0.5 12.7314 0.658035 13.1129 0.93934 13.3942L0.585786 13.7478L0.93934 13.3942C1.22064 13.6756 1.60218 13.8336 2 13.8336H4.48267H4.62118L4.73994 13.9049L11.2477 17.81L11.4153 1.52222ZM11.4153 1.52222C11.441 1.53673 11.4624 1.5578 11.4773 1.58328C11.4921 1.60875 11.5 1.63772 11.5 1.66721V17.6669V17.667M11.4153 1.52222L11.5 17.667M11.5 17.667C11.5 17.6965 11.4922 17.7255 11.4773 17.751C11.4625 17.7764 11.4412 17.7975 11.4155 17.8121L11.662 18.2471M11.5 17.667L11.662 18.2471M11.662 18.2471L11.4155 17.8121C11.3899 17.8266 11.3608 17.8341 11.3313 17.8337M11.662 18.2471L11.3313 17.8337M17.8819 5.54681L17.7639 5.66475L17.8442 5.7452L17.8579 5.75435L17.8993 5.79993L17.926 5.82926L17.9348 5.83894L17.9431 5.84906C18.1672 6.12311 18.36 6.42131 18.518 6.73812M17.8819 5.54681L18.5182 6.73852C18.5181 6.73839 18.518 6.73825 18.518 6.73812M17.8819 5.54681L18.3536 6.01781L18.3541 6.01731L18.4324 5.93891C18.5755 6.14513 18.7032 6.36171 18.8143 6.5869L18.8156 6.58951C19.1596 7.27619 19.5 8.3 19.5 9.66159C19.5 11.0225 19.1586 12.0475 18.8158 12.7333L17.8819 5.54681ZM18.518 6.73812C18.8421 7.38511 19.1667 8.35849 19.1667 9.66159C19.1667 10.965 18.8406 11.938 18.5185 12.584M18.518 6.73812L18.5185 12.584M18.5185 12.584C18.3929 12.8378 18.245 13.0799 18.0763 13.3074L18.0734 13.3112C18.0261 13.3738 17.9764 13.4346 17.9245 13.4935L17.9137 13.5098L17.8784 13.545L17.7647 13.6583L18.0007 13.8947L18.0612 13.8344L18.0624 13.832L18.1199 13.7746L18.1224 13.7721L18.1226 13.7719L18.1291 13.7654L18.1291 13.7654L18.1381 13.7564L18.1841 13.705C18.2222 13.6614 18.2766 13.5956 18.342 13.5087L18.7413 13.8096L18.342 13.5087C18.4715 13.3369 18.6433 13.0771 18.8158 12.7334L18.5185 12.584ZM11.3313 17.8337C11.3019 17.8334 11.2732 17.8252 11.2479 17.8102L11.3313 17.8337Z" 
                            stroke="#A0A0A0" 
                            fill="#1E1E1E"
                        />
                    </motion.g>
                </svg>
                <span className="text-[0.75rem] text-gray-border font-[500]">Sound</span>
            </motion.div>
            <div className='w-[1px] h-[1.5rem] bg-gray-border'/>

            <motion.div 
                className="flex items-center gap-[0.5rem] cursor-pointer"
                onClick={() => setActive('mute')}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="size-[1.25rem]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="duration-[0.5s]" d="M11.5 1.99981V1.99971C11.5 1.97022 11.4922 1.94126 11.4773 1.91578C11.4625 1.8903 11.4412 1.86921 11.4155 1.85467C11.3899 1.84013 11.3608 1.83266 11.3313 1.83302C11.3019 1.83338 11.2731 1.84152 11.2478 1.85662L11.5 1.99981ZM11.5 1.99981L11.5 17.9998L11.5 18.0005C11.5 18.0301 11.4922 18.0591 11.4774 18.0846L11.9095 18.3362L11.4774 18.0846C11.4625 18.1101 11.4411 18.1313 11.4154 18.1458C11.3897 18.1604 11.3606 18.1678 11.3311 18.1674C11.3015 18.167 11.2726 18.1588 11.2473 18.1435L11.2466 18.1431L4.73998 14.2378L4.6212 14.1665H4.48267H2C1.16969 14.1665 0.5 13.4959 0.5 12.6665V7.33048C0.5 6.50017 1.17059 5.83048 2 5.83048H4.48267H4.62109L4.73981 5.75929L11.2477 1.85671L11.5 1.99981ZM17.2571 9.64093L16.9038 9.99423L17.2569 10.3478L18.7865 11.8796L18.5508 12.1152L17.0203 10.5837L16.6669 10.23L16.3132 10.5835L14.7815 12.1142L14.5459 11.8786L16.0774 10.3482L16.4314 9.99448L16.0774 9.6408L14.5459 8.11036L14.7815 7.8748L16.3132 9.40549L16.6665 9.75855L17.02 9.40562L18.5528 7.87492L18.7878 8.11023L17.2571 9.64093Z" stroke="#A0A0A0" fill="url(#paint0_linear_4690_345)"/>
                    <motion.g
                        animate={{
                            opacity: active === 'mute' ? 0 : 1
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <motion.path 
                            className="duration-[0.5s]" 
                            d="M11.5 1.99981V1.99971C11.5 1.97022 11.4922 1.94126 11.4773 1.91578C11.4625 1.8903 11.4412 1.86921 11.4155 1.85467C11.3899 1.84013 11.3608 1.83266 11.3313 1.83302C11.3019 1.83338 11.2731 1.84152 11.2478 1.85662L11.5 1.99981ZM11.5 1.99981L11.5 17.9998L11.5 18.0005C11.5 18.0301 11.4922 18.0591 11.4774 18.0846L11.9095 18.3362L11.4774 18.0846C11.4625 18.1101 11.4411 18.1313 11.4154 18.1458C11.3897 18.1604 11.3606 18.1678 11.3311 18.1674C11.3015 18.167 11.2726 18.1588 11.2473 18.1435L11.2466 18.1431L4.73998 14.2378L4.6212 14.1665H4.48267H2C1.16969 14.1665 0.5 13.4959 0.5 12.6665V7.33048C0.5 6.50017 1.17059 5.83048 2 5.83048H4.48267H4.62109L4.73981 5.75929L11.2477 1.85671L11.5 1.99981ZM17.2571 9.64093L16.9038 9.99423L17.2569 10.3478L18.7865 11.8796L18.5508 12.1152L17.0203 10.5837L16.6669 10.23L16.3132 10.5835L14.7815 12.1142L14.5459 11.8786L16.0774 10.3482L16.4314 9.99448L16.0774 9.6408L14.5459 8.11036L14.7815 7.8748L16.3132 9.40549L16.6665 9.75855L17.02 9.40562L18.5528 7.87492L18.7878 8.11023L17.2571 9.64093Z" 
                            stroke="#A0A0A0" 
                            fill="#1E1E1E"
                        />
                    </motion.g>
                </svg>
                <span className="text-[0.75rem] text-gray-border font-[500]">Muted</span>
            </motion.div>
            <div className='w-[1px] h-[1.5rem] bg-gray-border'/>

            <motion.div 
                className="flex items-center gap-[0.5rem] cursor-pointer"
                onClick={() => setActive('hide')}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="size-[1.25rem]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4690_345)">
                        <path d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z"/>
                        <path className="duration-[0.5s]" d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z" fill="url(#paint0_linear_4690_345)"/>
                        <path d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z" stroke="#F1F1F1"/>
                    </g>
                    <motion.g 
                        clip-path="url(#clip0_4690_346)"
                        animate={{
                            opacity: active === 'hide' ? 0 : 1
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <path d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z"/>
                        <path className="duration-[0.5s]" d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z" fill="#1E1E1E"/>
                        <path d="M1.16679 0.701363L18.4551 17.7789L18.0075 18.2207L15.8672 16.1075L15.7211 15.9633H15.5159H2.225V15.7712L3.90168 14.1158L4.0504 13.969V13.76V8.35331C4.0504 7.41166 4.29315 6.47497 4.74761 5.63576L4.92638 5.30563L4.65922 5.04186L0.713083 1.14581L1.16679 0.701363ZM11.2647 2.30685V2.68154L11.6243 2.78674C14.1244 3.5181 15.8282 5.78454 15.8282 8.35331V11.4847L7.34967 3.13722C7.64113 2.99444 7.94439 2.87702 8.25374 2.78689L8.61389 2.68197V2.30685V2.04553C8.61389 1.70223 8.75196 1.37169 8.99982 1.12696C9.24791 0.88203 9.58572 0.7433 9.93928 0.7433C10.2928 0.7433 10.6307 0.88203 10.8787 1.12696C11.1266 1.37169 11.2647 1.70223 11.2647 2.04553V2.30685ZM10.8787 18.283C10.6307 18.5279 10.2928 18.6667 9.93928 18.6667C9.58572 18.6667 9.24791 18.5279 8.99982 18.283C8.87688 18.1616 8.78096 18.0191 8.71549 17.8644H11.1631C11.0976 18.0191 11.0017 18.1616 10.8787 18.283Z" stroke="#A0A0A0"/>
                    </motion.g>
                    <defs>
                        <linearGradient id="paint0_linear_4690_345" x1="-3.35417" y1="-3.33333" x2="22.2046" y2="21.9184" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FDA2FF"/>
                        <stop offset="0.505208" stop-color="#782AD5"/>
                        <stop offset="1" stop-color="#52B8FF"/>
                        </linearGradient>
                        <clipPath id="clip0_4690_345">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span className="text-[0.75rem] text-gray-border font-[500]">Hide</span>
            </motion.div>

        </div>
    </div>
  )
}

export default Notifications