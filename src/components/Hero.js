import { Tick } from '../icons';
import SignupForm from './SignupForm';

const outcomes = [
    'How to buid this landing page with Next.js',
    'How to create API endpoint and integrate with ConvertKit API',
    'How to use React Hook Form and TailwindCSS',
];

const CommingSoonBadge = () => (
    <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
        Coming Soon!
    </span>
)

const Hero = () => {
    return (
        <div className='border border-gray-200 md:flex md:flex-row'>
            <div className='bg-gray-100 text-center flex md:w-1/3'>
                <img
                    className='mx-auto object-contain'
                    src='/assets/img_subscription-cover.png'
                    alt='Cover image'
                />
            </div>
            <div className='px-4 py-8 md:px-8 self-center md:w-2/3'>
                <h2 className='font-bold text-2xl mb-3'>What you'll learn</h2>
                {outcomes && (
                    <ul className='mb-6'>
                        {outcomes.map((item, index) => {
                            return (
                                <li key={index} className='text-gray-700 mb-2 flex'>
                                    <span className="self-center mr-2">
                                        <Tick className="h-4" />
                                    </span>
                                    <span className="opacity-75">
                                        {item}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <CommingSoonBadge />
                <SignupForm title="Leave your email below, to be  notified when your signup is completed" />
            </div>
        </div>
    );
};

export default Hero;
