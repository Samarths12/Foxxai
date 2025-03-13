import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineBook, AiOutlineMenu } from 'react-icons/ai';
import { FaTags, FaUser, FaBook, FaSignOutAlt, FaSearch, FaMicrophone, FaTimes, FaEdit, FaSave, FaCreditCard, FaPhone, FaCalendar } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import logo from './logo.jpg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

// Audio Visualization Component
const AudioWave = ({ analyser, isRecording }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = 60;

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!isRecording) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate average amplitude
      const averageAmplitude = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;

      // Adjust the threshold and scaling for sensitivity
      const normalizedAmplitude = Math.min(Math.max((averageAmplitude - 20) / 50, 0), 1); // Lower threshold and scaling

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius * 2);
      gradient.addColorStop(0, 'rgba(79, 70, 229, 0.8)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.6)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.2)');

      // Draw outer wave
      ctx.beginPath();
      for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const amplitudeFactor = normalizedAmplitude * 20; // Reduced scaling factor
        const r = baseRadius + amplitudeFactor * Math.sin(angle * 8);
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw inner wave
      ctx.beginPath();
      for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        const amplitudeFactor = normalizedAmplitude * 10; // Reduced scaling factor
        const r = baseRadius * 0.7 + amplitudeFactor * Math.sin(angle * 8);
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    if (isRecording) draw();
    return () => animationFrameRef.current && cancelAnimationFrame(animationFrameRef.current);
  }, [analyser, isRecording]);
  return (
    <div className="flex justify-center py-2 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-b-2xl">
      <canvas ref={canvasRef} width={300} height={150} className="max-w-full" />
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const db = getFirestore();

  const [activeTab, setActiveTab] = useState('home');
  const [userName, setUserName] = useState(location.state?.userName || '');
  const [searchFocus, setSearchFocus] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const audioVisualizerRef = useRef(null);
  
  const [dashboardStats, setDashboardStats] = useState({
    activeProjects: 12,
    completedTasks: 48,
    teamAgents: 8
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(location.state?.userName || user.displayName || 'Guest');
        localStorage.setItem('isAuthenticated', 'true');
        setAuthChecked(true);
        setLoading(false);
        fetchUserData(user.uid);
      } else {
        localStorage.removeItem('isAuthenticated');
        navigate('/signin', { replace: true });
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [auth, navigate, location.state]);

  const fetchUserData = async (uid) => {
    setDataLoading(true);
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      const data = userDoc.exists() ? userDoc.data() : {};
      const userInfo = {
        name: data.name || auth.currentUser.displayName || 'Guest',
        email: auth.currentUser.email,
        phone: data.phone || '',
        photoURL: auth.currentUser.photoURL || 'https://www.instantaiprompt.com/wp-content/uploads/2023/12/simple-cartoon-from-photo.jpg',
        uid: auth.currentUser.uid,
        lastLogin: auth.currentUser.metadata.lastSignInTime,
        subscription: {
          plan: data.subscription?.plan || 'Pro',
          status: data.subscription?.status || 'active',
          nextBilling: data.subscription?.nextBilling || 'Mar 22, 2025'
        },
        billing: {
          cardType: data.billing?.cardType || 'Visa',
          lastFour: data.billing?.lastFour || '1234',
          expiry: data.billing?.expiry || '12/25'
        }
      };
      setUserData(userInfo);
      setUserName(userInfo.name);
      setDashboardStats({
        activeProjects: data.activeProjects || dashboardStats.activeProjects,
        completedTasks: data.completedTasks || dashboardStats.completedTasks,
        teamAgents: data.teamAgents || dashboardStats.teamAgents
      });
    } catch (err) {
      console.error('Firestore fetch error:', err);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-red-600 text-xl font-semibold mb-2">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!authChecked) return null;
  if (!localStorage.getItem('isAuthenticated')) return <Navigate to="/signin" replace />;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('isAuthenticated');
      navigate('/signin', { replace: true });
    } catch (err) {
      console.error('Sign out error:', err);
      setError('Failed to sign out');
    }
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const audioAnalyser = context.createAnalyser();
      const source = context.createMediaStreamSource(stream);
      
      source.connect(audioAnalyser);
      setAudioContext(context);
      setAnalyser(audioAnalyser);
      setMediaStream(stream);
      setIsRecording(true);

      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const formData = new FormData();
          formData.append("audio", event.data, "voice-input.wav");
          try {
            await fetch("/api/voice-input/", { method: "POST", body: formData });
          } catch (error) {
            console.error("Error sending audio data:", error);
          }
        }
      };
      recorder.onstart = () => setIsRecording(true);
      recorder.onstop = () => setIsRecording(false);
      recorder.start();
      setMediaRecorder(recorder);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") mediaRecorder.stop();
    if (mediaStream) mediaStream.getTracks().forEach(track => track.stop());
    if (audioContext) audioContext.close();
    setAudioContext(null);
    setAnalyser(null);
    setMediaStream(null);
    setMediaRecorder(null);
    setIsRecording(false);
  };

  const ProfileModal = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });
    const [saving, setSaving] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEdit = () => setIsEditing(true);

    const handleSave = async () => {
      if (!editedData.name.trim()) {
        setErrorMessage('Name is required');
        return;
      }
      if (editedData.phone && !/^\+?\d{10,15}$/.test(editedData.phone)) {
        setErrorMessage('Invalid phone number format');
        return;
      }

      setSaving(true);
      try {
        const userRef = doc(db, 'users', userData.uid);
        await updateDoc(userRef, {
          name: editedData.name,
          phone: editedData.phone,
        });
        setUserData(editedData);
        setUserName(editedData.name);
        setIsEditing(false);
        setErrorMessage('');
      } catch (err) {
        console.error('Error saving user data:', err);
        setErrorMessage('Failed to save changes');
      } finally {
        setSaving(false);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedData(prev => ({ ...prev, [name]: value }));
      setErrorMessage('');
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg m-4 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-blue-50">
            <h2 className="text-xl font-semibold text-gray-800">Your Profile</h2>
            <button onClick={() => setIsProfileOpen(false)} className="text-gray-500 hover:text-gray-700">
              <FaTimes size={20} />
            </button>
          </div>
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
                <img
                  src={userData?.photoURL || 'https://www.instantaiprompt.com/wp-content/uploads/2023/12/simple-cartoon-from-photo.jpg'}
                  alt="User avatar"
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-indigo-200"
                />
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedData.name}
                      onChange={handleInputChange}
                      className="w-full text-lg font-semibold text-gray-800 border-b border-gray-300 focus:border-indigo-500 outline-none"
                    />
                  ) : (
                    <h3 className="text-lg font-semibold text-gray-800">{userData?.name || 'Guest'}</h3>
                  )}
                  <p className="text-sm text-gray-600">{userData?.email || ''}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-700">Personal Details</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <FaPhone className="text-gray-500" />
                      <span className="text-gray-600">Phone</span>
                    </div>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={editedData.phone || ''}
                        onChange={handleInputChange}
                        className="text-gray-800 font-medium border-b border-gray-300 focus:border-indigo-500 outline-none bg-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    ) : (
                      <span className="text-gray-800 font-medium">{userData?.phone || 'Not provided'}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <FaCalendar className="text-gray-500" />
                      <span className="text-gray-600">Last Login</span>
                    </div>
                    <span className="text-gray-800 font-medium">
                      {userData?.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-700">Subscription</h4>
                <div className="p-4 bg-indigo-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-indigo-700 font-medium">Current Plan</span>
                    <span className="text-indigo-800 font-semibold">{userData?.subscription.plan || 'Pro'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-700 font-medium">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${userData?.subscription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {userData?.subscription.status || 'active'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-indigo-700 font-medium">Next Billing</span>
                    <span className="text-indigo-800 font-semibold">{userData?.subscription.nextBilling || 'Mar 22, 2025'}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-gray-700">Billing Information</h4>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaCreditCard className="text-gray-500" />
                    <span className="text-gray-600 font-medium">{userData?.billing.cardType || 'Visa'} ending in {userData?.billing.lastFour || '1234'}</span>
                  </div>
                  <div className="text-sm text-gray-600">Expires: {userData?.billing.expiry || '12/25'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between">
            {isEditing ? (
              <>
                <button
                  onClick={() => { setIsEditing(false); setEditedData({ ...userData }); setErrorMessage(''); }}
                  className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                  disabled={saving}
                >
                  <FaSave />
                  <span>{saving ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleEdit}
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                >
                  <FaEdit />
                  <span>Edit Profile</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const navItems = [
    { id: 'home', icon: AiOutlineHome, label: 'Home' },
    { id: 'search', icon: AiOutlineSearch, label: 'Search' },
    { id: 'library', icon: FaBook, label: 'Library' },
    { id: 'documentation', icon: AiOutlineBook, label: 'Documentation' },
    { id: 'pricing', icon: FaTags, label: 'Pricing' },
  ];

  const Sidebar = () => (
    <div className={`
      fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-indigo-100 shadow-lg
      transform transition-transform duration-300 ease-in-out
      ${isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
      flex flex-col
    `}>
      <div className="p-4 border-b border-indigo-100 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="ConvoLabs Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-indigo-600">ConvolabsAI</span>
        </div>
        {isMobile && (
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        )}
      </div>
      <nav className="p-4 space-y-2 flex-grow">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              if (isMobile) setSidebarOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-indigo-100">
        <button onClick={() => setIsProfileOpen(true)} className="w-full flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
          <FaUser size={16} />
          <span>{userName}</span>
        </button>
        <button onClick={handleSignOut} className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">
          <FaSignOutAlt size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  const SearchBar = () => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center p-4">
          <FaSearch className="text-gray-400 text-xl mr-4" />
          <input
            type="text"
            placeholder="What AI solution are you looking for?"
            className="w-full text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <button
            onClick={() => {
              if (isRecording) stopRecording();
              else startRecording();
            }}
            className={`ml-4 p-2 rounded-full transition-colors duration-200 ${isRecording ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <FaMicrophone className={`text-xl ${isRecording ? 'animate-pulse' : ''}`} />
          </button>
        </div>
        {isRecording && <AudioWave analyser={analyser} isRecording={isRecording} />}
      </div>
    </div>
  );

  const contentComponents = {
    home: (
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[60vh] flex flex-col items-center justify-center">
          <div className={`max-w-3xl w-full transition-all duration-300 ${searchFocus ? "scale-105" : ""}`}>
            <SearchBar />
          </div>
        </div>
        <div className="relative bg-gray-50 -mt-30">
          <div className="container mx-auto px-4 space-y-6 pb-12">
            <Card className="bg-white shadow-lg border border-gray-100">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-2xl text-gray-800">Welcome Back, {userName}!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-indigo-900 mb-2">Active Projects</h3>
                    <p className="text-4xl font-bold text-indigo-600">{dashboardStats.activeProjects}</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-emerald-900 mb-2">Completed Tasks</h3>
                    <p className="text-4xl font-bold text-emerald-600">{dashboardStats.completedTasks}</p>
                  </div>
                  <div className="bg-violet-50 p-6 rounded-xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-violet-900 mb-2">Team Agents</h3>
                    <p className="text-4xl font-bold text-violet-600">{dashboardStats.teamAgents}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="container mx-auto px-4 space-y-6 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-xl text-gray-800">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-800">Project Update #{i}</p>
                          <p className="text-sm text-gray-600">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg border border-gray-100">
                <CardHeader className="border-b border-gray-100">
                  <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-6 text-left bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100 group">
                      <h3 className="font-medium text-indigo-900 group-hover:text-indigo-700">New Project</h3>
                      <p className="text-sm text-indigo-600">Create a new project</p>
                    </button>
                    <button className="p-6 text-left bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100 group">
                      <h3 className="font-medium text-emerald-900 group-hover:text-emerald-700">Add Task</h3>
                      <p className="text-sm text-emerald-600">Create a new task</p>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    ),
    search: (
      <Card className="bg-white shadow-lg border border-gray-100">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-xl text-gray-800">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI models, tutorials, or resources..."
                className="text-black w-full p-4 pr-12 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <AiOutlineSearch className="absolute right-4 top-4 text-gray-400 text-xl" />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['GPT-4 Integration', 'LLM Tutorials', 'Prompt Engineering', 'Stable Diffusion', 'AI Ethics'].map((term) => (
                  <span key={term} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    {term}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Popular AI Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Text Generation', count: '352 resources' },
                  { name: 'Image Generation', count: '209 resources' },
                  { name: 'Speech Recognition', count: '157 resources' },
                  { name: 'Code Assistance', count: '183 resources' }
                ].map((category) => (
                  <div key={category.name} className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer">
                    <h4 className="font-medium text-indigo-800">{category.name}</h4>
                    <p className="text-xs text-indigo-600">{category.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
    library: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">Your AI Library</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'AI Models', description: 'Access your deployed models', count: '14 models' },
                { title: 'Datasets', description: 'Manage your training data', count: '27 datasets' },
                { title: 'Templates', description: 'Pre-built AI solutions', count: '9 templates' }
              ].map((category) => (
                <div key={category.title} className="p-6 bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h3 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">{category.title}</h3>
                  <p className="text-sm text-indigo-600 mb-2">{category.description}</p>
                  <p className="text-xs font-medium text-indigo-500">{category.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">Recent AI Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Customer Support Bot', type: 'Conversational AI', updated: '2 hours ago', usage: '1.2M queries' },
                { title: 'Product Image Generator', type: 'Diffusion Model', updated: '1 day ago', usage: '582K images' },
                { title: 'Code Completion Engine', type: 'LLM Integration', updated: '3 days ago', usage: '4.7M completions' }
              ].map((project, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <FaBook className="text-indigo-500 text-xl" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{project.title}</p>
                      <p className="text-sm text-gray-600">{project.type} • Updated {project.updated}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full">{project.usage}</span>
                    <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    documentation: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">AI Platform Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Our AI Platform</h2>
              <p className="text-gray-600 mb-6">Welcome to our comprehensive documentation. Learn how to leverage our AI capabilities to build intelligent applications with minimal effort.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Capabilities</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  'Natural Language Processing',
                  'Computer Vision',
                  'Predictive Analytics',
                  'Speech Recognition'
                ].map((capability) => (
                  <div key={capability} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h4 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">API Reference</h4>
                  <p className="text-sm text-indigo-600 mb-3">Complete documentation of our RESTful and GraphQL APIs</p>
                  <div className="flex items-center text-xs text-indigo-700">
                    <span className="font-medium">15 endpoints</span>
                    <span className="mx-2">•</span>
                    <span>Updated 3 days ago</span>
                  </div>
                </div>
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h4 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">Model Training Guide</h4>
                  <p className="text-sm text-indigo-600 mb-3">Learn how to fine-tune AI models on your custom data</p>
                  <div className="flex items-center text-xs text-indigo-700">
                    <span className="font-medium">8 tutorials</span>
                    <span className="mx-2">•</span>
                    <span>20 min read</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Latest Updates</h3>
              <div className="space-y-4">
                {[
                  { date: 'March 10, 2025', title: 'New GPT-5 Integration', description: 'Connect your applications to the latest language model with improved context handling' },
                  { date: 'March 5, 2025', title: 'Enhanced Vision API', description: 'Now supports real-time object detection with 95% accuracy on standard benchmarks' }
                ].map((update, i) => (
                  <div key={i} className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">{update.date}</div>
                    <h4 className="font-medium text-gray-800 mb-2">{update.title}</h4>
                    <p className="text-sm text-gray-600">{update.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    pricing: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl font-semibold text-gray-800">Pricing Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Basic</h3>
                <p className="text-4xl mb-4 text-blue-600">$10</p>
                <ul className="space-y-3">
                  {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span className="text-blue-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">Pro</h3>
                <p className="text-4xl mb-4 text-purple-600">$25</p>
                <ul className="space-y-3">
                  {['All Basic features', 'Feature 4', 'Feature 5'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <span className="text-purple-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
              <div className="p-6 bg-green-50 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Enterprise</h3>
                <p className="text-4xl mb-4 text-green-600">Custom</p>
                <ul className="space-y-3">
                  {['All Pro features', 'Feature 6', 'Feature 7'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-green-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex flex-col">
      {/* Mobile Header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-indigo-100 flex items-center justify-between px-4 z-40">
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
            <AiOutlineMenu size={24} />
          </button>
          <div className="flex items-center space-x-3">
            <img src={logo} alt="ConvoLabs Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-indigo-600">Convolabs</span>
          </div>
          <div className="w-8" />
        </div>
      )}
      {/* Overlay for mobile sidebar */}
      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar} />
      )}
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className={`${isMobile ? 'pt-16 px-4' : 'p-8'} min-h-full`}>
            {contentComponents[activeTab]}
          </div>
        </main>
      </div>
      {isProfileOpen && userData && <ProfileModal />}
    </div>
  );
};

export default Dashboard;