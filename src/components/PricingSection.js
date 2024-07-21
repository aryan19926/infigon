import React, { useState } from 'react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const plans = [
    {
      name: 'Silver',
      price: 50,
      features: [
        'No Discount',
        'Basic Support',
        'Ads Banner Free',
        'Design Style',
        'Component Library',
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
    },
    {
      name: 'Gold',
      price: 100,
      features: [
        'No Discount',
        'Basic Support',
        'Ads Banner Free',
        'Design Style',
        'Component Library',
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 150,
      features: [
        'No Discount',
        'Basic Support',
        'Ads Banner Free',
        'Design Style',
        'Component Library',
        'All limited links',
        'Own analytics platform',
        'Chat support',
        'Optimize hashtags',
        'Unlimited users',
      ],
    },
  ];

  return (
    <section className="bg-[#051139] text-white p-8 text-center h-[1100px]">
      <h1 className="text-6xl md:text-5xl font-bold pt-11 pb-7">Pricing Plans</h1>
      <p className='text-sm text-[#FFFFFF]'>Coca landing page UI Kit no credit card required. All plans come with</p>
        <p className='text-sm text-[#FFFFFF]'> a free, 14 day trial of our Premium features.</p>
      <div className="flex justify-center mb-8 pt-11">
        <button
          className={`px-4 py-2  ${billingCycle === 'Monthly' ? 'bg-white text-blue-900' : 'bg-blue-800 text-white'}`}
          onClick={() => handleBillingCycleChange('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 ${billingCycle === 'Yearly' ? 'bg-white text-blue-900' : 'bg-blue-800 text-white'}`}
          onClick={() => handleBillingCycleChange('Yearly')}
        >
          Yearly
        </button>
      </div>
      <div className="flex justify-around pt-11 rounded-lg">
        {plans.map((plan, index) => (
          <div key={index} className={`relative w-1/4 p-4  rounded-lg ${plan.popular ? 'bg-[#515DEF] scale-105' : 'bg-[#0D1849]'}`}>
            {plan.popular && (
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-[#FFD88D] font-bold rounded-lg w-[130px] h-[40px] text-center shadow-lg">
                <p className='text-xs p-2'>MOST POPULAR</p>
              </div>
            )}
            <h3 className="text-sm font-semibold mt-11 text-left">{plan.name}</h3>
            <p className="mt-2 text-left text-4xl">${plan.price}<span className='text-sm'>/month</span></p>
            <hr className='m-4'></hr>
            <ul className="mt-4 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <span className="inline-block w-4 h-4 mr-2 bg-white rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-4 px-4 py-2 bg-white text-blue-900 rounded">Choose plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
