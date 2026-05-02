'use client';

import { ReactNode } from 'react';

interface CommandProps {
  name: string;
  permission: string;
  cooldown: string;
  description: string;
  effect: ReactNode;
  icon: string;
  category: 'chaos' | 'mercy' | 'special';
}

function CommandCard({ name, permission, cooldown, description, effect, icon, category }: CommandProps) {
  const categoryColors: Record<string, string> = {
    chaos: 'border-red-500 bg-gradient-to-br from-red-950 to-red-900/50 shadow-lg shadow-red-500/20 hover:shadow-red-500/50 hover:from-red-900 hover:to-red-800/50',
    mercy: 'border-green-500 bg-gradient-to-br from-green-950 to-green-900/50 shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:from-green-900 hover:to-green-800/50',
    special: 'border-purple-500 bg-gradient-to-br from-purple-950 to-purple-900/50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 hover:from-purple-900 hover:to-purple-800/50',
  };

  const categoryBadgeColors: Record<string, string> = {
    chaos: 'bg-red-500/30 text-red-200 border-red-400 shadow-lg shadow-red-500/50',
    mercy: 'bg-green-500/30 text-green-200 border-green-400 shadow-lg shadow-green-500/50',
    special: 'bg-purple-500/30 text-purple-200 border-purple-400 shadow-lg shadow-purple-500/50',
  };

  return (
    <div className={`border rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer ${categoryColors[category]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <span className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>{icon}</span>
          <div>
            <h3 className="font-black text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{name}</h3>
            <p className="text-sm text-gray-300 mt-1">{description}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${categoryBadgeColors[category]} capitalize shadow-xl transition-all`}>
          {category}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10">
          <span className="text-gray-400 font-semibold">Permission:</span>
          <span className="text-white font-mono font-bold">{permission}</span>
        </div>
        <div className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10">
          <span className="text-gray-400 font-semibold">Cooldown:</span>
          <span className="text-white font-mono font-bold">{cooldown}</span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <span className="text-gray-300 font-semibold block mb-2">✨ Effect:</span>
          <p className="text-white/90 leading-relaxed font-medium">{effect}</p>
        </div>
      </div>
    </div>
  );
}

export default function CommandsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden">
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(147, 51, 234, 0.5); }
          50% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.8); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .glow-text { animation: glow 3s ease-in-out infinite; }
        .float { animation: float 6s ease-in-out infinite; }
        .section-glow {
          background: radial-gradient(ellipse at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="fixed inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="mb-16 text-center relative z-10">
          <div className="float mb-6">
            <h1 className="text-7xl font-black mb-4 tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent glow-text">
                🎮 STEVAN VS CHAT
              </span>
            </h1>
          </div>
          <p className="text-2xl font-bold text-gray-200 mb-4">Control the chaos! Use these commands to help or sabotage Stevan's Minecraft world</p>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur-sm"></div>
        </div>

        <div className="space-y-16 relative z-10">
          <section className="section-glow rounded-2xl p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-3 text-blue-300">👑 SUBSCRIBER COMMANDS</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
              <p className="text-gray-300 mt-4 font-semibold text-lg">Subs &amp; VIPs only. Unlock these exclusive powers with a subscription or VIP status.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <CommandCard
                name="!mob &lt;name&gt;"
                permission="Subs/VIPs/Mods"
                cooldown="2 min per person"
                description="Spawn a random mob with your custom name!"
                effect="Picks from 50+ mob types and spawns it named whatever you want"
                icon="🐉"
                category="special"
              />
              <CommandCard
                name="!potion"
                permission="Subs/VIPs/Mods"
                cooldown="2 min per person"
                description="Grant Stevan a random helpful potion effect"
                effect="Strength, Speed, Resistance, or Regeneration buff"
                icon="✨"
                category="mercy"
              />
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-3 text-green-300">✨ FREE COMMANDS (Everyone)</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-green-300 rounded-full"></div>
              <p className="text-gray-300 mt-4 font-semibold text-lg">Available to ALL viewers. Jump into the chaos and have some fun!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <CommandCard
                name="!freemob"
                permission="Everyone"
                cooldown="5 min per person"
                description="Spawn a completely random mob"
                effect="Roll the dice and spawn whatever comes up. Could be cute, could be deadly!"
                icon="🦇"
                category="chaos"
              />
              <CommandCard
                name="!feedme"
                permission="Everyone"
                cooldown="5 min per person"
                description="Summon food (cow)"
                effect="Stevan needs to eat too! Spawns a cow so the streamer can get food"
                icon="🐄"
                category="mercy"
              />
              <CommandCard
                name="!gamble"
                permission="Everyone"
                cooldown="5 min per person"
                description="50/50 CHAOS or MERCY"
                effect="Flip a coin! 50% chance you spawn a mob, 50% chance you heal Stevan. The ultimate yolo command!"
                icon="🎰"
                category="special"
              />
              <CommandCard
                name="!luckyhates"
                permission="Everyone"
                cooldown="5 min per person"
                description="Dig a pit under Stevan's feet"
                effect="Excavates a tiny pit under your feet to ruin your day! The ground files for divorce"
                icon="⛏️"
                category="chaos"
              />
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-3 text-yellow-300">💎 CHANNEL POINT REDEMPTIONS</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
              <p className="text-gray-300 mt-4 font-semibold text-lg">Spend your hard-earned points to trigger random effects from each tier (no cooldown). Each tier escalates the intensity!</p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <CommandCard
                name="Sabotage: Light Work"
                permission="Channel Points"
                cooldown="None"
                description="A mild nuisance. Stevan will survive... probably."
                effect="Something happens. Could be funny, could be annoying. You'll see!"
                icon="🟢"
                category="chaos"
              />
              <CommandCard
                name="Sabotage: Getting Real"
                permission="Channel Points"
                cooldown="None"
                description="Things are about to get spicy."
                effect="This is where it gets real. Stevan better be prepared for what's coming."
                icon="🟠"
                category="chaos"
              />
              <CommandCard
                name="Sabotage: Pure Chaos"
                permission="Channel Points"
                cooldown="None"
                description="Survival is optional."
                effect="Buckle up. This is the ultimate wildcard. Anything could happen."
                icon="🔴"
                category="chaos"
              />
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8">
            <h2 className="text-4xl font-black mb-8 text-orange-300">⚡ HOW IT WORKS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-950/50 to-red-900/30 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-2xl font-black text-red-300 mb-6">🔴 CHAOS EVENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><span className="text-xl">💣</span> <span className="text-gray-200">Mobs spawn to attack Stevan</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">⚔️</span> <span className="text-gray-200">Dangerous enemies appear</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">🔥</span> <span className="text-gray-200">Explosions, fire, lightning</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">😵</span> <span className="text-gray-200">Debuffs and status effects</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-950/50 to-green-900/30 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-2xl font-black text-green-300 mb-6">🟢 MERCY EVENTS</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><span className="text-xl">💚</span> <span className="text-gray-200">Healing and food spawn</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">🐺</span> <span className="text-gray-200">Helpful mobs appear (wolves, cats)</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">⭐</span> <span className="text-gray-200">Buffs and positive effects</span></li>
                  <li className="flex items-center gap-3"><span className="text-xl">😊</span> <span className="text-gray-200">Peaceful moments to recover</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8 bg-gradient-to-br from-purple-950/40 to-pink-950/40 border border-purple-500/30">
            <h2 className="text-4xl font-black mb-8 text-purple-300">💡 PRO TIPS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">🎯 Team up</p>
                <p className="text-gray-300">Work with other viewers to create chaos or save Stevan</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">⏰ Timing is Everything</p>
                <p className="text-gray-300">Wait until Stevan is low health for maximum drama</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">🎰 !gamble is Wild</p>
                <p className="text-gray-300">Use it when you want to take the ultimate risk!</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">🟈 Sabotage Tiers</p>
                <p className="text-gray-300">Spend points for escalating chaos (150, 500, 2000 points)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">💰 Support Stevan</p>
                <p className="text-gray-300">Subscribe or get VIP to unlock premium commands</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition">
                <p className="text-lg font-bold text-purple-200 mb-2">🔗 Combine Effects</p>
                <p className="text-gray-300">Stack commands for maximum impact and hilarity</p>
              </div>
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border border-blue-500/30">
            <h2 className="text-4xl font-black mb-6 text-blue-300">⏱️ COOLDOWN SYSTEM</h2>
            <p className="text-gray-300 mb-6 text-lg font-semibold">Each person has their own cooldown timer for commands:</p>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-white font-bold">!mob • 2 minutes per person</p>
                <p className="text-gray-400 text-sm mt-1">Subs/VIPs/Mods only</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-white font-bold">!freemob, !feedme, !gamble • 5 minutes per person</p>
                <p className="text-gray-400 text-sm mt-1">Individual timers for each viewer</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-white font-bold">Sabotage Redemptions • No Cooldown</p>
                <p className="text-gray-400 text-sm mt-1">Spend points anytime to trigger instant effects!</p>
              </div>
            </div>
          </section>

          <section className="section-glow rounded-2xl p-8 bg-gradient-to-br from-red-950/40 to-orange-950/40 border border-red-500/30">
            <h2 className="text-4xl font-black mb-6 text-red-300">🔥 AUTO CHAOS EVENTS</h2>
            <p className="text-gray-300 mb-8 text-lg font-semibold">Even without using commands, chat can trigger events just by being awesome:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-red-400/30 text-center hover:border-red-400 transition">
                <p className="text-2xl mb-2">💬</p>
                <p className="font-bold text-red-200">Follows</p>
                <p className="text-sm text-gray-300 mt-2">Trigger blessing events</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-red-400/30 text-center hover:border-red-400 transition">
                <p className="text-2xl mb-2">❤️</p>
                <p className="font-bold text-red-200">Subs</p>
                <p className="text-sm text-gray-300 mt-2">Add chaos to the mix</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-red-400/30 text-center hover:border-red-400 transition">
                <p className="text-2xl mb-2">💸</p>
                <p className="font-bold text-red-200">Bits</p>
                <p className="text-sm text-gray-300 mt-2">Unleash special effects</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-red-400/30 text-center hover:border-red-400 transition">
                <p className="text-2xl mb-2">🎁</p>
                <p className="font-bold text-red-200">Donations</p>
                <p className="text-sm text-gray-300 mt-2">Trigger surprises</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-red-400/30 text-center hover:border-red-400 transition">
                <p className="text-2xl mb-2">✨</p>
                <p className="font-bold text-red-200">Momentum</p>
                <p className="text-sm text-gray-300 mt-2">Chaos compounds</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 text-center relative z-10">
          <div className="h-1 w-48 mx-auto mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur-sm"></div>
          <p className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
            Made for chaos. Made for community. Made for streaming.
          </p>
          <p className="text-lg text-gray-400 mb-6">Join the madness and help shape Stevan's destiny</p>
          <p className="text-gray-500">Streams at: <span className="text-blue-300 font-bold text-xl hover:text-blue-200 transition cursor-pointer">twitch.tv/verrucosity</span></p>
        </div>
      </div>
    </div>
  );
}
