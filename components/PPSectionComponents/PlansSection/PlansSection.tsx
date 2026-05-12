'use client'

import { motion } from "framer-motion"
import { useState } from "react"

import PlansSectionTitle from "./PlansSectionTitle"
import FreeCard from "./FreeCard"
import PremiumCard from "./PremiumCard"

const PlansSection:React.FC = () => {

  const [selectedPlan, setSelectedPlan] = useState({
    plan: 'annually',
    price: 1.49
  })

  return (
    <div className='mt-[3.5rem]'>
      <PlansSectionTitle />

      <div className="mt-[2rem] w-full flex justify-center">
          <div className="flex w-[25.5rem] h-[4rem] p-[0.5rem] bg-card-bg border border-gray-border rounded-[1.5rem]">
            <div 
              className="cursor-pointer w-full rounded-[1rem] flex justify-center items-center text-[1.125rem] relative"
              onClick={() => {
                setSelectedPlan({
                  plan: 'annually',
                  price: 1.49
                })
              }}
            >
              {
                selectedPlan.plan === 'annually' && (
                <motion.div
                  layout
                  layoutId="selectedPlan"
                  className="inset-0 absolute z-[0] rounded-[1rem]"
                  style={{
                    background: 'linear-gradient(93deg, #FDA2FF -64.38%, #782AD5 48.4%, #52B8FF 158.85%), #F1F1F1'
                  }}
                />
                )
              }
              <span className={`z-[1] ${selectedPlan.plan === 'annually' ? ' text-custom-white ' : ' text-gray-border '} transition-colors duration-[0.5s] font-[500]`}>Annually (Save 60%)</span>
            </div>
            <div 
              className="cursor-pointer w-full rounded-[1rem] flex justify-center items-center text-[1.125rem] relative"
              onClick={() => {
                setSelectedPlan({
                  plan: 'monthly',
                  price: 2.49
                })
              }}
            >
              {
                selectedPlan.plan === 'monthly' && (
                <motion.div
                  layout
                  layoutId="selectedPlan"
                  className="inset-0 absolute z-[0] rounded-[1rem]"
                  style={{
                    background: 'linear-gradient(93deg, #FDA2FF -64.38%, #782AD5 48.4%, #52B8FF 158.85%), #F1F1F1'
                  }}
                />
                )
              }
              <span className={`z-[1] ${selectedPlan.plan === 'monthly' ? ' text-custom-white ' : ' text-gray-border '} transition-colors duration-[0.5s] font-[500]`}>Monthly</span>
            </div>
          </div>
        </div>

      <div className="flex gap-[3rem] mt-[3.75rem] justify-center items-end">
        <FreeCard />
        <PremiumCard plan={selectedPlan.plan} price={selectedPlan.price}/>
      </div>
    </div>
  )
}

export default PlansSection