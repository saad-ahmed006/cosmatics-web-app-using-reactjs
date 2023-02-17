import React from 'react'
import Logo from '../assets/logo.png'
import '../Styles/Footer.css'
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillMessage,  } from 'react-icons/ai'
import { BsTelephoneFill, BsFillPersonFill } from 'react-icons/bs'
import { GoSignIn } from 'react-icons/go'
import { FaLink } from 'react-icons/fa'


export default function Footer() {
    return (
        <div className='FooterContainer'>
            <div className='logo'>
                <img src={Logo} alt="Fiiterimg"></img>
                <span>amazon</span>
            </div>
            <div className='Contact'>
                <h3>Contact Us</h3>
                <span className='SpanFlex'>
                    <span className='icon'>{<HiLocationMarker />}</span>
                    <span>111 north avenue Orlando, FL 32801</span>
                </span>
                <span className='SpanFlex'>
                    <span className='icon'>{<BsTelephoneFill />}</span>
                    <span>352-306-4415</span>
                </span>
                <span className='SpanFlex'>
                    <span className='icon'>{<AiFillMessage />}</span>
                    <span>support@amazon.com</span>
                </span>

            </div>
            <div className='Contact'>
                <h3>Account</h3>
                <span className='SpanFlex'>
                    <span className='icon'>{<GoSignIn />}</span>
                    <span>support@amazon.com</span>
                </span>
            </div>
            <div className='Contact'>
                <h3>Campany</h3>
                <span className='SpanFlex'>
                    <span className='icon'>{<BsFillPersonFill />}</span>
                    <span>About us</span>
                </span>
            </div>
            <div className='Contact'>
                <h3>Resources</h3>

                <span className='SpanFlex'>
                    <span className='icon'>{<FaLink />}</span>
                    <span>Safety Privacy & Terms</span>
                </span>
            </div>
        </div>
    )
}
