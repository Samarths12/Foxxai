import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaSmile, FaPhone } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, orderBy, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtFGTT1WOfvcjr2UfHDOMj_Kg1qwqzORg",
  authDomain: "convolabsqueue.firebaseapp.com",
  projectId: "convolabsqueue",
  storageBucket: "convolabsqueue.appspot.com",
  messagingSenderId: "987301055298",
  appId: "1:987301055298:web:788a79263d5f92616016db",
  measurementId: "G-KXXJGCLP88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ConversationalAuth = () => {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [currentError, setCurrentError] = useState('');
  const [queuePosition, setQueuePosition] = useState(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      text: "Hi there! 👋 What's your name?",
      field: 'name',
      icon: <FaUser className="text-purple-500" size={24} />,
      validation: (value) => value.length >= 2 ? '' : 'Please enter your full name'
    },
    {
      text: "Great to meet you! What's your email address?",
      field: 'email',
      icon: <FaEnvelope className="text-purple-500" size={24} />,
      validation: (value) => /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email'
    },
    {
      text: "Almost done! What's your mobile number?",
      field: 'mobile',
      icon: <FaPhone className="text-purple-500" size={24} />,
      validation: (value) => /^\d{10}$/.test(value) ? '' : 'Please enter a valid 10-digit mobile number'
    }
  ];

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !currentError) {
      handleNext();
    }
  };

  const handleNext = async () => {
    const currentQuestion = questions[step];
    const validationError = currentQuestion.validation(userData[currentQuestion.field]);
    
    if (validationError) {
      setCurrentError(validationError);
      return;
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
      setCurrentError('');
    } else {
      try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );

        // Add user to Firestore queue
        const queueRef = collection(db, 'queue');
        await addDoc(queueRef, {
          userId: userCredential.user.uid,
          name: userData.name,
          email: userData.email,
          mobile: userData.mobile,
          timestamp: new Date().toISOString(),
          status: 'waiting'
        });

        // Calculate queue position
        const q = query(
          queueRef,
          where('status', '==', 'waiting'),
          orderBy('timestamp', 'asc')
        );
        
        const snapshot = await getDocs(q);
        const position = snapshot.docs.findIndex(doc => doc.data().email === userData.email) + 1;
        
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', userData.email);
        window.dispatchEvent(new Event('storage'));

        // Update state to show success message
        setQueuePosition(position);
        setMessage(`🎉 Welcome aboard, ${userData.name}!`);
        setRegistrationComplete(true);
        setShowSuccessMessage(true);

      } catch (error) {
        console.error('Error during registration:', error);
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, [questions[step].field]: value });
    setCurrentError('');
  };

  const progress = ((step + 1) / questions.length) * 100;

  const Header = () => (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Queue Demo</h1>
        {registrationComplete && (
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform transition hover:scale-105"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );

  const SuccessMessage = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <FaSmile className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-purple-700 mb-4">{message}</h3>
        <div className="bg-purple-50 rounded-lg p-6 mb-6 animate-slide-up">
          <p className="text-lg text-gray-700 mb-4">
            Thank you for registering with us, <span className="font-semibold">{userData.name}</span>! 🎉
          </p>
          {queuePosition && (
            <>
              <p className="text-lg font-semibold text-gray-700 mb-2">Your position in queue:</p>
              <p className="text-5xl font-bold text-purple-500 mb-4 animate-pulse">#{queuePosition}</p>
            </>
          )}
          <p className="text-gray-600 mb-2">We've received your registration details.</p>
          <p className="text-gray-600 mb-4">Please wait patiently while we process your request.</p>
          <p className="text-sm text-purple-600">You'll be notified as soon as it's your turn!</p>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center space-x-2 mx-auto animate-fade-in"
        >
          <span>Go to Dashboard</span>
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-purple-100 to-purple-200 pt-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-300 transform transition-all duration-500">
          <div className="space-y-6">
            <h2 className="text-3xl text-center text-purple-700 font-bold mb-8">
              Join the Waitlist
            </h2>
            
            {!registrationComplete && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {!registrationComplete && (
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  {questions[step].icon}
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 mb-4">{questions[step].text}</p>
                    <input
                      type={questions[step].field.includes('password') ? 'password' : 'text'}
                      value={userData[questions[step].field]}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                      placeholder={`Enter your ${questions[step].field}`}
                      autoFocus
                    />
                    {currentError && (
                      <p className="text-red-500 text-sm mt-2">{currentError}</p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Continue</span>
                  <FaArrowRight size={16} />
                </button>
              </div>
            )}

            {showSuccessMessage && <SuccessMessage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationalAuth;