import TeamHero from '@/components/team/TeamHero'
import OurTeam from '@/components/team/OurTeam'
import React from 'react'

export default function TeamPage() {
  return (
    <div>
        <TeamHero />
        <section id="team">
            <OurTeam />
        </section>
    </div>
  )
}
