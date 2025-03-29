
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

const DonationCalculatorSection = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [frequency, setFrequency] = useState('monthly');
  
  const impactItems = [
    {
      amount: 25,
      description: "Provide clean water to a family for a month"
    },
    {
      amount: 50,
      description: "Supply educational materials for a classroom"
    },
    {
      amount: 100,
      description: "Fund a teacher's salary for two weeks"
    },
    {
      amount: 250,
      description: "Build a sustainable garden for a community"
    },
    {
      amount: 500,
      description: "Construct a water well serving 100 people"
    }
  ];

  const getImpactDescription = (amount: number) => {
    for (let i = impactItems.length - 1; i >= 0; i--) {
      if (amount >= impactItems[i].amount) {
        return impactItems[i].description;
      }
    }
    return "Help support our mission";
  };
  
  const handleSliderChange = (value: number[]) => {
    setDonationAmount(value[0]);
  };
  
  const handlePresetClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const annualImpact = frequency === 'monthly' ? donationAmount * 12 : donationAmount;

  return (
    <section className="py-20 bg-charity-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">MAKE A DIFFERENCE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation can change lives. See the impact your support can make.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6">How much would you like to donate?</h3>
              
              <div className="flex justify-between mb-4">
                <Button 
                  variant={donationAmount === 25 ? "default" : "outline"}
                  className={donationAmount === 25 ? "btn-charity" : ""}
                  onClick={() => handlePresetClick(25)}
                >
                  $25
                </Button>
                <Button 
                  variant={donationAmount === 50 ? "default" : "outline"}
                  className={donationAmount === 50 ? "btn-charity" : ""}
                  onClick={() => handlePresetClick(50)}
                >
                  $50
                </Button>
                <Button 
                  variant={donationAmount === 100 ? "default" : "outline"}
                  className={donationAmount === 100 ? "btn-charity" : ""}
                  onClick={() => handlePresetClick(100)}
                >
                  $100
                </Button>
                <Button 
                  variant={donationAmount === 250 ? "default" : "outline"}
                  className={donationAmount === 250 ? "btn-charity" : ""}
                  onClick={() => handlePresetClick(250)}
                >
                  $250
                </Button>
                <Button 
                  variant={donationAmount === 500 ? "default" : "outline"}
                  className={donationAmount === 500 ? "btn-charity" : ""}
                  onClick={() => handlePresetClick(500)}
                >
                  $500
                </Button>
              </div>
              
              <div className="mb-6">
                <Slider 
                  value={[donationAmount]} 
                  min={5} 
                  max={1000}
                  step={5}
                  onValueChange={handleSliderChange} 
                  className="my-6"
                />
                <div className="flex justify-between">
                  <span className="text-gray-600">$5</span>
                  <span className="text-2xl font-bold text-charity-green">${donationAmount}</span>
                  <span className="text-gray-600">$1000</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mb-8">
                <Button 
                  variant={frequency === 'once' ? "default" : "outline"}
                  className={frequency === 'once' ? "btn-charity" : ""}
                  onClick={() => setFrequency('once')}
                >
                  One Time
                </Button>
                <Button 
                  variant={frequency === 'monthly' ? "default" : "outline"}
                  className={frequency === 'monthly' ? "btn-charity" : ""}
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly
                </Button>
              </div>
            </div>
            
            <div className="bg-charity-light p-6 rounded-lg mb-8">
              <h4 className="font-bold mb-2">Your Impact</h4>
              <div className="text-lg">{getImpactDescription(donationAmount)}</div>
              {frequency === 'monthly' && (
                <div className="text-sm text-gray-600 mt-2">
                  That's ${annualImpact} per year, making an even bigger impact!
                </div>
              )}
            </div>
            
            <Button className="btn-charity w-full text-lg py-6">
              Donate ${donationAmount} {frequency === 'monthly' ? 'Monthly' : 'Now'}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationCalculatorSection;
