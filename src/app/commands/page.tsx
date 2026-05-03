'use client';

export default function CommandsPage() {
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
        
        /* Animated gradient background */
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
        
        /* Glow text effect */
        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(34, 211, 238, 0.3); }
        }
        
        .glow-title { animation: glow-pulse 3s ease-in-out infinite; }
        
        /* Card hover glow */
        @keyframes card-glow {
          0%, 100% { box-shadow: inset 0 0 20px rgba(34, 211, 238, 0.1), 0 0 30px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: inset 0 0 40px rgba(34, 211, 238, 0.2), 0 0 60px rgba(34, 211, 238, 0.4); }
        }
        
        /* Bounce with glow */
        @keyframes bounce-glow {
          0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.4)); }
          50% { transform: translateY(-16px) scale(1.1); filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.8)); }
        }
        
        .bounce-premium { animation: bounce-glow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
        
        /* Premium card */
        .premium-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.3), rgba(139, 92, 246, 0.3), rgba(34, 211, 238, 0.3));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }
        
        .premium-card:hover::before {
          opacity: 1;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .premium-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.3);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
        }
        
        /* Gradient border effect */
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          backdrop-filter: blur(20px);
        }
        
        .gradient-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.4), rgba(139, 92, 246, 0.4), rgba(34, 211, 238, 0.4));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        /* Section header glow */
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
        
        /* Floating animation */
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
              COMMAND THE CHAOS
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200/80 mb-8 font-light tracking-wide max-w-3xl">
              22 unique viewer commands to manipulate, troll, or help Stevan. Type a command, watch it happen instantly. That's it.
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
              <h2 className="minecraft-font text-5xl md:text-6xl text-cyan-300">PREMIUM ACCESS</h2>
              <p className="text-cyan-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Exclusive commands for subscribers & VIPs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-cyan-500/20 hover:border-cyan-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`}>{cmd.icon}</div>
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

          {/* Subscriber Section */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-5xl md:text-6xl text-blue-300">SUBSCRIBER TIER</h2>
              <p className="text-blue-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Medium chaos for subscribers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subscriberCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-blue-500/20 hover:border-blue-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`}>{cmd.icon}</div>
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
              <h2 className="minecraft-font text-5xl md:text-6xl text-emerald-300">EVERYONE</h2>
              <p className="text-emerald-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Available to all viewers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {everyoneCommands.map((cmd, i) => (
                <div key={i} className="premium-card rounded-2xl p-8 group border-emerald-500/20 hover:border-emerald-400/40">
                  <div className={`text-6xl md:text-7xl mb-6 bounce-premium`}>{cmd.icon}</div>
                  <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">{cmd.name}</h3>
                  <p className="text-emerald-200 font-semibold text-sm tracking-wide mb-3">{cmd.perm}</p>
                  <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">{cmd.desc}</p>
                  <div className="pt-4 border-t border-emerald-500/20 flex justify-between items-center">
                    <span className="text-xs text-emerald-300/60 uppercase tracking-widest">Cooldown</span>
                    <span className="text-lg font-bold text-emerald-300">{cmd.cooldown}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Points Section */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-5xl md:text-6xl text-violet-300">CHANNEL POINTS</h2>
              <p className="text-violet-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Instant effects - no cooldowns</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card rounded-2xl p-8 border-red-500/20 hover:border-red-400/40">
                <div className="text-6xl md:text-7xl mb-6 bounce-premium">🟢</div>
                <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">Sabotage: Lite</h3>
                <p className="text-red-200 font-semibold text-sm tracking-wide mb-3">150 Points</p>
                <p className="text-red-100/80 text-sm leading-relaxed mb-6">A nudge in the wrong direction. Light chaos that might be survivable. Probably.</p>
                <div className="pt-4 border-t border-red-500/20">
                  <p className="text-xs text-red-300/60 uppercase tracking-widest">Instant activation</p>
                </div>
              </div>

              <div className="premium-card rounded-2xl p-8 border-orange-500/20 hover:border-orange-400/40">
                <div className="text-6xl md:text-7xl mb-6 bounce-premium" style={{animationDelay: '0.2s'}}>🟠</div>
                <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">Sabotage: Spicy</h3>
                <p className="text-orange-200 font-semibold text-sm tracking-wide mb-3">500 Points</p>
                <p className="text-orange-100/80 text-sm leading-relaxed mb-6">Things escalate quickly. Medium chaos ensues. Stevan should be nervous about now.</p>
                <div className="pt-4 border-t border-orange-500/20">
                  <p className="text-xs text-orange-300/60 uppercase tracking-widest">Instant activation</p>
                </div>
              </div>

              <div className="premium-card rounded-2xl p-8 border-red-600/20 hover:border-red-500/40">
                <div className="text-6xl md:text-7xl mb-6 bounce-premium" style={{animationDelay: '0.4s'}}>🔴</div>
                <h3 className="minecraft-font text-2xl md:text-3xl mb-2 text-white">Sabotage: Chaos</h3>
                <p className="text-red-200 font-semibold text-sm tracking-wide mb-3">2000 Points</p>
                <p className="text-red-100/80 text-sm leading-relaxed mb-6">All hell breaks loose. Maximum destruction. Stevan's fate becomes genuinely uncertain.</p>
                <div className="pt-4 border-t border-red-500/20">
                  <p className="text-xs text-red-300/60 uppercase tracking-widest">Instant activation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-40">
            <div className="premium-card rounded-2xl p-10 border-cyan-500/20 hover:border-cyan-400/40">
              <h3 className="minecraft-font text-4xl md:text-5xl text-cyan-300 mb-8">HOW IT WORKS</h3>
              <div className="space-y-8">
                <div className="group">
                  <p className="text-red-400 font-bold text-lg mb-2">🔴 CHAOS COMMANDS</p>
                  <p className="text-gray-300 leading-relaxed text-sm">Spawn mobs. Trigger explosions. Make him panic. These hurt. Stevan dies. It's funny.</p>
                </div>
                <div className="group">
                  <p className="text-emerald-400 font-bold text-lg mb-2">🟢 MERCY COMMANDS</p>
                  <p className="text-gray-300 leading-relaxed text-sm">Give him food or heal him. Basically you're saving his life. Sometimes he needs it.</p>
                </div>
                <div className="group">
                  <p className="text-violet-400 font-bold text-lg mb-2">⚡ SPECIAL EFFECTS</p>
                  <p className="text-gray-300 leading-relaxed text-sm">Weird stuff. Could go either way. Gambles and random mobs. Never know what you're gonna get.</p>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-2xl p-10 border-violet-500/20 hover:border-violet-400/40">
              <h3 className="minecraft-font text-4xl md:text-5xl text-violet-300 mb-8">PRO TIPS</h3>
              <div className="space-y-8">
                <div className="group">
                  <p className="text-cyan-400 font-bold text-lg mb-2">🎯 COORDINATE WITH CHAT</p>
                  <p className="text-gray-300 leading-relaxed text-sm">Work together. Spam commands. Mix chaos and mercy. The more people typing, the worse it gets.</p>
                </div>
                <div className="group">
                  <p className="text-cyan-400 font-bold text-lg mb-2">⏰ TIMING IS EVERYTHING</p>
                  <p className="text-gray-300 leading-relaxed text-sm">Wait for him to get low, then hit him with chaos. Or save him when he's about to die. Mix it up.</p>
                </div>
                <div className="group">
                  <p className="text-cyan-400 font-bold text-lg mb-2">🔄 SPAM IT UP</p>
                  <p className="text-gray-300 leading-relaxed text-sm">More commands = more chaos. Stack them fast. Make it impossible to tell what's happening.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cooldown Reference */}
          <div className="mb-40">
            <div className="section-header">
              <h2 className="minecraft-font text-4xl md:text-5xl text-cyan-300">COOLDOWN REFERENCE</h2>
            </div>
            <div className="premium-card rounded-2xl p-10 border-cyan-500/20">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-cyan-500/20">
                  <div>
                    <p className="text-cyan-200 font-bold text-lg">!mob, !potion</p>
                    <p className="text-cyan-100/60 text-xs mt-1">The good ones</p>
                  </div>
                  <span className="minecraft-font text-2xl text-cyan-400">2 MIN</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-cyan-500/20">
                  <div>
                    <p className="text-cyan-200 font-bold text-lg">!villager, !luckyhates</p>
                    <p className="text-cyan-100/60 text-xs mt-1">The really good ones</p>
                  </div>
                  <span className="minecraft-font text-2xl text-cyan-400">5 MIN</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-emerald-500/20">
                  <div>
                    <p className="text-emerald-200 font-bold text-lg">!freemob, !feedme, !gamble</p>
                    <p className="text-emerald-100/60 text-xs mt-1">Everyone gets these</p>
                  </div>
                  <span className="minecraft-font text-2xl text-emerald-400">5 MIN</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-violet-200 font-bold text-lg">Channel Points Sabotage</p>
                    <p className="text-violet-100/60 text-xs mt-1">Pay to play</p>
                  </div>
                  <span className="minecraft-font text-2xl text-violet-400">NONE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Events Section */}
          <div className="mb-32">
            <div className="section-header">
              <h2 className="minecraft-font text-4xl md:text-5xl text-violet-300">AUTO EVENTS</h2>
              <p className="text-violet-200/60 text-sm md:text-base mt-3 tracking-widest uppercase font-semibold">Chat-triggered effects • Real engagement</p>
            </div>
            <p className="text-gray-300 mb-10 text-base max-w-3xl">Whenever someone follows, subs, or sends bits, something happens automatically in the server. No command needed. More people = more chaos.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="premium-card rounded-2xl p-8 border-cyan-500/20 hover:border-cyan-400/40 text-center group">
                <p className="text-5xl mb-4 float-anim">💬</p>
                <p className="minecraft-font text-cyan-300 font-bold text-lg">FOLLOWS</p>
                <p className="text-cyan-100/60 text-xs mt-3 tracking-widest">Someone followed</p>
              </div>
              <div className="premium-card rounded-2xl p-8 border-red-500/20 hover:border-red-400/40 text-center group">
                <p className="text-5xl mb-4 float-anim" style={{animationDelay: '0.2s'}}>❤️</p>
                <p className="minecraft-font text-red-300 font-bold text-lg">SUBS</p>
                <p className="text-red-100/60 text-xs mt-3 tracking-widest">Someone subscribed</p>
              </div>
              <div className="premium-card rounded-2xl p-8 border-purple-500/20 hover:border-purple-400/40 text-center group">
                <p className="text-5xl mb-4 float-anim" style={{animationDelay: '0.4s'}}>💜</p>
                <p className="minecraft-font text-purple-300 font-bold text-lg">BITS</p>
                <p className="text-purple-100/60 text-xs mt-3 tracking-widest">Bits were sent</p>
              </div>
              <div className="premium-card rounded-2xl p-8 border-yellow-500/20 hover:border-yellow-400/40 text-center group">
                <p className="text-5xl mb-4 float-anim" style={{animationDelay: '0.6s'}}>⭐</p>
                <p className="minecraft-font text-yellow-300 font-bold text-lg">POINTS</p>
                <p className="text-yellow-100/60 text-xs mt-3 tracking-widest">Points spent</p>
              </div>
              <div className="premium-card rounded-2xl p-8 border-green-500/20 hover:border-green-400/40 text-center group">
                <p className="text-5xl mb-4 float-anim" style={{animationDelay: '0.8s'}}>🔥</p>
                <p className="minecraft-font text-green-300 font-bold text-lg">MOMENTUM</p>
                <p className="text-green-100/60 text-xs mt-3 tracking-widest">Chat is going crazy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

