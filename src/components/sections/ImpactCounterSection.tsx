
import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number;
  label: string;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ targetNumber, label, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const increment = Math.ceil(targetNumber / (duration / 50)); // Update every 50ms
  
  useEffect(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => {
        const nextCount = Math.min(count + increment, targetNumber);
        setCount(nextCount);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [count, targetNumber, increment]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-charity-green mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const ImpactCounterSection = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('impact-counter');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-charity-dark text-white" id="impact-counter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">OUR IMPACT</h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Together with our supporters and partners, we're creating lasting change. Here's the impact we've made so far.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {isInView && (
            <>
              <Counter targetNumber={50000} label="People Helped" duration={2000} />
              <Counter targetNumber={120} label="Communities Served" duration={2000} />
              <Counter targetNumber={75} label="Water Wells Built" duration={2000} />
              <Counter targetNumber={5000000} label="Funds Raised" duration={2000} suffix="$" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounterSection;
