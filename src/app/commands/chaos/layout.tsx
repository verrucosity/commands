import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chaos Commands - Stevan vs Chat',
  description: 'Control Stevan\'s Minecraft world with 22 unique viewer commands! From light pranks to apocalyptic destruction.',
};

export default function ChaosCommandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
