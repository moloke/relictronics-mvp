import React, { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
    sendPasswordResetEmail // New import for password reset
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// Helper for action code settings
const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true
};

const Auth = ({ setUser }) => {
    // State management
    const [isLogin, setIsLogin] = useState(true);
    const [isPasswordless, setIsPasswordless] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    // Effect for handling email link sign-in
    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let emailForSignIn = window.localStorage.getItem('emailForSignIn');
            if (!emailForSignIn) {
                emailForSignIn = window.prompt('Please provide your email for confirmation');
            }

            signInWithEmailLink(auth, emailForSignIn, window.location.href)
                .then(async (result) => {
                    window.localStorage.removeItem('emailForSignIn');
                    const user = result.user;
                    const userRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(userRef);

                    if (!docSnap.exists()) {
                        const userData = {
                            email: user.email,
                            userType: 'customer',
                            createdAt: new Date().toISOString(),
                            lastLogin: new Date().toISOString()
                        };
                        await setDoc(userRef, userData);
                    } else {
                        await setDoc(userRef, { lastLogin: new Date().toISOString() }, { merge: true });
                    }
                    setUser(user);
                })
                .catch((err) => {
                    console.error('Error signing in with email link:', err);
                    setError('Failed to sign in with magic link. The link may have expired.');
                });
        }
    }, [setUser]);

    // Clear messages when switching forms
    useEffect(() => {
        setError('');
        setMessage('');
    }, [isLogin, isPasswordless]);


    // Handler for email/password submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!email) {
            setError('Email is required.');
            return;
        }
        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            let userCredential;
            if (isLogin) {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                const userRef = doc(db, 'users', userCredential.user.uid);
                await setDoc(userRef, { lastLogin: new Date().toISOString() }, { merge: true });

            } else {
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const userData = {
                    email: userCredential.user.email,
                    userType: 'customer',
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString()
                };
                await setDoc(doc(db, 'users', userCredential.user.uid), userData);
            }
            setUser(userCredential.user);
        } catch (err) {
            let friendlyMessage = 'An authentication error occurred. Please try again.';
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                friendlyMessage = 'Invalid credentials. Please check your email and password.';
            } else if (err.code === 'auth/email-already-in-use') {
                friendlyMessage = 'This email is already in use. Please sign in instead.';
            }
             else if (err.code === 'auth/weak-password') {
                friendlyMessage = 'Your password must be at least 6 characters long.';
            }
            setError(friendlyMessage);
        }
    };

    // Handler for passwordless (magic link) sign-in
    const handlePasswordlessSignIn = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email to receive a magic link.');
            return;
        }
        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            setMessage('Magic link sent! Check your email to sign in.');
        } catch (err) {
            setError('Failed to send magic link. Please try again.');
        }
    };

    // Handler for the "Forgot Password" link
    const handleForgotPassword = async () => {
        if (!email) {
            setError('Please enter your email address to reset your password.');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent! Please check your inbox.');
        } catch (err) {
            setError('Failed to send password reset email. Please ensure the email is correct.');
        }
    };

    // Main form submission logic
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isPasswordless) {
            handlePasswordlessSignIn(e);
        } else {
            handleSubmit(e);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo and Brand Section */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="logo-text text-[3.5rem]">R</div>
                        <h1 className="text-[3.5rem] font-bold text-slate-800">elictronics</h1>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Giving Tech a Second Life</p>
                </div>

                {/* Authentication Card */}
                <div className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
                    <div className="p-6 space-y-1">
                        <h2 className="text-2xl font-semibold text-center text-slate-800">
                             {isLogin ? 'Welcome Back' : 'Create an Account'}
                        </h2>
                        <p className="text-center text-slate-600 text-sm">
                           {isLogin ? 'Sign in to connect with repair professionals' : 'Join our community to get started'}
                        </p>
                    </div>
                    <div className="p-6 pt-0 space-y-6">
                        {/* Error and Message Display */}
                        {error && <p className="bg-red-100 text-red-700 text-center text-sm p-3 rounded-lg">{error}</p>}
                        {message && <p className="bg-green-100 text-green-700 text-center text-sm p-3 rounded-lg">{message}</p>}

                        {/* Password / Passwordless Toggle */}
                         <div className="mb-4 flex justify-center space-x-2 bg-slate-100 p-1 rounded-lg">
                            <button
                                type="button"
                                className={`w-full px-4 py-2 rounded-md text-sm font-semibold transition-colors ${!isPasswordless ? 'bg-white text-emerald-700 shadow-sm' : 'bg-transparent text-slate-600'}`}
                                onClick={() => setIsPasswordless(false)}
                            >
                                Password
                            </button>
                            <button
                                type="button"
                                className={`w-full px-4 py-2 rounded-md text-sm font-semibold transition-colors ${isPasswordless ? 'bg-white text-emerald-700 shadow-sm' : 'bg-transparent text-slate-600'}`}
                                onClick={() => setIsPasswordless(true)}
                            >
                                Magic Link
                            </button>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-slate-700 font-medium text-sm">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12 w-full p-3"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            {!isPasswordless && (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-slate-700 font-medium text-sm">Password</label>
                                             {isLogin && (
                                                <button
                                                    type="button"
                                                    onClick={handleForgotPassword}
                                                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                                >
                                                    Forgot Password?
                                                </button>
                                            )}
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12 w-full p-3"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    {!isLogin && (
                                         <div className="space-y-2">
                                            <label htmlFor="confirm-password" className="text-slate-700 font-medium text-sm">Confirm Password</label>
                                            <input
                                                id="confirm-password"
                                                type="password"
                                                placeholder="Confirm your password"
                                                className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-12 w-full p-3"
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                            
                            <button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                {isPasswordless ? 'Send Magic Link' : (isLogin ? 'Sign In' : 'Create Account')}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-slate-500">
                                    {isLogin ? 'New to Relictronics?' : 'Already have an account?'}
                                </span>
                            </div>
                        </div>

                        {/* Sign Up/In Toggle Button */}
                        <div>
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="w-full h-12 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 font-semibold rounded-xl transition-all duration-200 bg-transparent"
                            >
                               {isLogin ? 'Create Account' : 'Sign In'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-500">
                        By signing in, you agree to our{" "}
                        <a href="/terms" className="text-emerald-600 hover:underline">Terms of Service</a>
                        {" "}and{" "}
                        <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;