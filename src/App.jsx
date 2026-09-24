import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingNow from './components/TrendingNow';
import ReasonsToJoin from './components/ReasonsToJoin';
import Footer from './components/Footer';

function App() {
  const movies = [
    { id: 1, title: 'Movie 1', image: 'https://picsum.photos/220/300?random=1' },
    { id: 2, title: 'Movie 2', image: 'https://picsum.photos/220/300?random=2' },
    { id: 3, title: 'Movie 3', image: 'https://picsum.photos/220/300?random=3' },
    { id: 4, title: 'Movie 4', image: 'https://picsum.photos/220/300?random=4' },
    { id: 5, title: 'Movie 5', image: 'https://picsum.photos/220/300?random=5' },
  ];

  const reasons = [
    {
      id: 1,
      title: 'Enjoy on your TV',
      description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    },
    {
      id: 2,
      title: 'Download your shows to watch offline',
      description: 'Save your favourites easily and always have something to watch.',
    },
    {
      id: 3,
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    },
    {
      id: 4,
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favourite characters in a space made just for them, free with your membership.',
    },
  ];

  const footerLinks = [
    'FAQ',
    'Help Centre',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Contact Us',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#111827' : '#f3f4f6';
    document.body.style.color = isDarkMode ? '#f9fafb' : '#111827';
    document.body.style.transition = 'all 0.3s ease';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.transition = '';
    };
  }, [isDarkMode]);

  const filteredMovies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return movies.filter((movie) => {
      const matchesSearch = !query || movie.title.toLowerCase().includes(query);
      const matchesPopular = !showOnlyPopular || movie.id % 2 === 0;
      return matchesSearch && matchesPopular;
    });
  }, [movies, searchTerm, showOnlyPopular]);

  return (
    <div>
      <Navbar brand="NETFLIX" signInLabel="Sign In" />
      <Hero
        title="See what the whole world is watching"
        subtitle="Starts at ₹149. Cancel at any time."
        buttonLabel="Finish Sign-Up"
        backgroundImage="https://picsum.photos/1600/900?random=1"
      />

      <section
        style={{
          maxWidth: '1100px',
          margin: '40px auto',
          padding: '24px',
          background: isDarkMode ? '#1f2937' : '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
          color: isDarkMode ? '#f9fafb' : '#111827',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0 }}>Hook Demo Section</h2>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              border: 'none',
              background: isDarkMode ? '#facc15' : '#dc2626',
              color: isDarkMode ? '#111827' : '#ffffff',
              cursor: 'pointer',
              fontWeight: '700',
            }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies..."
            style={{
              flex: 1,
              minWidth: '220px',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid #d1d5db',
              outline: 'none',
            }}
          />

          <button
            onClick={() => setShowOnlyPopular(!showOnlyPopular)}
            style={{
              padding: '12px 18px',
              borderRadius: '10px',
              border: 'none',
              background: '#2563eb',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            {showOnlyPopular ? 'Show All' : 'Popular Only'}
          </button>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} style={{ width: '180px', textAlign: 'center' }}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px' }}
                />
                <p style={{ marginTop: '10px', fontWeight: '600' }}>{movie.title}</p>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </section>

      <TrendingNow title="Trending Now" movies={movies} />
      <ReasonsToJoin title="More reasons to join" reasons={reasons} />
      <Footer links={footerLinks} copyright="© 2026 Netflix Clone. Built for learning purposes." />
    </div>
  );
}

export default App;