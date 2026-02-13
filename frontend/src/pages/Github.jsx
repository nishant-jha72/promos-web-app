import React, { useEffect, useState } from "react";
// Import icons directly without aliases to avoid "not provided an export" errors
import { 
  Github, 
  Users, 
  Library, 
  ExternalLink, 
  MapPin, 
  Link as LinkIcon, 
  Code2, 
  Globe 
} from "lucide-react";

const GithubProfilePage = () => {
  const username = "nishant-jha72";
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [username]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 relative">
      <div className="max-w-lg mx-auto relative z-10">
        
        {/* PROFILE CARD */}
        {profile && (
          <div className="bg-gray-900 rounded-[3rem] shadow-2xl p-10 text-center border border-gray-800">
            
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="relative w-40 h-40 rounded-full mx-auto border-4 border-gray-800 shadow-2xl"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 font-serif">{profile.name}</h2>
            <p className="text-blue-500 font-mono text-sm mb-6 flex items-center justify-center gap-2">
               <Globe size={14} /> github.com/{profile.login}
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-1 mb-10">
              <div className="p-4 bg-white/5 rounded-l-2xl">
                <p className="text-2xl font-black text-white">{profile.followers}</p>
                <p className="text-[10px] uppercase text-gray-500 font-bold flex items-center justify-center gap-1">
                  <Users size={12} /> Followers
                </p>
              </div>
              <div className="p-4 bg-white/5 border-x border-white/10">
                <p className="text-2xl font-black text-white">{profile.following}</p>
                <p className="text-[10px] uppercase text-gray-500 font-bold">Following</p>
              </div>
              <div className="p-4 bg-white/5 rounded-r-2xl">
                <p className="text-2xl font-black text-white">{profile.public_repos}</p>
                <p className="text-[10px] uppercase text-gray-500 font-bold flex items-center justify-center gap-1">
                  <Library size={12} /> Repos
                </p>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Github size={20} /> {/* Used directly here */}
              View on GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default GithubProfilePage;