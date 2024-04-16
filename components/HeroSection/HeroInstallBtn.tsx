'use client'
import { useState, useEffect } from "react"
import GradientButton from "../GradientButton"


const HeroInstallBtn = () => {

    const [browser, setBrowser] = useState("")

    useEffect(() => {
        const userAgent = navigator.userAgent
        let browserName = "Your Browser"
        if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
            browserName = "Opera"
        } else if (userAgent.indexOf("Chrome") !== -1) {
            browserName = "Chrome"
        } else if (userAgent.indexOf("Safari") !== -1) {
            browserName = "Safari"
        } else if (userAgent.indexOf("Firefox") !== -1) {
            browserName = "Firefox"
        } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) {
            browserName = "Internet Explorer"
        } else if (userAgent.indexOf("Edge") !== -1) {
            browserName = "Edge"
        }

        setBrowser(browserName)
    }, [])

  return (
    <GradientButton text={`ADD TO ${browser.toUpperCase()} - IT'S FREE`} route="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho" target="_blank"/>
  )
}

export default HeroInstallBtn