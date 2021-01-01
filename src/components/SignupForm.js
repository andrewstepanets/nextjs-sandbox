import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Cross } from '../icons'

const ErrorMessage = ({ message }) => (
    <p className="text-sm px-3 mt-1 text-red-500 inline-block">
        {message}
    </p>
)
const SuccessMessage = ({ handleReset }) => (
    <p className="text-sm p-3 bg-green-100 border rounded-md border-success text-success inline-flex">
        <span>Success! Check your inbox and confirm your email</span>
        <span className="self-center flex mr-1">
            <button
                onClick={() => handleReset()}
                className="bg-success text-white rounded-full h-4 w-4 mt-auto ml-1 hover:bg-red-500 transition-colors duration-200">
                <Cross className="h-2 w-2 mx-auto" />
            </button>
        </span>
    </p>
)
const SignupForm = ({ title }) => {

    const { handleSubmit, register, errors } = useForm();

    // const isLoading = false;

    const subscribe = async ({ email }) => {
        const res = await fetch(`api/subscribe?email=${email}`);
        if (!res.ok) { throw "There was an error subscribing to the list" }
    }

    // useMutation to look at isLoading

    const { mutate, isSuccess, isLoading, isError, error, reset } = useMutation((data) => subscribe(data)
    );

    const onSubmit = data => mutate(data)

    const formClass = classNames({
        "flex items-center border rounded-md  p-1 focus-within:border-blue-500 focus-within:ring-4": true,
        "border-gray-300": !isLoading,
        "bg-gray-100 border-red-200": isLoading
    })

    const inputClass = classNames({
        "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none": true,
        "opacity-50 cursor-not-allowed": isLoading
    })

    const btnClass = classNames({
        "flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded": true,
        "opacity-50 cursor-not-allowed": isLoading
    })

    if (isSuccess) {
        return <SuccessMessage handleReset={reset} />
    }

    return (
        <div>
            <p className="p-1 mb-2">{title}</p>
            <form className="max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className={formClass}>
                    <input
                        className={inputClass}
                        disabled={isLoading}
                        type="text"
                        name="email"
                        ref={register({
                            required: "Email is required.",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Please enter a valid email."
                            },
                        })}
                        placeholder="Enter Your Name"
                        aria-label="Full name"
                    />

                    <button className={btnClass} disabled={isLoading} type="submit">
                        {!isLoading ? "Sign Up" : "Processing"}
                    </button>
                </div>
                {errors?.email && <ErrorMessage message={errors.email.message} />}
                {isError && <ErrorMessage message={error} />}
            </form>
        </div>
    )
}

export default SignupForm;