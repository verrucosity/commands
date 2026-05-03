'use client';

export default function ChaosCommandsPage() {
  const premiumCommands = [
    { name: '!mob <name>', perm: 'Subs/VIPs', cooldown: '5m', icon: '🐉', desc: 'Spawns a random mob from the pool and names it whatever you type.' },
    { name: '!potion', perm: 'Subs/VIPs', cooldown: '5m', icon: '✨', desc: 'Give him a random buff. Could be strength, speed, or healing.' },
    { name: '!giant', perm: 'Subs/VIPs', cooldown: '5m', icon: '👹', desc: 'Summon a giant hostile zombie. True dread.' },
    { name: '!armageddon', perm: 'Subs/VIPs', cooldown: '5m', icon: '💀', desc: 'Multiple chaos events hit all at once. Complete destruction.' },
    { name: '!control', perm: 'Subs/VIPs', cooldown: '5m', icon: '🎮', desc: 'Commands are confused. Controls go haywire.' },
    { name: '!endgame', perm: 'Subs/VIPs', cooldown: '5m', icon: '👁️', desc: 'Endermen teleport you everywhere. Embrace the void.' },
    { name: '!apocalypse', perm: 'Subs/VIPs', cooldown: '5m', icon: '💥', desc: 'Weather chaos + mobs + environment effects. The end is here.' },
  ];

  const subscriberCommands = [
    { name: '!villager <msg>', perm: 'Subs', cooldown: '5m', icon: '🧑‍🌾', desc: 'Make a villager say your message. He cannot ignore you.' },
    { name: '!swarm <mob>', perm: 'Subs', cooldown: '5m', icon: '👥', desc: 'Spawn multiple mobs at once. Controlled chaos.' },
    { name: '!weather', perm: 'Subs', cooldown: '5m', icon: '⛈️', desc: 'Summon a thunderstorm. Lightning and rain incoming.' },
    { name: '!cursed', perm: 'Subs', cooldown: '5m', icon: '🔥', desc: 'Multiple bad effects hit at once. Full curse.' },
    { name: '!party', perm: 'Subs', cooldown: '5m', icon: '🎉', desc: 'Celebrate with rabbits, fireworks, and color effects.' },
    { name: '!void', perm: 'Subs', cooldown: '5m', icon: '🌑', desc: 'Darkness falls. Teleport to the void.' },
  ];

  const everyoneCommands = [
    { name: '!freemob', perm: 'Everyone', cooldown: '5m', icon: '🦇', desc: 'Spawn something random. Could be anything. Total luck.' },
    { name: '!feedme', perm: 'Everyone', cooldown: '5m', icon: '🐄', desc: 'Summon a cow named after the chatter who used the command.' },
    { name: '!gamble', perm: 'Everyone', cooldown: '5m', icon: '🎰', desc: '50/50: either a mob spawns or he gets food.' },
    { name: '!luckyhates', perm: 'Everyone', cooldown: '5m', icon: '⛏️', desc: 'Dig the ground out from under him. Just chaos.' },
    { name: '!slowfall', perm: 'Everyone', cooldown: '5m', icon: '☁️', desc: 'Float gently to the ground. Briefly.' },
    { name: '!disco', perm: 'Everyone', cooldown: '5m', icon: '🎆', desc: 'Night vision + glowing effect. Dance mode activated.' },
    { name: '!spin', perm: 'Everyone', cooldown: '5m', icon: '🌀', desc: 'Spins you rapidly. Get dizzy.' },
    { name: '!shield', perm: 'Everyone', cooldown: '5m', icon: '🛡️', desc: 'Temporary protection. Resistance or damage reduction effects.' },
    { name: '!confusion', perm: 'Everyone', cooldown: '5m', icon: '🤪', desc: 'Your senses betray you. Nausea, confusion, blindness incoming.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        
        .minecraft-font { font-family: 'Righteous', cursive; letter-spacing: 0.05em; }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #1a0a2e, #16213e, #0f3460, #1a051f, #2d1b69);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(34, 211, 238, 0.3); }
        }
        
        .glow-title { animation: glow-pulse 3s ease-in-out infinite; }
        
        @keyframes bounce-glow {
          0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.4)); }
          50% { transform: translateY(-16px) scale(1.1); filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.8)); }
        }
        
        .bounce-premium { animation: bounce-glow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
        
        .premium-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.3);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
        }
        
        .section-header {
          position: relative;
          padding-bottom: 12px;
          margin-bottom: 24px;
        }
        
        .section-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.8), rgba(139, 92, 246, 0.4), transparent);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .float-anim { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Animated background */}
      <div className="gradient-bg fixed inset-0 -z-10"></div>
      
      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-violet-600 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 -right-40 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-32">
            <h1 className="minecraft-font text-6xl md:text-8xl mb-4 glow-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400">
              CHAOS COMMANDS
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200/80 mb-8 font-light tracking-wide max-w-3xl">
              22 unique viewer commands to manipulate, troll, or help Stevan. From light inconveniences to apocalyptic destruction.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
              <div className="premium-card px-6 py-3 rounded-lg border-cyan-500/30">
                <p className="minecraft-font text-sm text-cyan-300">9 EVERYONE</p>
                <p className="text-xs text-cyan-200/60 mt-1">No requirements</p>
              </div>
              <div className="premium-card px-6 py-3 rounded-lg border-blue-500/30">
                <p className="minecraft-font text-sm text-blue-300">6 SUBS</p>
                <p className="text-xs text-blue-200/60 mt-1">Subscriber only</p>
              </div>
              <div className="premium-card px-6 py-3 rounded-lg border-purple-500/30">
                <p className="minecraft-font text-sm text-purple-300">7 VIP/MOD</p>
                <p className="text-xs text-purple-200/60 mt-1">Premium access</p>
              </div>
            </div>
          </div>

          {/* Premium Access Section */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-5xl md:text-6xl text-purple-300">🌟 PREMIUM TIER (VIP/MOD)</h2>
              <p className="text-purple-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Extreme chaos for subscribers & VIPs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-purple-500/20 hover:border-purple-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`} style={{animationDelay: `${i * 0.1}s`}}>{cmd.icon}</div>
                  <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">{cmd.name}</h3>
                  <p className="text-purple-200 font-semibold text-sm tracking-wide mb-3">{cmd.perm}</p>
                  <p className="text-purple-100/80 text-sm leading-relaxed mb-6">{cmd.desc}</p>
                  <div className="pt-4 border-t border-purple-500/20 flex justify-between items-center">
                    <span className="text-xs text-purple-300/60 uppercase tracking-widest">Cooldown</span>
                    <span className="text-lg font-bold text-purple-300">{cmd.cooldown}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriber Section */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-5xl md:text-6xl text-blue-300">💎 SUBSCRIBER TIER</h2>
              <p className="text-blue-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Medium chaos for subscribers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subscriberCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-blue-500/20 hover:border-blue-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`} style={{animationDelay: `${i * 0.1}s`}}>{cmd.icon}</div>
                  <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">{cmd.name}</h3>
                  <p className="text-blue-200 font-semibold text-sm tracking-wide mb-3">{cmd.perm}</p>
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-6">{cmd.desc}</p>
                  <div className="pt-4 border-t border-blue-500/20 flex justify-between items-center">
                    <span className="text-xs text-blue-300/60 uppercase tracking-widest">Cooldown</span>
                    <span className="text-lg font-bold text-blue-300">{cmd.cooldown}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Everyone Section */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-5xl md:text-6xl text-cyan-300">🌍 EVERYONE</h2>
              <p className="text-cyan-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Light chaos for all viewers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {everyoneCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-cyan-500/20 hover:border-cyan-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`} style={{animationDelay: `${i * 0.1}s`}}>{cmd.icon}</div>
                  <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">{cmd.name}</h3>
                  <p className="text-cyan-200 font-semibold text-sm tracking-wide mb-3">{cmd.perm}</p>
                  <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">{cmd.desc}</p>
                  <div className="pt-4 border-t border-cyan-500/20 flex justify-between items-center">
                    <span className="text-xs text-cyan-300/60 uppercase tracking-widest">Cooldown</span>
                    <span className="text-lg font-bold text-cyan-300">{cmd.cooldown}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="premium-card rounded-2xl p-10 border-cyan-500/20 hover:border-cyan-400/40">
              <h3 className="minecraft-font text-4xl text-cyan-300 mb-6">⚡ HOW THEY WORK</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">5-min cooldown</span> per viewer per command</p>
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Access levels</span> determine who can use what</p>
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Instant execution</span> - type and watch it happen</p>
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Stacking allowed</span> - multiple commands can queue</p>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-10 border-purple-500/20 hover:border-purple-400/40">
              <h3 className="minecraft-font text-4xl text-purple-300 mb-6">💡 PRO TIPS</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-300">Mix <span className="text-cyan-400 font-bold">chaos & mercy</span> commands for maximum entertainment</p>
                <p className="text-gray-300"><span className="text-purple-400 font-bold">Combine effects</span> - spam multiple commands for layered chaos</p>
                <p className="text-gray-300"><span className="text-blue-400 font-bold">Subscribers unlock</span> way more destructive options</p>
                <p className="text-gray-300"><span className="text-cyan-400 font-bold">Coordinate with chat</span> to focus on specific targets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
