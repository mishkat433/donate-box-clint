"use client"
import CountUp from 'react-countup';


const Counter = ({ havePrefix }: { havePrefix: boolean }) => {
    return (
        <div>
            {havePrefix ?
                <CountUp start={1} end={1000} delay={0} prefix="৳ " duration={3} suffix="+">
                    {({ countUpRef }) => (
                        <div>
                            <span className='font-oswald text-2xl font-bold' ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
                :
                <CountUp start={1} end={1000} delay={0} duration={3} suffix="+">
                    {({ countUpRef }) => (
                        <div>
                            <span className='font-oswald text-2xl font-bold' ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            }

        </div>
    );
};

export default Counter;