"use client"
import CountUp from 'react-countup';


const Counter = ({ havePrefix, endValue = 0 }) => {
    return (
        <div>
            {havePrefix ?
                <CountUp start={1} end={endValue} delay={0} prefix="৳ " duration={3} suffix="+">
                    {({ countUpRef }) => (
                        <div>
                            <span className='font-oswald text-3xl font-bold' ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
                :
                <CountUp start={1} end={endValue} delay={0} duration={3} suffix="+">
                    {({ countUpRef }) => (
                        <div>
                            <span className='font-oswald text-3xl font-bold' ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            }

        </div>
    );
};

export default Counter;