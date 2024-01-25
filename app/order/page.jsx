'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [user, setUser] = useState({
        companyName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/setCustomer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                Cookies.set('user', JSON.stringify(user));
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Company Information</h1>
                <form className="mt-8 space-y-6" onSubmit={loginUser}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
                                Company Name
                            </label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                value={user.companyName}
                                onChange={(e) => setUser({ ...user, companyName: e.target.value })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-name">
                                Contact Name
                            </label>
                            <input
                                type="text"
                                placeholder="Contact Name"
                                value={user.contactName}
                                onChange={(e) => setUser({ ...user, contactName: e.target.value })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-email">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                placeholder="Contact Email"
                                value={user.contactEmail}
                                onChange={(e) => setUser({ ...user, contactEmail: e.target.value })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="contact-phone">
                                Contact Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="Contact Phone"
                                value={user.contactPhone}
                                onChange={(e) => setUser({ ...user, contactPhone: e.target.value })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;